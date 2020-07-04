import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import reducers from './reducers';

import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['metrics'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
