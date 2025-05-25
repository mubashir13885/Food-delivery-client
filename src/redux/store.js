import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// persist configuration
const persistConfig = {
  key: 'user',
  storage,
};

// wrap the userReducer with persistReducer
const persistedUserReducer = persistReducer(persistConfig, userReducer);

// configure store
export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export persistor
export const persistor = persistStore(store);
