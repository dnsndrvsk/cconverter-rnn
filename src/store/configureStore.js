import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import middleware from '../middleware';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [],
  blacklist: ['']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(callback) {
  const store = createStore(
    persistedReducer,
    middleware
  );

  persistStore(store, null, () => {
    callback();
  });

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
