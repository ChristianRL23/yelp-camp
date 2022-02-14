import { createSlice } from '@reduxjs/toolkit';
import allCampgrounds from './allCampgrounds';

const campgroundsInitalState = allCampgrounds;

const campgroundsSlice = createSlice({
  name: 'campgrounds',
  initialState: campgroundsInitalState,
});

export default campgroundsSlice.reducer;
