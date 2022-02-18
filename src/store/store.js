import { configureStore } from '@reduxjs/toolkit';
import campgroundsReducer from './campgrounds';
import usersReducer from './users';
import userLoggedReducer from './userLogged';

const store = configureStore({
  reducer: {
    campgrounds: campgroundsReducer,
    users: usersReducer,
    userLogged: userLoggedReducer,
  },
});

export default store;
