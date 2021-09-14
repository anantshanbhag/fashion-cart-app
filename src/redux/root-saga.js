import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

/**
 * A seperate root saga to be run by `sagaMiddleware` in Store 
 * 1. `all([])` takes an array of sagas
 * @createdOn 7-Sep-2021
 * @modifiedOn 14-Sep-2021
 */
export default function* rootSaga() {
  yield all([
    call(shopSagas), //similar to writing - shopSagas()
    call(userSagas),
    call(cartSagas)
  ])
}