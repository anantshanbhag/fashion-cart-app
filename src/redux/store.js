import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

/** @createdOn 14-Sep-2021 */
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

process.env.NODE_ENV === 'development'
  && middlewares.push(logger);

/** 
 * The Redux store that holds the state tree.
 * @createdOn 12-Aug-2021 
 */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

/** The Persistor for the given store. */
export const persistor = persistStore(store);