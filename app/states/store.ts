import { configureStore } from "@reduxjs/toolkit";
import { Action } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["userPreferences"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
