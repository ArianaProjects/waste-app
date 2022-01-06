import React from "react";
import { View as V, Modal, SafeAreaView, Image } from "react-native";
import { Button, Text, View } from "components";
import { t } from "utils";
import styles from "./NotificationModal.styles";
import navigationOptions from "./NotificationModal.navigationOptions";
import { NavStatelessComponent } from "interfaces";
import { ROIs } from "constant/ROITypes";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
interface Props {
  show: boolean;
  setShow: (status: boolean) => void;
  trashCanType: WasteType;
}
const NotificationModalScreen = (props: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.show}
      onRequestClose={() => {
        props.setShow(false);
      }}
    >
      <V
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
            <Text.Title3 style={styles.desc}>{t("NOTIFICATIONMODAL_TEXT")} </Text.Title3>
          </View.Paper>
          <Button.Default style={styles.button} onPress={() => props.setShow(false)}>
            {t("done")}{" "}
          </Button.Default>
        </View.Paper>
      </V>
    </Modal>
  );
};
NotificationModalScreen.navigationOptions = navigationOptions();

export default NotificationModalScreen;
