import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./Address.styles";
import navigationOptions from "./Address.navigationOptions";
import { NavStatelessComponent } from "interfaces";

const AddressScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text.Body>{t("ADDRESS_TEXT")}</Text.Body>
    </SafeAreaView>
  );
};
AddressScreen.navigationOptions = navigationOptions();

export default AddressScreen;
