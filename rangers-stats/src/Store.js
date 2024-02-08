// In your main Redux configuration file (e.g., store.js)
import { configureStore } from '@reduxjs/toolkit';
import teamReducer from './End Screen/EndScreen'

export const store = configureStore({
  reducer: {
    team: teamReducer,
  },
});
