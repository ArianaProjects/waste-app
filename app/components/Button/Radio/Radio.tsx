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

interface Props {
  style?: any;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export default function Radio(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];

  return (
    <TouchableWithoutFeedback onPress={(x) => props.onPress(x)}>
      <View style={customStyle}></View>
    </TouchableWithoutFeedback>
  );
}

Radio.displayName = "Radio";
