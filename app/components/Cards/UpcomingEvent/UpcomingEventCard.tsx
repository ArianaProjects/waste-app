import { Text, View } from "components";
import { t } from "i18n-js";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
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
}

const UpcomingEventCard = (props: Props) => {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);
  const [isPass, setIsPass] = useState(false);
  const [daysLeft, setDaysLeft] = useState<string>();
  const [ROIs, setROIs] = useState([
    {
      iconSrc: require("assets/images/trashCans/bio.png"),
      text: "WasteType.BIO",
      waste: WasteType.BIO,
    },
    {
      iconSrc: require("assets/images/trashCans/residual.png"),
      text: "WasteType.ELECTRO",
      waste: WasteType.ELECTRO,
    },
    {
      iconSrc: require("assets/images/trashCans/green.png"),
      text: "WasteType.GREEN",
      waste: WasteType.GREEN,
    },
    {
      iconSrc: require("assets/images/trashCans/paper.png"),
      text: "WasteType.PAPER",
      waste: WasteType.PAPER,
    },
    {
      iconSrc: require("assets/images/trashCans/hazardous.png"),
      text: "WasteType.SPECIAL",
      waste: WasteType.SPECIAL,
    },
    {
      iconSrc: require("assets/images/trashCans/christmas.png"),
      text: "WasteType.RES",
      waste: WasteType.RES,
    },
    {
      iconSrc: require("assets/images/trashCans/packaging.png"),
      text: "WasteType.PACKAGE",
      waste: WasteType.PACKAGE,
    },
  ]);
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
      return Math.round(differenceMs / ONE_DAY).toFixed(0);
    }

    // Convert back to days and return
  };
  return (
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
      <Image source={ROIs.find((i) => i.waste === props.wasteType)?.iconSrc} style={styles.icon} />
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
        {isPass ? (
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
  );
};
UpcomingEventCard.displayName = "UpcomingEventCard";
export default UpcomingEventCard;
