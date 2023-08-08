import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './count_reducer'

export default configureStore({
    reducer: {
      counter: counterReducer,
    },
  });