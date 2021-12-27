import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./NotFound.styles";
import navigationOptions from "./NotFound.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const NotFoundScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text.Body>{t("NOTFOUND_TEXT")}</Text.Body>
    </SafeAreaView>
  );
};
NotFoundScreen.navigationOptions = navigationOptions();

export default NotFoundScreen;
