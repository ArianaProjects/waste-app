import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "interfaces";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import AboutUsScreen from "screens/AboutUs";
import AddressScreen from "screens/Address";
import FeedbackScreen from "screens/Feedback";
import ImprintScreen from "screens/Imprint";
import Intro from "screens/Intro";
import LanguageScreen from "screens/Language";
import NotificationSettingsScreen from "screens/NotificationSettings";
import PrivacyScreen from "screens/Privacy";
import ROI from "screens/ROI";
import { RootState } from "states";
import { userPreferences } from "states/ducks";
import { Colors, ComponentsStyle } from "style";
import { withLocalization } from "utils";
import navigate from "./navigate";
import { BottomTabNavigator } from "./Navigator/ButtomTabNavigator";
// import { actions } from "states/ducks/userPreferences";
function Navigation() {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background.default[theme] }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
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
        <Stack.Screen name="Intro" component={Intro} options={screenOptions} />
      ) : (
        <>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={screenOptions} />
          <Stack.Screen name="Feedback" component={FeedbackScreen} options={screenOptions} />
          <Stack.Screen name="Privacy" component={PrivacyScreen} options={screenOptions} />
          <Stack.Screen name="Imprint" component={ImprintScreen} options={screenOptions} />

          <Stack.Screen name="Language" component={LanguageScreen} options={screenOptions} />
          <Stack.Screen
            name="NotificationSettings"
            component={NotificationSettingsScreen}
            options={screenOptions}
          />
          <Stack.Screen name="ROI" component={ROI} options={screenOptions} />
          <Stack.Screen name="Address" component={AddressScreen} options={screenOptions} />
          <Stack.Screen name="AboutUs" component={AboutUsScreen} options={screenOptions} />
        </>
      )}
    </Stack.Navigator>
  );
}

export { navigate };
export default withLocalization(Navigation);
