import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postApi } from './PostApi';

const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMidleware) => getDefaultMidleware().concat(postApi.middleware),
  });
};
