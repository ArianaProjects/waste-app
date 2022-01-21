import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";

import { Text } from "components";
import { t } from "utils";
import { ComponentsStyle } from "style";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const navigationOptions = (): StackNavigationOptions => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: true,
  headerTitle: () => <Text.Title1>{t("DELETE_TITLE")}</Text.Title1>,
});

export default navigationOptions;
