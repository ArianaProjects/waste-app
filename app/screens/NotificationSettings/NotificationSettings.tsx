import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, Text, View } from "components";
import { t } from "i18n-js";
import { NavStatelessComponent } from "interfaces";
import { navigate } from "navigation";
import React, { useState } from "react";
import { Pressable, Switch } from "react-native";
import { TimePickerModal, en, registerTranslation } from "react-native-paper-dates";

import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "states";
import { userPreferences } from "states/ducks";
import { Colors } from "style";
import navigationOptions from "./NotificationSettings.navigationOptions";
import styles from "./NotificationSettings.styles";

const NotificationSettingsScreen: NavStatelessComponent = ({ navigation }: any) => {
  registerTranslation("en", en);

  // get redux data
  const dispatch = useDispatch();
  const defaultData = useSelector((state: RootState) => state.userPreferences);

  // set data for dispatch to redux
  // const [daySooner, setDaySooner] = useState(1);
  // const [hour, setHour] = useState(1);
  // const [minutes, setMinutes] = useState(1);
  // // set data for dispatch to redux
  const [daySooner, setDaySooner] = useState(defaultData.notificationsConfigs.daySooner);
  const [hour, setHour] = useState(defaultData.notificationsConfigs.hour);
  const [minutes, setMinutes] = useState(defaultData.notificationsConfigs.minutes);

  const navigator = navigate(navigation);
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  // set values

  const [show, setShow] = useState(false);
  const [switchValue, setSwitchValue] = useState(defaultData.activatedNotifications);

  const handelSave = () => {
    dispatch(
      userPreferences.actions.changeNotificationsConfigs({
        daySooner: daySooner,
        hour: hour,
        minutes: minutes,
      })
    );
    dispatch(userPreferences.actions.toggleNotifications(switchValue));
    navigator.goBack();
  };

  return (
    <View.Background style={theme === "dark" ? styles.containerDark : styles.containerLight}>
      <Button.TextButton style={{ marginTop: 8, marginLeft: 4 }} onPress={() => navigator.goBack()}>
        <Icon
          name="ios-arrow-back-outline"
          style={{ marginRight: 5 }}
          size={16}
          color={Colors.primary[theme]}
        />
        {t("back")}
      </Button.TextButton>

      <View.Background style={styles.content}>
        {/* show Notic */}
        <View.Paper style={styles.card}>
          <Text.Title3>{t("showNotification")}</Text.Title3>
          <Switch
            value={switchValue}
            onValueChange={(value) => {
              setSwitchValue(value);
            }}
            shouldRasterizeIOS
            trackColor={{ false: Colors.text.secondary[theme], true: Colors.text.secondary[theme] }}
            thumbColor={switchValue ? Colors.primary.main : Colors.background.default[theme]}
            ios_backgroundColor={Colors.background.default[theme]}
            style={styles.switch}
          />
        </View.Paper>
        {/* remind sooner */}
        <View.Paper style={[styles.card, { paddingVertical: 8, paddingRight: 8 }]}>
          <Text.Title3>{t("RemindMeSooner")}</Text.Title3>

          <View.Background style={styles.inputContainer}>
            <RNPickerSelect
              value={daySooner}
              placeholder={{ value: 0, label: "0 " + t("day") }}
              style={{
                inputIOS: styles.input,
                placeholder: styles.input,
                inputAndroid: styles.input,
              }}
              onValueChange={(e) => {
                e ? setDaySooner(e) : setDaySooner(0);
              }}
              items={days}
            />
          </View.Background>
        </View.Paper>
        {/* remind at? */}
        <View.Paper style={styles.card}>
          <Text.Title3>{t("RemindMeAt")}</Text.Title3>
          <Pressable onPress={() => setShow(true)}>
            <View.Paper style={styles.timeContainer}>
              <Text.Title3>{`${hour}:${minutes}`}</Text.Title3>
            </View.Paper>
          </Pressable>
          <TimePickerModal
            locale="de"
            uppercase={true}
            visible={show}
            animationType="fade"
            onDismiss={() => setShow(false)}
            hours={hour}
            minutes={minutes}
            onConfirm={(e) => {
              setHour(e.hours);
              setMinutes(e.minutes);
              setShow(false);
            }}
          />
        </View.Paper>
      </View.Background>
      <Button.Default style={styles.button} onPress={handelSave}>
        {t("save")}
      </Button.Default>
    </View.Background>
  );
};
NotificationSettingsScreen.navigationOptions = navigationOptions();
NotificationSettingsScreen.displayName = "NotificationSettingsScreen";
export default NotificationSettingsScreen;

const days = [
  { value: 1, label: "1 " + t("day") },
  { value: 2, label: "2 " + t("day") },
  { value: 4, label: "4 " + t("day") },
  { value: 5, label: "5 " + t("day") },
  { value: 6, label: "6 " + t("day") },
  { value: 7, label: "7 " + t("day") },
];
