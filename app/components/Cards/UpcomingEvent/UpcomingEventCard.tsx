import { Text, View } from "components";
import { ROIs } from "constant/ROITypes";
import { t } from "i18n-js";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "states";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import { Colors } from "style";
import setOpacity from "utils/setOpacity";
import styles from "./UpcomingEventCard.style";
interface Props {
  //   date like "2022-01-03"
  remindTime: Date;
  wasteType: WasteType;
  active?: boolean;
  showModal?: (WasteType: WasteType) => void;
}

const UpcomingEventCard = (props: Props) => {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);
  const [isPass, setIsPass] = useState(false);
  const [daysLeft, setDaysLeft] = useState<string>();

  useEffect(() => {
    const d = days_left(props.remindTime);

    d && setDaysLeft(d);
  }, [props.remindTime]);
  const days_left = (date2: Date) => {
    let date1 = new Date();
    date1.setDate(date1.getDate() + 1);
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setMilliseconds(0);
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    if (new Date() < date2) {
      const differenceMs = Math.abs(date1.getTime() - date2.getTime());
      return Math.round(differenceMs / ONE_DAY).toFixed(0);
    } else {
      setIsPass(true);
      const differenceMs = Math.abs(date2.getTime() - date1.getTime());
      const day = Math.round(differenceMs / ONE_DAY).toFixed(0);
      return day;
    }

    // Convert back to days and return
  };
  return (
    <TouchableWithoutFeedback onPress={() => props.showModal && props.showModal(props.wasteType)}>
      <View.Paper
        style={[
          styles.container,
          {
            backgroundColor: props.active
              ? setOpacity(Colors.primary.light, 0.2)
              : Colors.background.paper[theme],
          },
        ]}
      >
        <Image
          source={ROIs.find((i) => i.waste === props.wasteType)?.iconSrc}
          style={styles.icon}
        />
        <View.Paper
          style={{
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <Text.Callout>
            {t("takeOut")} {t(ROIs.find((i) => i.waste === props.wasteType)?.text || "")}
          </Text.Callout>
          {daysLeft === "0" ? (
            <Text.Callout style={{ color: Colors.text.secondary[theme] }}>
              {t("today")}
            </Text.Callout>
          ) : isPass ? (
            <Text.Callout style={{ color: Colors.text.secondary[theme] }}>
              {daysLeft && daysLeft}
              {"  "}
              {t("dayAgo")}
            </Text.Callout>
          ) : (
            <Text.Callout style={{ color: Colors.text.secondary[theme] }}>
              {t("in")} {daysLeft && daysLeft} {t("day")}
            </Text.Callout>
          )}
        </View.Paper>
      </View.Paper>
    </TouchableWithoutFeedback>
  );
};
UpcomingEventCard.displayName = "UpcomingEventCard";
export default UpcomingEventCard;
