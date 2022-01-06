import { getAllAppointment } from "apis/Appointment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppointmentInterface } from "interfaces";
import * as Notifications from "expo-notifications";

import { notif, currentLanguage } from "utils";
import { useColorScheme } from "react-native";

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
