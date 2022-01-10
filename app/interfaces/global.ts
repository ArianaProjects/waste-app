import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";

export type fontWeightInterface =
  | "400"
  | "600"
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "500"
  | "700"
  | "800"
  | "900";
export type trashColorsType = {
  [key in WasteType]: string;
};
