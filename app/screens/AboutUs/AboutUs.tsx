import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Text } from "components";
import { t } from "utils";
import styles from "./AboutUs.styles";
import navigationOptions from "./AboutUs.navigationOptions";
import { NavStatelessComponent } from "interfaces";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "style";
import WebView from "react-native-webview";
import { navigate } from "navigation";

const AboutUsScreen: NavStatelessComponent = (props: any) => {
  const navigator = navigate(props.navigation);

  return (
    <SafeAreaView style={styles.container}>
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
      <WebView source={{ uri: "https://www.arianagermany.com" }} />
    </SafeAreaView>
  );
};
AboutUsScreen.navigationOptions = navigationOptions();

export default AboutUsScreen;
