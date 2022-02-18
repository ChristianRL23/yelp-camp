import { createSlice } from '@reduxjs/toolkit';

const userLoggedInitialState = { username: '', fullName: '', logged: false };

const userLoggedSlice = createSlice({
  name: 'userLogged',
  initialState: userLoggedInitialState,
  reducers: {
    login(state, payload) {
      state.username = payload.payload.username;
      state.fullName = payload.payload.fullName;
      state.logged = true;
    },
    logout(state) {
      state.username = '';
      state.fullName = '';
      state.logged = false;
    },
  },
});

export const userLoggedActions = userLoggedSlice.actions;
export default userLoggedSlice.reducer;
