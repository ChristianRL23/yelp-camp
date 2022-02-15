import { configureStore } from '@reduxjs/toolkit';
import campgroundsReducer from './campgrounds';
import usersReducer from './users';

const store = configureStore({
  reducer: { campgrounds: campgroundsReducer, users: usersReducer },
});

export default store;
