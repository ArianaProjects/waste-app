import Constants from "expo-constants";
import { locale as localeExpo } from "expo-localization";
import { StatusBar } from "expo-status-bar";
import useCachedResources from "hooks/useCachedResources";
import Navigation from "navigation";
import React, { useEffect } from "react";
import { Appearance, StyleSheet, useColorScheme } from "react-native";
import { loadCldr } from "react-native-globalize";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "states";
import { Colors } from "style";
import NotificationProvider from "./app/providers/Notification";
// Need manually add Intl polyfill for react-native app
import "intl";
import { Platform } from "react-native";

if (Platform.OS === "android") {
  // See https://github.com/expo/expo/issues/6536 for this issue.
  if (typeof (Intl as any).__disableRegExpRestore === "function") {
    (Intl as any).__disableRegExpRestore();
  }
}
import "intl/locale-data/jsonp/en";
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
        <NotificationProvider>
          <Navigation />
        </NotificationProvider>
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
