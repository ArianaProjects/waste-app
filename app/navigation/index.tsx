import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useColorScheme from "hooks/useColorScheme";
import { RootStackParamList } from "interfaces";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutUsScreen from "screens/AboutUs";
import AddressScreen from "screens/Address";
import FeedbackScreen from "screens/Feedback";
import Intro from "screens/Intro";
import LanguageScreen from "screens/Language";
import NotificationScreen from "screens/Notification";
import NotificationSettingsScreen from "screens/NotificationSettings";
import PrivacyScreen from "screens/Privacy";
import ROI from "screens/ROI";
import { RootState } from "states";
import { actions } from "states/ducks/userPreferences/userPreferences.slice";
import { ComponentsStyle } from "style";
import { getAllAppointment } from "../network/Appointment";
import navigate from "./navigate";
import { BottomTabNavigator } from "./Navigator/ButtomTabNavigator";
// import { actions } from "states/ducks/userPreferences";
export default function Navigation() {
  const colorScheme = useColorScheme();

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.systemTheme.theme);
  const getPlans = async () => {
    const plans = await getAllAppointment(1);

    dispatch(actions.changeAppointment(plans));
  };
  React.useLayoutEffect(() => {
    getPlans();
    // theme === "system" && dispatch(toggleTheme(colorScheme));
    // alert(theme);
  }, []);

  return (
    <NavigationContainer>
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
        <Stack.Screen name="Intro" component={Intro} options={screenOptions} />
      ) : (
        <>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={screenOptions} />
          <Stack.Screen name="Privacy" component={PrivacyScreen} options={screenOptions} />
          <Stack.Screen name="Language" component={LanguageScreen} options={screenOptions} />
          <Stack.Screen
            name="NotificationSettings"
            component={NotificationSettingsScreen}
            options={screenOptions}
          />
          <Stack.Screen name="ROI" component={ROI} options={screenOptions} />
          <Stack.Screen name="Address" component={AddressScreen} options={screenOptions} />
          <Stack.Screen name="AboutUs" component={AboutUsScreen} options={screenOptions} />
          <Stack.Screen name="FeedBack" component={FeedbackScreen} options={screenOptions} />
        </>
      )}
    </Stack.Navigator>
  );
}

export { navigate };
