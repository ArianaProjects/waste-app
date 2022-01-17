import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenProps } from "interfaces";
import React from "react";
import { Pressable, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import CalendarScreen from "screens/Calendar";
import NotificationScreen from "screens/Notification";
import SettingsScreen from "screens/Settings";
import { RootState } from "states";
import { Colors } from "style";
import ButtonNavigationStyle from "./ButtonNavigation.style";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomTab.Navigator
        initialRouteName="Calendar"
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: "beside-icon",
          tabBarItemStyle: ButtonNavigationStyle.tabBar,
          tabBarStyle: ButtonNavigationStyle.tabBarContainer,
          tabBarActiveBackgroundColor: "#E6FFF0",
          tabBarInactiveBackgroundColor: Colors.background.paper[theme],  
          tabBarActiveTintColor: Colors.primary.dark,
          tabBarLabelStyle: ButtonNavigationStyle.tabBarLabel,
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
    </SafeAreaView>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: { name: string; color: string }) {
//   return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
// }
function TabBarIcon(props: { name: string; color: string }) {
  return <Icon size={20} style={{ marginBottom: 0 }} {...props} />;
}
