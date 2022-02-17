import { createSlice } from '@reduxjs/toolkit';

const usersInitialState = [];

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
