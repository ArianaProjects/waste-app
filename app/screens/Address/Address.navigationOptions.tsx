import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";

import { Text } from "components";
import { t } from "utils";
import { ComponentsStyle } from "style";

const navigationOptions = (): StackNavigationOptions => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTitle: () => <Text.Title1>{t("ADDRESS_TITLE")}</Text.Title1>,
});

export default navigationOptions;
