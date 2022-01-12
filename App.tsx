import StoreReviewChecker from "components/StoreReviewChecker";
import Constants from "expo-constants";
import { locale as localeExpo } from "expo-localization";
import { StatusBar } from "expo-status-bar";
import useCachedResources from "hooks/useCachedResources";
import Navigation from "navigation";
import React from "react";
import { StyleSheet } from "react-native";
import { loadCldr } from "react-native-globalize";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "states";
import { userPreferences } from "states/ducks";
import { Colors } from "style";
import NotificationProvider from "./app/providers/Notification";

loadCldr(
  // Load the locales you actually need
  require("react-native-globalize/locale-data/de"),
  require("react-native-globalize/locale-data/en")
);

const supportedLanguages: string[] = ["en", "de"];
const defaultLanguage = "en";
const defaultLocale = "en-US";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const release = Constants.manifest.revisionId || "0.0.0";

export default function App() {
  const isLoadingComplete = useCachedResources();
  // enableScreens();

  let lang = localeExpo.substring(0, 2);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        {/* <GlobalizeProvider locale={language || defaultLanguage}> */}
        {/* <LocalizationContext.Provider
            value={{
              locale: locale || defaultLocale,
              setLocale: setLocale,
              language: language || defaultLanguage,
              setLanguage: setLanguage,
            }}
          > */}
        <StatusBar backgroundColor={Colors.background.default.light} />
        <NotificationProvider>
          {__DEV__ ? (
            <Navigation />
          ) : (
            <StoreReviewChecker>
              <Navigation />
            </StoreReviewChecker>
          )}
        </NotificationProvider>
        {/* </LocalizationContext.Provider> */}
        {/* </GlobalizeProvider> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
