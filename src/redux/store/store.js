import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootedReducer = combineReducers(rootReducer)
const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'profile', 'basket', 'checkout', 'orders'],
}
// const persistedReducer = persistReducer(authPersistConfig, rootReducer)

export default () => {
  const store = configureStore({
    reducer: rootedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableStateInvariant: false,
      }).concat(sagaMiddleware),
  })
  // const persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)
  // return { store, persistor }
  return { store }
}
