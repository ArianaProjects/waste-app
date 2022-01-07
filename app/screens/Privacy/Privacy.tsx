import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Text, View } from "components";
import { t } from "utils";
import styles from "./Privacy.styles";
import navigationOptions from "./Privacy.navigationOptions";
import { NavStatelessComponent } from "interfaces";
import WebView from "react-native-webview";
import { navigate } from "navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "style";

const PrivacyScreen: NavStatelessComponent = (props: any) => {
  const navigator = navigate(props.navigation);
  return (
    <View.Background style={styles.container}>
      <Button.TextButton
        style={{ marginTop: 8, marginLeft: 12, marginVertical: 8 }}
        onPress={() => {
          navigator.openSetting();
        }}
      >
        <Icon
          name="ios-arrow-back-outline"
          style={{ marginRight: 5 }}
          size={16}
          color={Colors.primary.main}
        />
        {t("back")}
      </Button.TextButton>
      <WebView source={{ uri: "https://www.arianagermany.com/privacy" }} />
    </View.Background>
  );
};
PrivacyScreen.navigationOptions = navigationOptions();

export default PrivacyScreen;
