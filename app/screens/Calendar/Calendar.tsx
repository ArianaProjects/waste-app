import { Text, View } from "components";
import UpcomingEventCard from "components/Cards/UpcomingEvent/UpcomingEventCard";
import { trashColors } from "constant/ROITypes";
import * as Notifications from "expo-notifications";
import { AppointmentInterface, NavStatelessComponent } from "interfaces";
import moment from "moment";
import { getAllAppointment } from "network/Appointment";
import React, { Suspense, useEffect, useState } from "react";
import { Image } from "react-native";
import { Agenda, AgendaSchedule } from "react-native-calendars";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import { useSelector } from "react-redux";
import NotificationModalScreen from "screens/NotificationModal";
import { RootState } from "states";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import { Colors } from "style";
import { t } from "utils";
import setOpacity from "utils/setOpacity";
import navigationOptions from "./Calendar.navigationOptions";
import CalendarStyles from "./Calendar.styles";

type MarkedDatesType = {
  [key: string]: MarkingProps;
};
const CalendarScreen: NavStatelessComponent = () => {
  const settings = useSelector((state: RootState) => state.userPreferences);
  const [plan, setPlan] = useState<AppointmentInterface[]>();
  const [planList, setPlanList] = useState<MarkedDatesType>();
  const [trashCanType, setTrashCanType] = useState<WasteType>();
  const [showModal, setShowModal] = useState(false);
  const [agendaItems, setAgendaItems] = useState<AgendaSchedule>();
  const showModalHandler = (trashcanType: WasteType) => {
    setTrashCanType(trashcanType);
    setShowModal(true);
  };

  const getPlans = async () => {
    // TODO fit it late (3)
    const plans = await getAllAppointment(1);
    setPlan(plans.filter((i) => i.date.getDate() >= new Date().getDate()));
  };
  useEffect(() => {
    getPlans();
  }, [settings]);

  useEffect(() => {
    if (!plan) return;

    let d: MarkedDatesType;
    let newAgendaItems: AgendaSchedule;
    plan.forEach((item) => {
      if (d && Object.keys(d).includes(item.date.toJSON().split("T")[0])) {
        d = {
          ...d,
          [item.date.toJSON().split("T")[0]]: {
            marked: true,
            dotColor: trashColors[item.type],
          },
        };
      } else {
        d = {
          ...d,
          [item.date.toJSON().split("T")[0]]: {
            marked: true,
            dotColor: trashColors[item.type],
          },
        };
      }
      plan.forEach((item) => {
        if (
          newAgendaItems &&
          Object.keys(newAgendaItems).includes(item.date.toJSON().split("T")[0])
        ) {
          !newAgendaItems[item.date.toJSON().split("T")[0]].find(
            (i) => i.name === item.type.toString()
          ) &&
            newAgendaItems[item.date.toJSON().split("T")[0]].push({
              day: item.date.toString(),
              name: item.type.toString(),
              height: 100,
            });
        } else {
          newAgendaItems = {
            ...newAgendaItems,
            [item.date.toJSON().split("T")[0]]: [
              {
                day: item.date.toString(),
                name: item.type.toString(),
                height: 100,
              },
            ],
          };
        }
      });

      setAgendaItems(newAgendaItems);
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

  return (
    <>
      <Agenda
        items={agendaItems}
        markedDates={planList}
        pastScrollRange={2}
        futureScrollRange={12}
        renderItem={({ name, day }) => {
          return (
            <UpcomingEventCard
              showModal={showModalHandler}
              remindTime={new Date(day)}
              wasteType={Number(name)}
            />
          );
        }}
        initialNumToRender={1}
        ItemSeparatorComponent={(e) => <View.Background>{e}</View.Background>}
        showOnlySelectedDayItems
        showClosingKnob
        renderEmptyData={() => (
          <View.Background style={CalendarStyles.notFound}>
            <Image
              style={CalendarStyles.notFoundImage}
              source={require("assets/images/notFound.png")}
            />
            <Text.Title2 style={CalendarStyles.notFoundText}>{t("letsCleanOurPlanet")}</Text.Title2>
          </View.Background>
        )}
        renderKnob={() => <View.Paper style={CalendarStyles.knob} />}
        theme={{
          selectedDayBackgroundColor: Colors.primary.main,
          dotColor: Colors.primary.dark,
          todayTextColor: Colors.primary.dark,
          todayBackgroundColor: setOpacity(Colors.primary.main, 0.2),
          agendaTodayColor: Colors.text.secondary.light,
          calendarBackground: Colors.background.default.light,
        }}
        style={{}}
      />
      <View.Background
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
        }}
      />
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
