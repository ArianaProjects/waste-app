import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type THEME = "dark" | "light";
export interface initialStateInterface {
  theme: THEME;
}
const initialState: initialStateInterface = {
  theme: "light",
};

export const systemTheme = createSlice({
  name: "systemTheme",
  initialState,
  reducers: {
    toggleTheme(state, action: PayloadAction<"dark" | "light">) {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme } = systemTheme.actions;
