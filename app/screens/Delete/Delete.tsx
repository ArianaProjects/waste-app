import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./Delete.styles";
import navigationOptions from "./Delete.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const DeleteScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text.Body>{t("DELETE_TEXT")}</Text.Body>
    </SafeAreaView>
  );
};
DeleteScreen.navigationOptions = navigationOptions();

export default DeleteScreen;
