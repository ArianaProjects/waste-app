import SwipeUp from "components/Cards/SwipeUp/SwipeUp";
import UpcomingEventCard from "components/Cards/UpcomingEvent/UpcomingEventCard";
import { AppointmentInterface, NavStatelessComponent } from "interfaces";
import { merge } from "lodash";
import { getAllAppointment } from "network/Appointment";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Animated, SafeAreaView } from "react-native";
import { Calendar } from "react-native-calendars";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { RootState } from "states";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import { Colors, Font } from "style";
import navigationOptions from "./Calendar.navigationOptions";
import styles from "./Calendar.styles";
import { DateData } from "react-native-calendars/src/types";
const NotificationModalScreen = React.lazy(() => import("screens/NotificationModal"));

type MarkedDatesType = {
  [key: string]: MarkingProps;
};
const CalendarScreen: NavStatelessComponent = () => {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);
  const margin = useRef(new Animated.Value(150)).current;
  // const plan = useSelector((state: RootState) => state.userPreferences.appointments);
  const nextWeek = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toString();
  const [plan, setPlan] = useState<AppointmentInterface[]>();
  const [planList, setPlanList] = useState<MarkedDatesType>();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>();

  // TODO show modal
  const [showModal, setShowModal] = useState(true);
  type trashColorsType = {
    [key in WasteType]: string;
  };
  const trashColors: trashColorsType = {
    "0": "#C0C0C0",
    "1": "#A9631F",
    "2": "#6BDFED",
    "3": "#27CC83",
    "4": "#FF513B",
    "5": "#F6D56A",
    "6": "#0E825B",
  };
  const getPlans = async () => {
    const plans = await getAllAppointment(1);
    setPlan(plans.filter((i) => i.date.getDate() >= new Date().getDate()));
  };
  useEffect(() => {
    getPlans();
  }, []);

  useEffect(() => {
    if (!plan) return;
    let d: MarkedDatesType;
    plan.forEach((item) => {
      if (d && Object.keys(d).includes(item.date.toJSON().split("T")[0])) {
        d = {
          ...d,
          [item.date.toJSON().split("T")[0]]: {
            dots: [
              ...(d[item.date.toJSON().split("T")[0]].dots as []),
              { color: trashColors[item.type], key: item.type.toString() },
            ],
          },
        };
      } else {
        d = {
          ...d,
          [item.date.toJSON().split("T")[0]]: {
            dots: [{ color: trashColors[item.type], key: item.type.toString() }],
          },
        };
      }
      setPlanList(d);
    });
  }, [plan]);

  useEffect(() => {
    open
      ? Animated.timing(margin, {
          toValue: 50,
          duration: 150,
          useNativeDriver: false,
        }).start()
      : Animated.timing(margin, {
          toValue: 150,
          duration: 150,
          useNativeDriver: false,
        }).start();
  }, [open]);
  const HandelDayPress = (date: DateData) => {
    if (!plan?.some((d) => new Date(d.date).getDate() === new Date(date.dateString).getDate()))
      return;
    setOpen(true);

    setActive(date.dateString);
  };
  return (
    <>
      <Animated.View style={[styles.container, { marginTop: margin }]}>
        <Calendar
          markingType="multi-dot"
          markedDates={planList}
          enableSwipeMonths
          maxDate={open ? nextWeek : undefined}
          renderArrow={(direction) => (
            <Icon
              name={direction === "left" ? "ios-caret-back-sharp" : "ios-caret-forward-sharp"}
              size={20}
              color={Colors.primary.dark}
            />
          )}
          onDayPress={HandelDayPress}
          theme={{
            "stylesheet.calendar.header": {
              // @ts-ignore
              dayHeader: {
                color: Colors.text.secondary[theme],
              },
            },
            monthTextColor: Colors.primary.dark,
            textMonthFontSize: Font.FontSize.Title1,
            textMonthFontWeight: "900",
            textDisabledColor: Colors.background.default[theme],
            dayTextColor: Colors.text.primary[theme],
            arrowColor: Colors.primary.dark,
            calendarBackground: Colors.background.default[theme],
            todayBackgroundColor: Colors.primary.main,
            todayTextColor: Colors.text.primary.light,
          }}
        />

        <SwipeUp
          onOpen={() => setOpen(true)}
          onClose={() => (setOpen(false), setActive(""))}
          open={open}
        >
          {plan?.map((item, index) => (
            <UpcomingEventCard
              active={new Date(active || "").getDate() === item.date.getDate()}
              key={index}
              remindTime={item.date}
              wasteType={item.type}
            />
          ))}
        </SwipeUp>
      </Animated.View>
      <Suspense fallback={<></>}>
        <NotificationModalScreen trashCanType={2} setShow={setShowModal} show={showModal} />
      </Suspense>
    </>
  );
};
CalendarScreen.navigationOptions = navigationOptions();

export default CalendarScreen;
