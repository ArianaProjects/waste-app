import { Button, View } from "components";
import { NavStatelessComponent } from "interfaces";
import { navigate } from "navigation";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import WebView from "react-native-webview";
import { Colors } from "style";
import { t } from "utils";
import navigationOptions from "./Imprint.navigationOptions";
import styles from "./Imprint.styles";

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
      <WebView source={{ uri: "https://www.arianagermany.com/impresum" }} />
    </View.Background>
  );
};
PrivacyScreen.navigationOptions = navigationOptions();

export default PrivacyScreen;
