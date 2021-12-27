import platform from "./platform";
import {
  t,
  LocalizationContext,
  withLocalization,
  LocalizationContextProps,
  supportedLanguages,
  currentLanguage,
  getLocaleForMoment,
} from "./i18n";
import time from "./time";
import ui from "./ui";
import notif from "./notification";
import deleteAllNotifications from "./notification";

export {
  platform,
  time,
  ui,
  t,
  LocalizationContext,
  withLocalization,
  LocalizationContextProps,
  supportedLanguages,
  currentLanguage,
  getLocaleForMoment,
  notif,
};
