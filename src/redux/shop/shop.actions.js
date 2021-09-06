import ShopActionTypes from "./shop.types";

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

/** 
 * Action to determine fetch collection has started.
 * @createdOn 5-Sep-2021
 * @return `action` { type : FETCH_COLLECTIONS_START }
 */
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

/** 
 * Action to determine fetch collection is success and get list of collections.
 * @createdOn 5-Sep-2021
 * @param collectionsMap list of collections
 * @return action { type : FETCH_COLLECTIONS_SUCCESS, payload: `collectionsMap` }
 */
export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

/** 
 * Action to determine fetch collection is failure and get error message.
 * @createdOn 5-Sep-2021
 * @param errorMessage fetch failure error message
 * @return action { type : FETCH_COLLECTIONS_FAILURE, payload: `errorMessage` }
 */
export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

/** 
 * Action to return a function to fetch collection from firestore.
 * @note redux-thunk middleware calls return function with dispatch method as argument
 * @createdOn 5-Sep-2021
 * @return `function(dispatch)` => fetch collection and dispatch success or failure payloads 
 */
export const fetchCollectionsStartAsync = () => {

  return dispatch => {  //possible due to redux-thunk

    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };

};