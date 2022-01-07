import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, Text, View } from "components";
import { t } from "i18n-js";
import { AppointmentInterface, NavStatelessComponent } from "interfaces";
import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Switch } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "states";
import { Colors } from "style";
import { getAllAppointment } from "network/Appointment";
import navigationOptions from "./NotificationSettings.navigationOptions";
import styles from "./NotificationSettings.styles";
import { navigate } from "navigation";

const NotificationSettingsScreen: NavStatelessComponent = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const defaultData = useSelector((state: RootState) => state.userPreferences);

  const navigator = navigate(navigation);
  const [plan, setPlan] = useState<AppointmentInterface[]>();
  const [remindTime, setRemindTime] = useState(new Date(2022, 1, 4, 9, 30, 0, 0));
  const [show, setShow] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  const getPlans = async () => {
    const plans = await getAllAppointment(1);
    setPlan(plans.filter((i) => i.date.getDate() <= new Date().getDate()));
  };
  useEffect(() => {
    getPlans();
  }, []);
  // {/* TODO put new changes */}
  const handelSave = () => {
    navigator.openSetting();
  };
  return (
    <View.Background style={styles.container}>
      <Button.TextButton
        style={{ marginTop: 8, marginLeft: 4 }}
        onPress={() => navigator.openSetting()}
      >
        <Icon
          name="ios-arrow-back-outline"
          style={{ marginRight: 5 }}
          size={16}
          color={Colors.primary.main}
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
              value={1}
              style={{
                inputIOS: styles.input,

                inputAndroid: styles.input,
              }}
              onValueChange={(e) => {
                console.log(e);
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
              <Text.Title3>
                {remindTime.getHours() > 12
                  ? remindTime.getHours() - 12 + ":" + remindTime.getMinutes()
                  : remindTime.getHours() + ":" + remindTime.getMinutes()}
              </Text.Title3>
              <View.Background style={styles.timeAM_PM}>
                <Text.Title3>{remindTime.getHours() <= 12 ? "AM" : "PM"}</Text.Title3>
              </View.Background>
            </View.Paper>
          </Pressable>
          {show && (
            <DateTimePicker
              themeVariant="dark"
              style={{ backgroundColor: "green" }}
              testID="dateTimePicker"
              value={remindTime}
              mode={"time"}
              is24Hour={false}
              onTouchCancel={() => {}}
              onChange={(e: any) => {
                e.nativeEvent.timestamp && setRemindTime(new Date(e.nativeEvent.timestamp));
                setShow(false);
              }}
            />
          )}
        </View.Paper>
        {/* repeat times */}
        <View.Paper style={styles.card}>
          <Text.Title3>{t("Repeat")}</Text.Title3>
          <View.Background style={styles.inputContainer}>
            <RNPickerSelect
              value={1}
              style={{
                inputIOS: styles.inputTime,
                inputAndroid: styles.inputTime,
              }}
              onValueChange={(e) => {
                console.log(e);
              }}
              items={times}
            />
          </View.Background>
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
const times = [
  { value: 1, label: "1 " + t("time") },
  { value: 2, label: "2 " + t("time") },
  { value: 4, label: "4 " + t("time") },
  { value: 5, label: "5 " + t("time") },
  { value: 6, label: "6 " + t("time") },
  { value: 7, label: "7 " + t("time") },
];
