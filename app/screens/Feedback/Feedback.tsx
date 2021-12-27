import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./Feedback.styles";
import navigationOptions from "./Feedback.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const FeedbackScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text.Body>{t("FEEDBACK_TEXT")}</Text.Body>
    </SafeAreaView>
  );
};
FeedbackScreen.navigationOptions = navigationOptions();

export default FeedbackScreen;
