import SwipeUp from "components/Cards/SwipeUp/SwipeUp";
import UpcomingEventCard from "components/Cards/UpcomingEvent/UpcomingEventCard";
import { trashColors } from "constant/ROITypes";
import * as Notifications from "expo-notifications";
import { AppointmentInterface, NavStatelessComponent } from "interfaces";
import { getAllAppointment } from "network/Appointment";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { Calendar } from "react-native-calendars";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import { DateData } from "react-native-calendars/src/types";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { RootState } from "states";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import { Colors, Font } from "style";
import setOpacity from "utils/setOpacity";
import navigationOptions from "./Calendar.navigationOptions";
import styles from "./Calendar.styles";
const NotificationModalScreen = React.lazy(() => import("screens/NotificationModal"));

type MarkedDatesType = {
  [key: string]: MarkingProps;
};
const CalendarScreen: NavStatelessComponent = () => {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  const margin = useRef(new Animated.Value(150)).current;
  const nextWeek = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toString();
  const [plan, setPlan] = useState<AppointmentInterface[]>();
  const [planList, setPlanList] = useState<MarkedDatesType>();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>();
  const [trashCanType, setTrashCanType] = useState<WasteType>();
  const [showModal, setShowModal] = useState(false);
  type trashColorsType = {
    [key in WasteType]: string;
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

  const lastNotificationResponse = Notifications.useLastNotificationResponse();

  useEffect(() => {
    // console.log(lastNotificationResponse);

    if (lastNotificationResponse) {
      setTrashCanType(lastNotificationResponse.notification.request.content.data.type as WasteType);
      setShowModal(true);
    }
  }, [lastNotificationResponse]);

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
      <Animated.View style={[styles.container, { paddingTop: margin }]}>
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
          hideExtraDays
          onDayPress={HandelDayPress}
          theme={{
            "stylesheet.day.basic": {
              today: {
                width: 45,
                backgroundColor: setOpacity(Colors.primary.main, 0.2),
                borderRadius: 4,
              },
            },
            "stylesheet.calendar.header": {
              // @ts-ignore
              dayHeader: {
                color: Colors.text.secondary[theme],
              },
            },
            textDayStyle: { borderRadius: 0 },
            monthTextColor: Colors.primary.dark,
            textMonthFontSize: Font.FontSize.Title1,
            textMonthFontWeight: "900",
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

      {/* <Button.Default
        onPress={async () => console.log(await Notifications.getAllScheduledNotificationsAsync())}
      >
        check
      </Button.Default> */}
      {/* <Button.Default onPress={() => plan && notif.addListNotification(plan)}>press</Button.Default> */}
      <Suspense fallback={<></>}>
        <NotificationModalScreen
          trashCanType={trashCanType || 1}
          setShow={setShowModal}
          show={showModal}
        />
      </Suspense>
    </>
  );
};
CalendarScreen.navigationOptions = navigationOptions();

export default CalendarScreen;
