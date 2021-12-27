/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { pathOr } from "ramda";

import { currentLanguage } from "utils";

import { namespace } from "./userPreferences.slice";

const getAcceptedTermsOfUseVersion = (state) =>
  pathOr(0, [namespace, "acceptedTermsOfUseVersion"], state);

const getActivateNotifications = (state) =>
  pathOr(false, [namespace, "activatedNotifications"], state);

const getLanguage = (state) => pathOr(currentLanguage, [namespace, "language"], state);

const getTimesStarted = (state) => pathOr(0, [namespace, "timesStarted"], state);

const getCity = (state) => pathOr(null, [namespace, "city"], state);
const getPlace = (state) => pathOr(null, [namespace, "place"], state);
const getRIO = (state) => pathOr(null, [namespace, "ROI"], state);
const getAppointments = (state) => pathOr(null, [namespace, "appointments"], state);

export default {
  getAcceptedTermsOfUseVersion,
  getActivateNotifications,
  getLanguage,
  getTimesStarted,
  getCity,
  getPlace,
  getRIO,
  getAppointments,
};
