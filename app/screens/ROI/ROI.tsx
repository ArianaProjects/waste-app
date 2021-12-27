import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./ROI.styles";
import navigationOptions from "./ROI.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const ROIScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text.Body>{t("ROI_TEXT")}</Text.Body>
    </SafeAreaView>
  );
};
ROIScreen.navigationOptions = navigationOptions();

export default ROIScreen;
