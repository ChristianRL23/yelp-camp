import { createSlice } from '@reduxjs/toolkit';
import allCampgrounds from './allCampgrounds';

const campgroundsInitalState = allCampgrounds;

const campgroundsSlice = createSlice({
  name: 'campgrounds',
  initialState: campgroundsInitalState,
  reducers: {
    addComment(state, payload) {
      const campgroundIndex = state.findIndex(
        (camp) => camp.name === payload.payload.campgroundName
      );
      state[campgroundIndex].comments.push({
        author: payload.payload.author,
        content: payload.payload.content,
      });
    },
  },
});

export const campgroundsActions = campgroundsSlice.actions;

export default campgroundsSlice.reducer;
