import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Text, View } from "components";
import { t } from "utils";
import styles from "./AboutUs.styles";
import navigationOptions from "./AboutUs.navigationOptions";
import { NavStatelessComponent } from "interfaces";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "style";
import WebView from "react-native-webview";
import { navigate } from "navigation";
import { RootState } from "states";
import { useSelector } from "react-redux";

const AboutUsScreen: NavStatelessComponent = (props: any) => {
  const navigator = navigate(props.navigation);
  const { theme } = useSelector((state: RootState) => state.systemTheme);

  return (
    <View.Background style={theme === "dark" ? styles.containerDark : styles.containerLight}>
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
          color={Colors.primary[theme]}
        />
        {t("back")}
      </Button.TextButton>
      <WebView source={{ uri: "https://www.arianagermany.com" }} />
    </View.Background>
  );
};
AboutUsScreen.navigationOptions = navigationOptions();

export default AboutUsScreen;
