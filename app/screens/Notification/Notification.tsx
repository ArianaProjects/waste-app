import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView } from "react-native";
import { Button, Text } from "components";
import { t } from "utils";
import styles from "./Notification.styles";
import navigationOptions from "./Notification.navigationOptions";
import { AppointmentInterface, NavStatelessComponent } from "interfaces";
import SwipeUp from "components/Cards/SwipeUp/SwipeUp";
import UpcomingEventCard from "components/Cards/UpcomingEvent/UpcomingEventCard";
import { getAllAppointment } from "network/Appointment";

const NotificationScreen: NavStatelessComponent = () => {
  const [plan, setPlan] = useState<AppointmentInterface[]>();
  const getPlans = async () => {
    const plans = await getAllAppointment(1);
    setPlan(plans.filter((i) => i.date.getDate() <= new Date().getDate()));
  };
  useEffect(() => {
    getPlans();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <SwipeUp fullWidth>
        {plan?.map((item, index) => (
          <UpcomingEventCard key={index} remindTime={item.date} wasteType={item.type} />
        ))}
      </SwipeUp>
    </SafeAreaView>
  );
};
NotificationScreen.navigationOptions = navigationOptions();
NotificationScreen.displayName = "Notification";
export default NotificationScreen;
