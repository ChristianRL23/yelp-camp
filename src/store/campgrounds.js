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
        date: payload.payload.date,
        content: payload.payload.content,
      });
    },
    createCampground(state, payload) {
      state.push(payload.payload);
    },
    saveCampgrounds(state, payload) {
      state.length = 0;
      payload.payload.forEach((campground) => state.push(campground));
    },
  },
});

export const campgroundsActions = campgroundsSlice.actions;

export default campgroundsSlice.reducer;
