import { Text, View } from "components";
import SettingCard from "components/Cards/SettingCard/SettingCard";
import SwipeUp from "components/Cards/SwipeUp/SwipeUp";
import { NavStatelessComponent } from "interfaces";
import { navigate } from "navigation";
import React from "react";
import { Image, SafeAreaView } from "react-native";
import { t } from "utils";
import navigationOptions from "./Settings.navigationOptions";
import styles from "./Settings.styles";

const SettingsScreen: NavStatelessComponent = (props: any) => {
  const navigator = navigate(props.navigation);
  // console.log("props", navigator);
  return (
    <>
      <View.Background style={styles.container}>
        <SwipeUp fullWidth>
          <SettingCard
            onPress={() => navigator.openNotificationSettings()}
            text={t("notification") || ""}
            iconName="notifications-none"
          />
          <SettingCard
            onPress={() => navigator.openAddress()}
            text={t("address") || ""}
            iconName="edit-location"
          />
          <SettingCard
            onPress={() => navigator.openROI()}
            text={t("ROI") || ""}
            iconName="delete-outline"
          />
          <SettingCard
            onPress={() => navigator.openLanguage()}
            text={t("language") || ""}
            iconName="language"
          />
          <SettingCard
            switchMode
            onSwitchChange={() => {}}
            onPress={() => {}}
            text={t("darkMode") || ""}
            iconName="nightlight-round"
          />
          <SettingCard
            onPress={() => navigator.openAboutUs()}
            text={t("aboutUs") || ""}
            iconName="info-outline"
          />
          <SettingCard
            onPress={() => navigator.openFeedback()}
            text={t("feedback") || ""}
            iconName="feedback"
          />
          <SettingCard
            onPress={() => navigator.openPrivacy()}
            text={t("privacy") || ""}
            iconName="privacy-tip"
          />
          <SettingCard
            onPress={() => navigator.openImprint()}
            text={t("imprint") || ""}
            iconName="privacy-tip"
          />
          <SettingCard
            onPress={() => navigator.openDelete()}
            text={t("DELETE_TITLE") || ""}
            iconName="privacy-tip"
          />

          <View.Paper style={styles.ownerContainer}>
            <Text.Callout style={{ marginLeft: 8 }}>Powered By:</Text.Callout>
            <View.Paper style={styles.owner}>
              <Image source={require("assets/images/arianaLogo.png")} />
              <Text.Title3 style={{ marginLeft: 8 }}>Ariana Germany GMBH</Text.Title3>
            </View.Paper>
          </View.Paper>
        </SwipeUp>
      </View.Background>
    </>
  );
};
SettingsScreen.navigationOptions = navigationOptions();

export default SettingsScreen;
