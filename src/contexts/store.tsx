import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  auth: authReducer
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;