import { configureStore } from '@reduxjs/toolkit';
import docsSlice from '../features/docsSlice';

export const store = configureStore({
  reducer: {
    Documents: docsSlice,
  },
});
