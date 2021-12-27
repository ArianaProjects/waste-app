import { userPreferences } from "states/ducks";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userPreferences: userPreferences.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
