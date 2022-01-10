import moment from "moment";
import { AppointmentInterface } from "interfaces";
import * as Notifications from "expo-notifications";
import { Alert } from "react-native";
import {
  NotificationsConfigs,
  WasteType,
} from "states/ducks/userPreferences/userPreferences.slice";
import { t } from "i18n-js";

function notificationData(
  appointment: AppointmentInterface,
  configs: NotificationsConfigs
): Notifications.NotificationRequestInput {
  const date: Date = moment(appointment.date)
    .subtract(configs.daySooner, "day")
    .hour(configs.hour)
    .minutes(configs.minutes)
    .seconds(0)
    .toDate();
  let info: Notifications.NotificationContentInput = {};
  switch (appointment.type) {
    case WasteType.BIO:
      info = {
        title: t("UI_WASTE_TYPE_BIO"),
        body: t("UI_WASTE_TYPE_BIO_DESCRIPTION"),
        data: { type: appointment.type },
        sound: true,
      };
      break;
    case WasteType.ELECTRO:
      info = {
        title: t("UI_WASTE_TYPE_ELECTRO"),
        body: t("UI_WASTE_TYPE_ELECTRO_DESCRIPTION"),
        data: { type: appointment.type },
        sound: true,
      };
      break;
    case WasteType.GREEN:
      info = {
        title: t("UI_WASTE_TYPE_GREEN"),
        body: t("UI_WASTE_TYPE_GREEN_DESCRIPTION"),
        data: { type: appointment.type },
        sound: true,
      };
      break;
    case WasteType.PAPER:
      info = {
        title: t("UI_WASTE_TYPE_PAPER"),
        body: t("UI_WASTE_TYPE_PAPER_DESCRIPTION"),
        data: { type: appointment.type },
        sound: true,
      };
      break;
    case WasteType.SPECIAL:
      info = {
        title: t("UI_WASTE_TYPE_SPECIAL"),
        body: t("UI_WASTE_TYPE_SPECIAL_DESCRIPTION"),
        data: { type: appointment.type },
        sound: true,
      };
      break;
    case WasteType.RES:
      info = {
        title: t("UI_WASTE_TYPE_RES"),
        body: t("UI_WASTE_TYPE_RES_DESCRIPTION"),
        data: { type: appointment.type },
        sound: true,
      };
      break;
    case WasteType.PACKAGE:
      info = {
        title: t("UI_WASTE_TYPE_PACKAGE"),
        body: t("UI_WASTE_TYPE_PACKAGE_DESCRIPTION"),
        data: { type: appointment.type },
        sound: true,
      };
      break;

    default:
      break;
  }
  return {
    content: info,
    trigger: {
      // hour: appointment.date.getHours(),
      // minute: appointment.date.getMinutes() + 1,
      // repeats: true,
      date: date,
    },
  };
}

async function deleteAllNotifications(): Promise<void> {
  return await Notifications.cancelAllScheduledNotificationsAsync();
}

async function addListNotification(
  appointments: AppointmentInterface[] | null,
  configs: NotificationsConfigs
): Promise<void> {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  if (appointments == null) return;
  try {
    appointments.map(async (a) => {
      await Notifications.scheduleNotificationAsync(notificationData(a, configs));
    });
  } catch (e: any) {
    Alert.alert("Error", e);
  }
}

export default { deleteAllNotifications, addListNotification };
