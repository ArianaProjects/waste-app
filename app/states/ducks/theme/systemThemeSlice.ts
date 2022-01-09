import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  theme: "dark" | "light";
}
const initialState: initialStateInterface = {
  theme: "light",
};

export const systemTheme = createSlice({
  name: "light",
  initialState,
  reducers: {
    toggleTheme(state, { payload }) {
      state.theme = payload;
    },
  },
});

export const { toggleTheme } = systemTheme.actions;
