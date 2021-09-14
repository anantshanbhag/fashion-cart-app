import ShopActionTypes from "./shop.types";

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

/** 
 * `action` to determine fetch collection has started.
 * @returns `action`
 * @createdOn 5-Sep-2021
 */
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

/** 
 * `action` to determine fetch collection is success and get list of collections.
 * @param {object} collectionsMap list of collections
 * @returns `action` { ..., payload: `collectionsMap` }
 * @createdOn 5-Sep-2021
 */
export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

/** 
 * `action` to determine fetch collection is failure and get error message.
 * @param {string} errorMessage fetch failure error message
 * @returns `action` { ..., payload: `errorMessage` }
 * @createdOn 5-Sep-2021
 */
export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

/** 
 * `action` to return a function to fetch collection from firestore.
 * @note redux-thunk middleware calls return function with dispatch method as argument
 * @returns `function(dispatch)` => fetch collection and dispatch success or failure payloads 
 * @createdOn 5-Sep-2021
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