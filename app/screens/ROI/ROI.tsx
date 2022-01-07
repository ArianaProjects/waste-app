import { Button, Text, View } from "components";
import { t } from "i18n-js";
import { navigate } from "navigation";
import React, { useState } from "react";
import { Image, ScrollView, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "states";
import { userPreferences } from "states/ducks";
import { WastesInterface, WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import { Colors } from "style";
import ROIStyles from "./ROI.styles";

interface ROIProps {
  navigation: any;
}

const ROIScreen = (props: ROIProps) => {
  const dispatch = useDispatch();
  const defaultData = useSelector((state: RootState) => state.userPreferences.ROI);
  const navigator = navigate(props.navigation);

  const [selectedROI, setSelectedROI] = useState<WastesInterface>(defaultData);
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
  const handelSave = () => {
    dispatch(userPreferences.actions.changeROI(selectedROI));
    navigator.openSetting();
  };

  return (
    <View.Background style={ROIStyles.container}>
      <Button.TextButton
        style={{ marginTop: 8 }}
        onPress={() => {
          navigator.openSetting();
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
        <ScrollView style={ROIStyles.trashCardsContainer}>
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
                    ROIStyles.trashCard,
                    // active && IntroStyles.activeTrashCard,
                    selectedROI[item.waste] && ROIStyles.activeTrashCard,
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
        <View.Background style={ROIStyles.button}>
          <Button.Default onPress={handelSave}>{t("save")}</Button.Default>
        </View.Background>
      </View.Background>
    </View.Background>
  );
};

export default ROIScreen;
