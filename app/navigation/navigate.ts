/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import throttle from "lodash.throttle";

const navigateOneTime = (navigate: any) => throttle(navigate, 1000, { trailing: false });

/* navigate */

// const openAddEmissionNavigator = (navigation:any) => (props = {}) => {
//   navigation.navigate("AddEmissionNavigator", props);
// };

// const openEmissions = (navigation:any) => (props = {}) => {
//   navigation.navigate("Emissions", props);
// };

const openAboutUs =
  (navigation: any) =>
  (props = {}) => {
    navigation.push("AboutUs", props);
  };
const openDelete =
  (navigation: any) =>
  (props = {}) => {
    navigation.push("Delete", props);
  };
const openAddress =
  (navigation: any) =>
  (props = {}) => {
    navigation.push("Address", props);
  };
const openCalendar =
  (navigation: any) =>
  (props = {}) => {
    navigation.push("Calendar", props);
  };
const openFeedback =
  (navigation: any) =>
  (props = {}) => {
    navigation.navigate("Feedback", props);
  };
const openIntro =
  (navigation: any) =>
  (props = {}) => {
    navigation.push("Intro", props);
  };
const openLanguage =
  (navigation: any) =>
  (props = {}) => {
    navigation.push("Language", props);
  };
const openNotificationSettings =
  (navigation: any) =>
  (props = {}) => {
    navigation.navigate("NotificationSettings", props);
  };
const openNotification =
  (navigation: any) =>
  (props = {}) => {
    navigation.navigate("Notification", props);
  };
const openNotificationModal =
  (navigation: any) =>
  (props = {}) => {
    navigation.push("NotificationModal", props);
  };
const openPrivacy =
  (navigation: any) =>
  (props = {}) => {
    navigation.push("Privacy", props);
  };
const openROI =
  (navigation: any) =>
  (props = {}) => {
    navigation.push("ROI", props);
  };
const openSetting =
  (navigation: any) =>
  (props = {}) => {
    navigation.navigate("Setting", props);
  };
const openNotFound =
  (navigation: any) =>
  (props = {}) => {
    navigation.push("NotFound", props);
  };

const navigate = (navigation: any) => ({
  goBack: navigation.goBack,
  openAboutUs: navigateOneTime(openAboutUs(navigation)),
  openAddress: navigateOneTime(openAddress(navigation)),
  openCalendar: navigateOneTime(openCalendar(navigation)),
  openFeedback: navigateOneTime(openFeedback(navigation)),
  openIntro: navigateOneTime(openIntro(navigation)),
  openLanguage: navigateOneTime(openLanguage(navigation)),
  openNotification: navigateOneTime(openNotification(navigation)),
  openNotificationSettings: navigateOneTime(openNotificationSettings(navigation)),
  openNotificationModal: navigateOneTime(openNotificationModal(navigation)),
  openPrivacy: navigateOneTime(openPrivacy(navigation)),
  openROI: navigateOneTime(openROI(navigation)),
  openSetting: navigateOneTime(openSetting(navigation)),
  openNotFound: navigateOneTime(openNotFound(navigation)),
  openDelete: navigateOneTime(openDelete(navigation)),
});

export default navigate;
