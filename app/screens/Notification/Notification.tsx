import { Text, View } from "components";
import SwipeUp from "components/Cards/SwipeUp/SwipeUp";
import UpcomingEventCard from "components/Cards/UpcomingEvent/UpcomingEventCard";
import { AppointmentInterface, NavStatelessComponent } from "interfaces";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "states";
import navigationOptions from "./Notification.navigationOptions";
import styles from "./Notification.styles";

const NotificationScreen: NavStatelessComponent = () => {
  const plan = useSelector((state: RootState) => state.userPreferences.appointments);
  const [data, setData] = useState<AppointmentInterface[]>();
  useEffect(() => {
    setData(plan?.filter((i) => moment(i.date).isBefore()));
  }, [plan]);

  return (
    <View.Background style={styles.container}>
      <ScrollView scrollEnabled>
        {data?.map((item, index) => (
          <UpcomingEventCard key={index} remindTime={item.date} wasteType={item.type} />
        ))}
      </ScrollView>
    </View.Background>
  );
};
NotificationScreen.navigationOptions = navigationOptions();
NotificationScreen.displayName = "Notification";
export default NotificationScreen;
