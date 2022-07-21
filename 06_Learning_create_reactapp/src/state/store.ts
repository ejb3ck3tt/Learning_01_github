import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "../state/reducers/rootReducer";
import rootSaga from "../state/sagas/rootSaga";

import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
// const { logger } = require('saga-logger');
const Store = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default Store;
