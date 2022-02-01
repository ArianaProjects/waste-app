import { Button, Text, View } from "components";
import { ROIs } from "constant/ROITypes";
import React from "react";
import { Image, Modal, Pressable, View as V } from "react-native";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import ButtonStyle from "../../components/Button/default/Default.styles";
import { t } from "utils";
import navigationOptions from "./NotificationModal.navigationOptions";
import styles from "./NotificationModal.styles";
import { useSelector } from "react-redux";
import { RootState } from "states";
interface Props {
  show: boolean;
  closeShow: () => void;
  trashCanType: WasteType;
}
const NotificationModalScreen = (props: Props) => {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.show}
      onRequestClose={() => {
        props.closeShow();
      }}
    >
      <View.Background
        style={{
          justifyContent: "center",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, .2)",
        }}
      >
        <View.Paper
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            flex: 1,
            height: 500,
            maxWidth: 360,
          }}
        >
          <View.Paper style={styles.dataContainer}>
            <Text.Title2 style={styles.title}>{t("NOTIFICATIONMODAL_TITLE")} </Text.Title2>
            <Image
              style={styles.image}
              source={ROIs.find((i) => i.waste === props.trashCanType)?.iconSrc}
            />
            <Text.Title3 style={styles.desc}>
              {t("NOTIFICATIONMODAL_TEXT") +
                // @ts-ignore
                t(ROIs.find((i) => i.waste === props.trashCanType)?.text)}{" "}
            </Text.Title3>
          </View.Paper>
          <Pressable
            style={[
              ButtonStyle.global,
              theme === "dark" ? ButtonStyle.defaultDark : ButtonStyle.defaultLight,
            ]}
            onPress={() => props.closeShow()}
          >
            <Text.Caption1>{t("done")} </Text.Caption1>
          </Pressable>
        </View.Paper>
      </View.Background>
    </Modal>
  );
};
NotificationModalScreen.navigationOptions = navigationOptions();

export default NotificationModalScreen;
