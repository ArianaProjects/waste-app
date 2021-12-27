import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "Rubik-Black": require("assets/fonts/Rubik-Black.ttf"),
          "Rubik-Bold": require("assets/fonts/Rubik-Bold.ttf"),
          "Rubik-ExtraBold": require("assets/fonts/Rubik-ExtraBold.ttf"),
          "Rubik-Light": require("assets/fonts/Rubik-Light.ttf"),
          "Rubik-Medium": require("assets/fonts/Rubik-Medium.ttf"),
          "Rubik-Regular": require("assets/fonts/Rubik-Regular.ttf"),
          "Rubik-SemiBold": require("assets/fonts/Rubik-SemiBold.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
