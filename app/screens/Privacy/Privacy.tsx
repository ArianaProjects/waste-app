import { Button, View } from "components";
import { NavStatelessComponent } from "interfaces";
import { navigate } from "navigation";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import WebView from "react-native-webview";
import { useSelector } from "react-redux";
import { RootState } from "states";
import { Colors } from "style";
import { t } from "utils";
import navigationOptions from "./Privacy.navigationOptions";
import styles from "./Privacy.styles";

const PrivacyScreen: NavStatelessComponent = (props: any) => {
  const navigator = navigate(props.navigation);
  const { theme } = useSelector((state: RootState) => state.systemTheme);
  return (
    <View.Background style={theme === "dark" ? styles.containerDark : styles.containerLight}>
      <Button.TextButton
        style={{ margin: 8 }}
        onPress={() => {
          navigator.openSetting();
        }}
      >
        <Icon
          name="ios-arrow-back-outline"
          style={{ marginRight: 5 }}
          size={16}
          color={Colors.primary[theme]}
        />
        {t("back")}
      </Button.TextButton>
      <WebView source={{ uri: "https://www.arianagermany.com/privacy" }} />
    </View.Background>
  );
};
PrivacyScreen.navigationOptions = navigationOptions();

export default PrivacyScreen;
