import { userPreferences } from "states/ducks";
import { combineReducers } from "redux";
import { systemTheme } from "./ducks/theme/systemThemeSlice";

const rootReducer = combineReducers({
  userPreferences: userPreferences.reducer,
  systemTheme: systemTheme.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
