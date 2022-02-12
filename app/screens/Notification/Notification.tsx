import { Text, View } from "components";
import UpcomingEventCard from "components/Cards/UpcomingEvent/UpcomingEventCard";
import { AppointmentInterface, NavStatelessComponent } from "interfaces";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "states";
import navigationOptions from "./Notification.navigationOptions";
import styles from "./Notification.styles";
import Icon from "react-native-vector-icons/Ionicons";
import paper from "style/components/Paper/paper";
import { Colors } from "style";
import { t } from "utils";
import { navigate } from "navigation";

const NotificationScreen: NavStatelessComponent = (props: any) => {
  const plan = useSelector((state: RootState) => state.userPreferences.appointments);
  const { theme } = useSelector((state: RootState) => state.systemTheme);
  const [data, setData] = useState<AppointmentInterface[]>();
  const navigator = navigate(props.navigation);
  useEffect(() => {
    setData(plan?.filter((i) => !moment(i.date).isBefore()));
  }, [plan]);

  return (
    <View.Background style={styles({ theme }).container}>
      <ScrollView scrollToOverflowEnabled scrollEnabled showsVerticalScrollIndicator={false}>
        <View.Background
          style={{ padding: 12, height: 280, justifyContent: "center", alignItems: "center" }}
        >
          <ImageBackground
            resizeMode="contain"
            style={{ width: 300, height: 250, justifyContent: "center", alignItems: "center" }}
            source={require("assets/images/notifications.png")}
          >
            <Text.LargeTitle>{t("NOTIFICATION_TITLE")}</Text.LargeTitle>
          </ImageBackground>
          <TouchableOpacity
            onPress={() => navigator.openNotificationSettings()}
            style={{ alignSelf: "flex-end" }}
          >
            <View.Paper style={{ padding: 8, borderRadius: paper.borderRadius }}>
              <Icon
                size={25}
                name="settings"
                style={{ alignSelf: "flex-end", color: Colors.text.secondary[theme] }}
              />
            </View.Paper>
          </TouchableOpacity>
        </View.Background>
        {data?.map((item, index) => (
          <UpcomingEventCard key={index} remindTime={item.date} wasteType={item.type} />
        ))}
      </ScrollView>
    </View.Background>
  );
};
NotificationScreen.navigationOptions = navigationOptions();
NotificationScreen.displayName = "Notification";
export default NotificationScreen;
