import { takeLatest, all, call, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

/** 
 * Saga to invoke Action: clear the cart, when user signs out successfully.
 * 1. Invokes action `clearCart()`
 * @createdOn 14-Sep-2021
 */
export function* clearCartOnSignOut() {
  yield put(clearCart());
}

/** 
 * Saga triggers on Action: when user signs out successfully.
 * 1. Runs saga `clearCartOnSignOut`.
 * @createdOn 14-Sep-2021
 */
export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

/** 
 * All Cart Sagas synchronously executed.
 * @note called in `rootSaga()`. createSagaMiddleware from 'redux-saga' runs `rootSaga()` in the Redux Store.
 * 1. `all()` calls all user sagas one by one.
 * @createdOn 14-Sep-2021
 */
export function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ]);
}