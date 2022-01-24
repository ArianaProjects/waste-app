import { Text, View } from "components";
import SettingCard from "components/Cards/SettingCard/SettingCard";
import { NavStatelessComponent } from "interfaces";
import { navigate } from "navigation";
import React from "react";
import { Alert, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { userPreferences } from "states/ducks";
import { t } from "utils";
import navigationOptions from "./Settings.navigationOptions";
import styles from "./Settings.styles";

const SettingsScreen: NavStatelessComponent = (props: any) => {
  const navigator = navigate(props.navigation);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(userPreferences.actions.changeCity(null));
    dispatch(userPreferences.actions.changePlace(null));
    dispatch(userPreferences.actions.InitialROI());
    dispatch(userPreferences.actions.changeIntroDone(false));
  };
  const ShowModal = () => {
    Alert.alert(t("deleteData"), t("areYouSure"), [
      {
        text: t("no"),
        style: "cancel",
      },
      { text: t("yes"), onPress: () => deleteHandler() },
    ]);
  };

  return (
    <ScrollView style={styles.container} scrollEnabled>
      <View.Background style={{ marginTop: 24.0 }} />
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
      {/* <SettingCard
        onPress={() => navigator.openFeedback()}
        text={t("feedback") || ""}
        iconName="feedback"
      /> */}
      <SettingCard
        onPress={() => navigator.openPrivacy()}
        text={t("privacy") || ""}
        iconName="privacy-tip"
      />
      <SettingCard
        onPress={() => navigator.openAboutUs()}
        text={t("aboutUs") || ""}
        iconName="info-outline"
      />
      <SettingCard onPress={() => ShowModal()} text={t("deleteData") || ""} iconName="cancel" />
      <View.Paper style={styles.ownerContainer}>
        <Text.Callout style={{ marginLeft: 8 }}>Powered By:</Text.Callout>
        <View.Paper style={styles.owner}>
          <Image source={require("assets/images/arianaLogo.png")} />
          <Text.Title3 style={{ marginLeft: 8 }}>Ariana Germany GMBH</Text.Title3>
        </View.Paper>
      </View.Paper>
      {/* <DeleteModal showModal={showModal} setShowModal={setShowModal} /> */}
    </ScrollView>
  );
};
SettingsScreen.navigationOptions = navigationOptions();

export default SettingsScreen;
