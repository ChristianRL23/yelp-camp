import { createSlice } from '@reduxjs/toolkit';

const usersInitialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    createNewUser(state, payload) {
      state.push(payload.payload);
    },
    saveUsers(state, payload) {
      state.length = 0;
      payload.payload.forEach((user) => state.push(user));
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
