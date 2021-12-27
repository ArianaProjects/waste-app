import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./Language.styles";
import navigationOptions from "./Language.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const LanguageScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text.Body>{t("LANGUAGE_TEXT")}</Text.Body>
    </SafeAreaView>
  );
};
LanguageScreen.navigationOptions = navigationOptions();

export default LanguageScreen;
