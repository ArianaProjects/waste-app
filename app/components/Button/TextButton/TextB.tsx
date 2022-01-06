import { Text } from "components";
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
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "states";

import styles from "./TextButton";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  disabled?: boolean;
}

export default function TextButton(props: Props): React.ReactElement {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  // console.log(props.disabled);
  const isDark = theme == "dark";
  const customStyle = isDark
    ? [styles.global, styles.defaultDark, props.style]
    : [styles.global, styles.defaultLight, props.style];

  if (props.disabled) customStyle.push(styles.disable);

  return (
    <TouchableWithoutFeedback onPress={(x) => !props.disabled && props.onPress(x)}>
      <View style={customStyle}>
        <Text.Body style={theme === "dark" ? styles.textDark : styles.textLight}>
          {props.children}
        </Text.Body>
      </View>
    </TouchableWithoutFeedback>
  );
}

TextButton.displayName = "Default";
