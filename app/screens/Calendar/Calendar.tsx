import { AppointmentInterface, NavStatelessComponent } from "interfaces";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import { useSelector } from "react-redux";
import { RootState } from "states";
import { Colors, Font } from "style";
import setOpacity from "utils/setOpacity";
import navigationOptions from "./Calendar.navigationOptions";
import { Agenda, WeekCalendar } from "react-native-calendars";
import { View, Text } from "components";
import styles from "./Calendar.styles";
import { DateData } from "react-native-calendars/src/types";
import { Alert, Animated, TouchableOpacity } from "react-native";
import XDate from "xdate";
import { ReservationsType } from "react-native-calendars/src/agenda";
import { trashColors } from "constant/ROITypes";
import { getAllAppointment } from "network/Appointment";
import NotificationModalScreen from "screens/NotificationModal";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import * as Notifications from "expo-notifications";

type MarkedDatesType = {
  [key: string]: MarkingProps;
};
const CalendarScreen: NavStatelessComponent = () => {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);
  const settings = useSelector((state: RootState) => state.userPreferences);

  const margin = useRef(new Animated.Value(150)).current;
  const nextWeek = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toString();
  const [plan, setPlan] = useState<AppointmentInterface[]>();
  const [planList, setPlanList] = useState<MarkedDatesType>();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>();
  const [trashCanType, setTrashCanType] = useState<WasteType>();
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (trashcanType: WasteType) => {
    setTrashCanType(trashcanType);
    setShowModal(true);
  };

  const getPlans = async () => {
    // TODO fit it late (1)
    const plans = await getAllAppointment(1);
    setPlan(plans.filter((i) => i.date.getDate() >= new Date().getDate()));
  };
  useEffect(() => {
    getPlans();
  }, [settings]);

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
    if (lastNotificationResponse) {
      showModalHandler(
        lastNotificationResponse.notification.request.content.data.type as WasteType
      );
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
  const [items, setItems] = useState<ReservationsType>({
    "2022-01-22": [{ name: "item 1 - any js object", day: new XDate(2022, 1, 22), height: 1 }],
  });

  const testIDs = {
    menu: {
      CONTAINER: "menu",
      CALENDARS: "calendars_btn",
      CALENDAR_LIST: "calendar_list_btn",
      HORIZONTAL_LIST: "horizontal_list_btn",
      AGENDA: "agenda_btn",
      EXPANDABLE_CALENDAR: "expandable_calendar_btn",
      WEEK_CALENDAR: "week_calendar_btn",
    },
    calendars: {
      CONTAINER: "calendars",
      FIRST: "first_calendar",
      LAST: "last_calendar",
    },
    calendarList: { CONTAINER: "calendarList" },
    horizontalList: { CONTAINER: "horizontalList" },
    agenda: {
      CONTAINER: "agenda",
      ITEM: "item",
    },
    expandableCalendar: { CONTAINER: "expandableCalendar" },
    weekCalendar: { CONTAINER: "weekCalendar" },
  };
  const loadItems = (data: any) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = data.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: new XDate(strTime),
            });
          }
        }
      }

      const newItems: ReservationsType = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
    // return { dateString };
  };

  const renderItem = (reservation: any, isFirst: boolean): any => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <TouchableOpacity
        testID={testIDs.agenda.ITEM}
        style={[styles.item, { height: reservation.height }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text.Body style={{ fontSize, color }}>{reservation.name}</Text.Body>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = (date?: XDate): any => {
    return (
      <View.Background style={styles.emptyDate}>
        <Text.Body>This is empty date!</Text.Body>
      </View.Background>
    );
  };

  const rowHasChanged = (r1: ReservationsType, r2: ReservationsType) => {
    return r1.name !== r2.name;
  };

  const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  };

  return (
    <>
      <Text.Body>
        asd
        {/* <WeekCalendar /> */}
        {/* <Agenda
        testID={testIDs.agenda.CONTAINER}
        items={items}
        // loadItemsForMonth={loadItems}
        selected
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        showClosingKnob={true}
        item={{ day: new XDate(2022, 1, 22) }}
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
        hideKnob
        reservations={items}
        selectedDay={new XDate(2022, 1, 22)}
        topDay={new XDate(2022, 1, 22)}
        showOnlySelectedDayItems={false}
        renderEmptyData={() => {
          return (
            <View.Background>
              <Text.Body>s</Text.Body>
            </View.Background>
          );
        }}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        hideExtraDays={false}
      /> */}
      </Text.Body>
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
