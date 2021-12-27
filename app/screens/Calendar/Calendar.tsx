import React from "react";
import { SafeAreaView } from "react-native";
import { Text } from "components";
import { t } from "utils";
import styles from "./Calendar.styles";
import navigationOptions from "./Calendar.navigationOptions";
import { NavStatelessComponent } from "interfaces";
import { LocaleConfig } from "react-native-calendars";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
const CalendarScreen: NavStatelessComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text.Body>{t("CALENDAR_TEXT")}CalendarScreen</Text.Body> */}
      <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          "2012-05-16": { selected: true, marked: true, selectedColor: "blue" },
          "2012-05-17": { marked: true },
          "2012-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2012-05-19": { disabled: true, disableTouchEvent: true },
        }}
      />
    </SafeAreaView>
  );
};
CalendarScreen.navigationOptions = navigationOptions();

export default CalendarScreen;
