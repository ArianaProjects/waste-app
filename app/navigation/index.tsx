import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "interfaces";
import { Appearance, ColorSchemeName } from "react-native";
import NotFoundScreen from "screens/NotFound";
import NotificationModalScreen from "screens/NotificationModal";
import LinkingConfiguration from "./LinkingConfiguration";
import navigate from "./navigate";
import { BottomTabNavigator } from "./Navigator/ButtomTabNavigator";
import * as React from "react";
import { userPreferences } from "states/ducks";
import { useSelector } from "react-redux";
import Intro from "screens/Intro";
import { ComponentsStyle } from "style";
import { useEffect } from "react";
import { RootState } from "states";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  // console.log(colorScheme, Appearance.getColorScheme());
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const screenOptions = {
  headerShown: false,
  ...ComponentsStyle.transitionBetweenScreenPresets,
};

function RootNavigator() {
  const UP = useSelector((state: RootState) => state.userPreferences);
  return (
    <Stack.Navigator>
      {!UP.introDone ? (
        <Stack.Screen name="Intro" component={Intro} options={Intro.navigationOptions} />
      ) : (
        <Stack.Screen name="Root" component={BottomTabNavigator} options={screenOptions} />
      )}
    </Stack.Navigator>
  );
}

export { navigate };
