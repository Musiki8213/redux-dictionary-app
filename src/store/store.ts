import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from '../features/dictionary/dictionarySlice'; // Import

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

