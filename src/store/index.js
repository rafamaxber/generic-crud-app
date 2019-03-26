import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createCrudWithNamedType } from './crud';
import createSagaMiddleware from 'redux-saga';

import { helloSaga } from './crud/saga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  orders: createCrudWithNamedType('orders'),
  users: createCrudWithNamedType('users'),
  workers: createCrudWithNamedType('workers'),
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
    ),
  )
);
