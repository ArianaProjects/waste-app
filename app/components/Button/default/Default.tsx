import { Text } from "components";
import React from "react";
import {
  NativeSyntheticEvent,
  NativeTouchEvent, StyleProp, TouchableWithoutFeedback,
  View, ViewStyle
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "states";
import styles from "./Default.styles";


interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  disabled?: boolean;
}

export default function Default(props: Props): React.ReactElement {
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
        <Text.Body>{props.children}</Text.Body>
      </View>
    </TouchableWithoutFeedback>
  );
}

Default.displayName = "Default";
