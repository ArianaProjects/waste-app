import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./NotificationModal.styles";
import navigationOptions from "./NotificationModal.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const NotificationModalScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text.Body>{t("NOTIFICATIONMODAL_TEXT")}</Text.Body>
    </SafeAreaView>
  );
};
NotificationModalScreen.navigationOptions = navigationOptions();

export default NotificationModalScreen;
