import { AppointmentInterface } from "interfaces";
import * as Notifications from "expo-notifications";
import { Alert } from "react-native";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import { t } from "i18n-js";

function notificationData(
  appointment: AppointmentInterface
): Notifications.NotificationRequestInput {
  let info: Notifications.NotificationContentInput = {};
  switch (appointment.type) {
    case WasteType.BIO:
      info = {
        title: t("UI_WASTE_TYPE_BIO"),
        body: t("UI_WASTE_TYPE_BIO_DESCRIPTION"),
      };
      break;
    case WasteType.ELECTRO:
      info = {
        title: t("UI_WASTE_TYPE_ELECTRO"),
        body: t("UI_WASTE_TYPE_ELECTRO_DESCRIPTION"),
      };
      break;
    case WasteType.GREEN:
      info = {
        title: t("UI_WASTE_TYPE_GREEN"),
        body: t("UI_WASTE_TYPE_GREEN_DESCRIPTION"),
      };
      break;
    case WasteType.PAPER:
      info = {
        title: t("UI_WASTE_TYPE_PAPER"),
        body: t("UI_WASTE_TYPE_PAPER_DESCRIPTION"),
      };
      break;
    case WasteType.SPECIAL:
      info = {
        title: t("UI_WASTE_TYPE_SPECIAL"),
        body: t("UI_WASTE_TYPE_SPECIAL_DESCRIPTION"),
      };
      break;
    case WasteType.RES:
      info = {
        title: t("UI_WASTE_TYPE_RES"),
        body: t("UI_WASTE_TYPE_RES_DESCRIPTION"),
      };
      break;
    case WasteType.PACKAGE:
      info = {
        title: t("UI_WASTE_TYPE_PACKAGE"),
        body: t("UI_WASTE_TYPE_PACKAGE_DESCRIPTION"),
      };
      break;

    default:
      break;
  }
  return {
    content: info,
    trigger: { date: new Date(appointment.date) },
  };
}

async function deleteAllNotifications(): Promise<void> {
  return await Notifications.cancelAllScheduledNotificationsAsync();
}

async function addListNotification(appointments: AppointmentInterface[] | null): Promise<void> {
  if (appointments == null) return;
  try {
    appointments.map(async (a) => {
      await Notifications.scheduleNotificationAsync(notificationData(a));
    });
  } catch (e: any) {
    Alert.alert("Error", e);
  }
}

export default { deleteAllNotifications, addListNotification };
