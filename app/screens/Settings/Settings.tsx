import { View } from "components";
import SettingCard from "components/Cards/SettingCard/SettingCard";
import SwipeUp from "components/Cards/SwipeUp/SwipeUp";
import { NavStatelessComponent } from "interfaces";
import { navigate } from "navigation";
import React from "react";
import { SafeAreaView } from "react-native";
import { t } from "utils";
import navigationOptions from "./Settings.navigationOptions";
import styles from "./Settings.styles";

const SettingsScreen: NavStatelessComponent = (props: any) => {
  const navigator = navigate(props.navigation);
  console.log("props", navigator);
  return (
    <View.Background style={styles.container}>
      <SwipeUp fullWidth>
        <SettingCard
          onPress={() => navigator.openNotificationSettings()}
          text={t("notification") || ""}
          iconName="notifications-outline"
        />
        <SettingCard
          onPress={() => navigator.openAddress()}
          text={t("address") || ""}
          iconName="location-outline"
        />
        <SettingCard
          onPress={() => navigator.openROI()}
          text={t("ROI") || ""}
          iconName="trash-outline"
        />
        <SettingCard
          onPress={() => navigator.openLanguage()}
          text={t("language") || ""}
          iconName="language-outline"
        />
        <SettingCard
          switchMode
          onSwitchChange={() => {}}
          onPress={() => {}}
          text={t("darkMode") || ""}
          iconName="moon-outline"
        />
        <SettingCard
          onPress={() => navigator.openAboutUs()}
          text={t("aboutUs") || ""}
          iconName="information-circle-outline"
        />
        <SettingCard
          onPress={() => navigator.openFeedback()}
          text={t("feedback") || ""}
          iconName="information"
        />
        <SettingCard
          onPress={() => navigator.openPrivacy()}
          text={t("privacy") || ""}
          iconName="shield-outline"
        />
      </SwipeUp>
    </View.Background>
  );
};
SettingsScreen.navigationOptions = navigationOptions();

export default SettingsScreen;
