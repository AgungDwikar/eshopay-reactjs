import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
// kita akan bungkus reducer di aliasnya root reducer
import rootReducer from "../reducers";
import rootSaga from "../middleware";
import {composeWithDevTools} from "redux-devtools-extension"

const logger = createLogger();
const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(saga,logger))
);

// fungsi untuk menjalankan
saga.run(rootSaga)

export default store
