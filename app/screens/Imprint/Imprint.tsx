import React from "react";
import { SafeAreaView } from "react-native";
import { Text, View } from "components";
import { t } from "utils";
import styles from "./Imprint.styles";
import navigationOptions from "./Imprint.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const ImprintScreen: NavStatelessComponent = () => {
  return (
    <View.Background style={styles.container}>
      <Text.Body>{t("IMPRINT_TEXT")}</Text.Body>
    </View.Background>
  );
};
ImprintScreen.navigationOptions = navigationOptions();

export default ImprintScreen;
