import React from "react";

import { Text } from "components";
import { t } from "utils";
import { ComponentsStyle } from "style";
import TabBarIcon from "components/TabBarIcon";
import navigation from "navigation";
import { Pressable } from "react-native";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

const navigationOptions = (): BottomTabNavigationOptions => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  // headerBackTitleVisible: false,
  headerTitle: () => <Text.Title1> </Text.Title1>,
  // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
});

export default navigationOptions;
