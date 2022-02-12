import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "components";
import { RootTabParamList, RootTabScreenProps } from "interfaces";
import React from "react";
import { Pressable, useColorScheme } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import CalendarScreen from "screens/Calendar";
import NotificationScreen from "screens/Notification";
import SettingsScreen from "screens/Settings";
import { RootState } from "states";
import { Colors } from "style";
import setOpacity from "utils/setOpacity";
import ButtonNavigationStyle from "./ButtonNavigation.style";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  return (
    <BottomTab.Navigator
      initialRouteName="Calendar"
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          headerShadowVisible: false,
          tabBarLabelPosition: "beside-icon",
          tabBarLabel: (e) => {
            return (
              e.focused && (
                <Text.Caption1
                  style={[
                    ButtonNavigationStyle.tabBarLabel,
                    {
                      color: e.focused ? Colors.primary.dark : Colors.text.secondary.light,
                    },
                  ]}
                >
                  {route.name}
                </Text.Caption1>
              )
            );
          },
          tabBarItemStyle: ButtonNavigationStyle.tabBar,
          tabBarStyle:
            theme === "dark"
              ? ButtonNavigationStyle.tabBarContainerDark
              : ButtonNavigationStyle.tabBarContainerLight,
          tabBarActiveBackgroundColor: "#E6FFF0",
          tabBarInactiveBackgroundColor: "red",
          // Colors.background.default[theme],

          tabBarInactiveTintColor: setOpacity(Colors.text.secondary[theme], 0.7),
          tabBarActiveTintColor: Colors.primary.dark,
          tabBarLabelStyle: ButtonNavigationStyle.tabBarLabel,
        };
      }}
    >
      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-calendar-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-notifications-sharp" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingsScreen}
        options={({ navigation }: RootTabScreenProps<"Setting">) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-settings-sharp" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: { name: string; color: string }) {
//   return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
// }
function TabBarIcon(props: { name: string; color: string }) {
  return <Icon size={25} style={{ alignSelf: "center" }} {...props} />;
}
