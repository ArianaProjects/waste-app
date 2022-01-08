import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import { locale as localeExpo } from "expo-localization";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { loadCldr, GlobalizeProvider } from "react-native-globalize";
import { enableScreens } from "react-native-screens";
import useCachedResources from "hooks/useCachedResources";
import { LocalizationContext } from "utils/i18n";
import Navigation from "navigation";
import useColorScheme from "hooks/useColorScheme";
import StoreReviewChecker from "components/StoreReviewChecker";
import Constants from "expo-constants";
import { store } from "states";
import { View } from "components";

loadCldr(
  // Load the locales you actually need
  require("react-native-globalize/locale-data/de"),
  require("react-native-globalize/locale-data/en")
);

const supportedLanguages: string[] = ["en", "de"];
const defaultLanguage = "de";
const defaultLocale = "de-DE";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const release = Constants.manifest.revisionId || "0.0.0";

export default function App() {
  const isLoadingComplete = useCachedResources();
  enableScreens();

  let lang = localeExpo.substring(0, 2);
  const [language, setLanguage] = useState(lang);
  const [locale, setLocale] = useState(localeExpo);
  let body = <View.Background>EMPTY</View.Background>;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <GlobalizeProvider locale={language || defaultLanguage}>
          <LocalizationContext.Provider
            value={{
              locale: locale || defaultLocale,
              setLocale: setLocale,
              language: language || defaultLanguage,
              setLanguage: setLanguage,
            }}
          >
            {__DEV__ ? (
              <Navigation />
            ) : (
              <StoreReviewChecker>
                <Navigation />
              </StoreReviewChecker>
            )}
          </LocalizationContext.Provider>
        </GlobalizeProvider>
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