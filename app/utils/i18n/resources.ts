import * as AboutUs from "screens/AboutUs/translations";
import * as Address from "screens/Address/translations";
import * as Calendar from "screens/Calendar/translations";
import * as Feedback from "screens/Feedback/translations";
import * as Imprint from "screens/Imprint/translations";
import * as Intro from "screens/Intro/translations";
import * as Language from "screens/Language/translations";
import * as Notification from "screens/Notification/translations";
import * as NotificationModal from "screens/NotificationModal/translations";
import * as Privacy from "screens/Privacy/translations";
import * as ROI from "screens/ROI/translations";
import * as Settings from "screens/Settings/translations";
import * as NotFound from "screens/NotFound/translations";
import * as NotificationSettings from "screens/NotificationSettings/translations";
import * as UI from "utils/ui/translations";
import * as Upcoming from "components/Cards/UpcomingEvent/translations";

const en = {
  ...AboutUs.en,
  ...Address.en,
  ...Calendar.en,
  ...Feedback.en,
  ...Imprint.en,
  ...Intro.en,
  ...Language.en,
  ...Notification.en,
  ...NotificationModal.en,
  ...Privacy.en,
  ...ROI.en,
  ...Settings.en,
  ...NotFound.en,
  ...Upcoming.en,
  ...NotificationSettings.en,
  ...UI.en,
};

const de = {
  ...AboutUs.de,
  ...Address.de,
  ...Calendar.de,
  ...Feedback.de,
  ...Imprint.de,
  ...Intro.de,
  ...Language.de,
  ...Notification.de,
  ...NotificationModal.de,
  ...Privacy.de,
  ...ROI.de,
  ...Settings.de,
  ...NotFound.de,
  ...NotificationSettings.de,
  ...Upcoming.de,
  ...UI.de,
};

export interface TranslationKeys
  extends AboutUs.TranslationKeys,
    Address.TranslationKeys,
    Calendar.TranslationKeys,
    Feedback.TranslationKeys,
    Imprint.TranslationKeys,
    Intro.TranslationKeys,
    Language.TranslationKeys,
    Notification.TranslationKeys,
    NotificationModal.TranslationKeys,
    Privacy.TranslationKeys,
    ROI.TranslationKeys,
    Settings.TranslationKeys,
    NotFound.TranslationKeys,
    Upcoming.TranslationKeys,
    NotificationSettings.TranslationKeys,
    UI.TranslationKeys {}

export { en, de };
