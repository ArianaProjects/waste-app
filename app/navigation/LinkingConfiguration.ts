/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "interfaces";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Setting: {
            screens: {
              SettingScreen: "setting",
            },
          },
          Calendar: {
            screens: {
              CalendarScreen: "calendar",
            },
          },
          Notification: {
            screens: {
              NotificationScreen: "notification",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
      Intro: "Intro",
    },
  },
};

export default linking;
