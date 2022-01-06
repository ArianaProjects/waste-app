import { Button, Text, View } from "components";
import * as Notifications from "expo-notifications";
import { t } from "i18n-js";
import { camelCase } from "lodash";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { WastesInterface, WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import { Colors } from "style";
import IntroStyles from "../Intro.styles";

const notification: Notifications.NotificationRequestInput = {
  content: {
    title: "Title",
    body: "asdasd",
  },
  trigger: { date: new Date("2021-12-18T01:00:39+01:00") },
};

interface ROIProps {
  selectedROI: WastesInterface;
  collectionId: number;
  page: number;
  setSelectedROI: (a: WastesInterface) => void;
  updateSelectedROI: (a: WasteType, b: boolean) => void;
  next: (a: number) => void;
  done: () => void;
}

const ROI = (props: ROIProps) => {
  console.log(props.selectedROI);

  const [selectedROI, setSelectedROI] = useState<WastesInterface>(props.selectedROI);
  const [ROIs] = useState([
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
  // console.log(selectedROI);
  useEffect(() => {
    props.setSelectedROI(selectedROI);
  }, [selectedROI]);

  return (
    <ScrollView>
      <Button.TextButton
        style={{ marginTop: 8 }}
        onPress={() => {
          props.next(1);
        }}
      >
        <Icon
          name="ios-arrow-back-outline"
          style={{ marginRight: 5 }}
          size={16}
          color={Colors.primary.main}
        />
        {t("back")}
      </Button.TextButton>
      <View.Background>
        {/* <Image style={{ width: 100 }} source={require("assets/images/trashCans/bio.svg")} /> */}
        <ScrollView style={IntroStyles.trashCardsContainer}>
          {ROIs.map((item, i) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  setSelectedROI({ ...selectedROI, [item.waste]: !selectedROI[item.waste] });
                }}
                key={i}
              >
                <View.Paper
                  style={[
                    IntroStyles.trashCard,
                    // active && IntroStyles.activeTrashCard,
                    selectedROI[item.waste] && IntroStyles.activeTrashCard,
                  ]}
                >
                  <Icon
                    name={
                      selectedROI[item.waste]
                        ? "ios-radio-button-on-sharp"
                        : "ios-radio-button-off-sharp"
                    }
                    style={{}}
                    size={30}
                    color={Colors.primary.main}
                  />
                  <Image source={item.iconSrc} />
                  <Text.Callout>{item.text.split(".").join(" ").toLocaleLowerCase()}</Text.Callout>
                </View.Paper>
              </TouchableWithoutFeedback>
            );
          })}
        </ScrollView>
        {/* <Button.Default onPress={() => props.next(2)}>DONE</Button.Default> */}
        <Button.Default onPress={() => props.done()}>DONE</Button.Default>
      </View.Background>
    </ScrollView>
  );
};

export default ROI;
