import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./Notification.styles";
import navigationOptions from "./Notification.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const NotificationScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text.Body>{t("NOTIFICATION_TEXT")}</Text.Body>
    </SafeAreaView>
  );
};
NotificationScreen.navigationOptions = navigationOptions();

export default NotificationScreen;
