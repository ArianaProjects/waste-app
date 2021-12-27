import React, { useCallback, useEffect, useState } from "react";
import { Button, Input, View } from "components";
import {
  actions,
  collectionStateInterface,
  WastesInterface,
  WasteType,
} from "states/ducks/userPreferences/userPreferences.slice";
import { Alert, ScrollView } from "react-native";
import { getAllAppointment } from "network/Appointment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "states";
import { userPreferences } from "states/ducks";
import { AppointmentInterface } from "interfaces";
import * as Notifications from "expo-notifications";

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
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [ROIs, setROIs] = useState([
    { iconSrc: "asd", text: "WasteType.BIO", waste: WasteType.BIO },
    { iconSrc: "asd", text: "WasteType.ELECTRO", waste: WasteType.ELECTRO },
    { iconSrc: "asd", text: "WasteType.GREEN", waste: WasteType.GREEN },
    { iconSrc: "asd", text: "WasteType.PAPER", waste: WasteType.PAPER },
    { iconSrc: "asd", text: "WasteType.SPECIAL", waste: WasteType.SPECIAL },
    { iconSrc: "asd", text: "WasteType.RES", waste: WasteType.RES },
    { iconSrc: "asd", text: "WasteType.PACKAGE", waste: WasteType.PACKAGE },
  ]);
  return (
    <ScrollView>
      <View.Background>
        {ROIs.map((r, i) => {
          return (
            <Button.IconButton
              key={i}
              iconSrc={r.iconSrc}
              activate={true}
              //   activate={props.selectedROI[r.waste]}
              text={r.text}
              onPress={() => console.log("s")}
              id={r.waste}
            />
          );
        })}
        {/* <Button.Default onPress={() => props.next(2)}>DONE</Button.Default> */}
        <Button.Default onPress={() => props.done()}>DONE</Button.Default>
        <Button.Default
          onPress={() => {
            props.next(1);
          }}
        >
          Previous
        </Button.Default>
      </View.Background>
    </ScrollView>
  );
};

export default ROI;
