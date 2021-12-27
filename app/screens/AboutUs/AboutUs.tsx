import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./AboutUs.styles";
import navigationOptions from "./AboutUs.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const AboutUsScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text.Body>{t("ABOUTUS_TEXT")}</Text.Body>
    </SafeAreaView>
  );
};
AboutUsScreen.navigationOptions = navigationOptions();

export default AboutUsScreen;
