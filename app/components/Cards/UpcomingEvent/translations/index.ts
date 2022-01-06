import en from "./en.json";
import de from "./de.json";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";

interface TranslationKeys {
  WasteType: WasteType;
  takeOut: string;
}

export { en, de, TranslationKeys };
