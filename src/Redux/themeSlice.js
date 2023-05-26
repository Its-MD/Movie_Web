import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "changeTheme",
  initialState: false,
  reducers: {
    toggleTheme: (state, action) => {
      return !state;
    },
  },
});
export const themeReducer = themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
