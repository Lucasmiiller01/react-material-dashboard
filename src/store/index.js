import { applyMiddleware, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducers from './ducks/rootReducer';

import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
