import { configureStore } from '@reduxjs/toolkit';
import campgroundsReducer from './campgrounds';

const store = configureStore({
  reducer: { campgrounds: campgroundsReducer },
});

export default store;
