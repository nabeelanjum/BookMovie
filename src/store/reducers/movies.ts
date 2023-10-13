import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
  },

  reducers: {
    updateList: (state, action) => {
      state.list = action.payload;
    },
  }
});

export const updateMoviesList = moviesSlice.actions.updateList;

export default moviesSlice.reducer;
