import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./Privacy.styles";
import navigationOptions from "./Privacy.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const PrivacyScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text.Body>{t("PRIVACY_TEXT")}</Text.Body>
    </SafeAreaView>
  );
};
PrivacyScreen.navigationOptions = navigationOptions();

export default PrivacyScreen;
