import { createSlice } from '@reduxjs/toolkit';

const usersInitialState = [
  {
    username: 'app_admin',
    password: 'secure$password!',
    fullName: 'App Admin',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    createNewUser(state, payload) {
      state.push(payload.payload);
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
