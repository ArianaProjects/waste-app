import { trashColorsType } from "interfaces/global";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
export const ROIs = [
  {
    iconSrc: require("assets/images/trashCans/bio.png"),
    text: "WasteType.BIO",
    waste: WasteType.BIO,
  },
  {
    iconSrc: require("assets/images/trashCans/residual.png"),
    text: "WasteType.ELECTRO",
    waste: WasteType.ELECTRO,
  },
  {
    iconSrc: require("assets/images/trashCans/green.png"),
    text: "WasteType.GREEN",
    waste: WasteType.GREEN,
  },
  {
    iconSrc: require("assets/images/trashCans/paper.png"),
    text: "WasteType.PAPER",
    waste: WasteType.PAPER,
  },
  {
    iconSrc: require("assets/images/trashCans/hazardous.png"),
    text: "WasteType.SPECIAL",
    waste: WasteType.SPECIAL,
  },
  {
    iconSrc: require("assets/images/trashCans/christmas.png"),
    text: "WasteType.RES",
    waste: WasteType.RES,
  },
  {
    iconSrc: require("assets/images/trashCans/packaging.png"),
    text: "WasteType.PACKAGE",
    waste: WasteType.PACKAGE,
  },
];
export const trashColors: trashColorsType = {
  "0": "#C0C0C0",
  "1": "#A9631F",
  "2": "#6BDFED",
  "3": "#27CC83",
  "4": "#FF513B",
  "5": "#F6D56A",
  "6": "#0E825B",
};
