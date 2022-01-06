import { Text } from "components";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import React from "react";
import {
  StyleProp,
  Button,
  ButtonProps,
  ViewStyle,
  TouchableWithoutFeedback,
  View,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Image,
} from "react-native";

import styles from "./Radio.styles";
import { useSelector } from "react-redux";
import { RootState } from "states";

interface Props {
  style?: any;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export default function Radio(props: Props): React.ReactElement {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  const isDark = theme == "dark";
  const customStyle = [styles.default, props.style];

  return (
    <TouchableWithoutFeedback onPress={(x) => props.onPress(x)}>
      <View style={customStyle}></View>
    </TouchableWithoutFeedback>
  );
}

Radio.displayName = "Radio";
