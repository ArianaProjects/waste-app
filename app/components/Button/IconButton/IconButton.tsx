import { Button, Text } from "components";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import React from "react";
import {
  StyleProp,
  ButtonProps,
  ViewStyle,
  TouchableWithoutFeedback,
  View,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Image,
} from "react-native";
// import Button from "../index";

import styles from "./IconButton.styles";
import { useSelector } from "react-redux";
import { RootState } from "states";

interface Props {
  iconSrc: string;
  text: string;
  activate: boolean;
  id: WasteType;
  style?: any;

  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export default function IconButton(props: Props): React.ReactElement {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  const isDark = theme == "dark";
  const customStyle = [styles.default, props.style];

  return (
    <TouchableWithoutFeedback onPress={(x) => props.onPress(x)}>
      <View style={customStyle}>
        <Button.Radio onPress={(x) => console.log(x)} />
        <Image source={{ uri: props.iconSrc }} />
        <Text.Body style={styles.text}>{props.text}</Text.Body>
      </View>
    </TouchableWithoutFeedback>
  );
}

IconButton.displayName = "IconButton";
