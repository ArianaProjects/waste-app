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
