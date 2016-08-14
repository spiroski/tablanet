/**
 * Create the store with asynchronously loaded reducers
 */

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {
  fromJS,
} from 'immutable';
import {
  routerMiddleware,
} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

import persistState, {
  mergePersistedState,
} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import {
  serialize,
  deserialize,
} from 'redux-localstorage-immutable';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => noop => noop);

import undoableHistory from './utils/undoableHistory';

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];


  const reducer = compose(
    mergePersistedState(deserialize)
  )(createReducer());

  const storageKey = 'redux-state';

  const storage = compose(
    serialize
  )(adapter(window.localStorage));

  const enhancers = [
    applyMiddleware(...middlewares),
    persistState(storage, storageKey),
    devtools(),
  ];

  let state = fromJS(initialState);

  storage.get(storageKey, (err, localStorage) => {
    if (err) {
      return;
    }
    state = fromJS(localStorage).set('global', undoableHistory(localStorage.global));
  });

  const store = createStore(
    reducer,
    state,
    compose(...enhancers)
  );
  // Create hook for async sagas
  store.runSaga = sagaMiddleware.run;

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    System.import('./reducers').then((reducerModule) => {
      const createReducers = reducerModule.default;
      const nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(nextReducers);
    });
  }

  // Initialize it with no other reducers
  store.asyncReducers = {};
  return store;
}
