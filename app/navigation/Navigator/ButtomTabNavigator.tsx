import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenProps } from "interfaces";
import React from "react";
import { Pressable, useColorScheme } from "react-native";
import AboutUsScreen from "screens/AboutUs";
import SettingsScreen from "screens/Settings";
import { FontAwesome } from "@expo/vector-icons";
import CalendarScreen from "screens/Calendar";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        tabBarActiveTintColor: "red",
      }}
    >
      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={CalendarScreen.navigationOptions}
      />
      <BottomTab.Screen
        name="Notification"
        component={AboutUsScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingsScreen}
        options={({ navigation }: RootTabScreenProps<"Setting">) => ({
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
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
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
