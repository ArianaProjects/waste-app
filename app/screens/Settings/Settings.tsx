import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./Settings.styles";
import navigationOptions from "./Settings.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const SettingsScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text.Body>{t("SETTINGS_TEXT")}</Text.Body>
    </SafeAreaView>
  );
};
SettingsScreen.navigationOptions = navigationOptions();

export default SettingsScreen;
