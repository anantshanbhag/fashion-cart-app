import { takeLatest, all, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shop.types';

/** 
 * Saga to fetch collections from firestore asynchronously.
 * 1. fetch collection into snapshot, and `put()` success or failure actions with payloads.
 * 
 * Similar to redux-thunk method-
 * 
 * collectionRef.get()
 *   .then(snapshot => {
 *     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
 *     dispatch(fetchCollectionsSuccess(collectionsMap));
 *   })
 *   .catch(error => dispatch(fetchCollectionsFailure(error.message)));
 * @createdOn 7-Sep-2021
 */
export function* fetchCollectionsAsync() {
  try {

    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  }
  catch (error) {

    yield put(fetchCollectionsFailure(error.message));
  }
}

/** 
 * Saga to start fetching collections.
 * @note createSagaMiddleware from 'redux-saga' runs this saga in the Store called in rootSaga().
 * 1. `takeLatest()` pass respective action name and saga generator function.
 * @createdOn 7-Sep-2021
 */
export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

/** 
 * All Cart Sagas synchronously executed.
 * @note called in `rootSaga()`. createSagaMiddleware from 'redux-saga' runs `rootSaga()` in the Redux Store.
 * 1. `all()` calls all user sagas one by one.
 * @createdOn 14-Sep-2021
 */
 export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ]);
}