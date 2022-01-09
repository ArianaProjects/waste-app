import { BottomTabNavigationOptions, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StackNavigationOptions } from "@react-navigation/stack";

export interface NavStatelessComponent extends React.FC {
  navigationOptions?:
    | NativeStackNavigationOptions
    | StackNavigationOptions
    | BottomTabNavigationOptions;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Intro: NavigatorScreenParams<RootTabParamList> | undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Language: NavigatorScreenParams<RootTabParamList> | undefined;
  ROI: NavigatorScreenParams<RootTabParamList> | undefined;
  NotificationSettings: NavigatorScreenParams<RootTabParamList> | undefined;
  Address: NavigatorScreenParams<RootTabParamList> | undefined;
  AboutUs: NavigatorScreenParams<RootTabParamList> | undefined;
  Feedback: NavigatorScreenParams<RootTabParamList> | undefined;
  Privacy: NavigatorScreenParams<RootTabParamList> | undefined;
  Imprint: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Setting: undefined;
  Calendar: undefined;
  Notification: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
