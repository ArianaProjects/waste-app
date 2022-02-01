import { Text } from "components";
import React from "react";
import {
  NativeSyntheticEvent,
  NativeTouchEvent, StyleProp, TouchableWithoutFeedback,
  View, ViewStyle
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureResponderEvent } from "react-native-modal";
import { useSelector } from "react-redux";
import { RootState } from "states";
import styles from "./Default.styles";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export default function Default(props: Props): React.ReactElement {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  // console.log(props.disabled);
  const isDark = theme == "dark";
  const customStyle = isDark
    ? [props.style, styles.global, styles.defaultDark]
    : [props.style, styles.global, styles.defaultLight];

  if (props.disabled) customStyle.push(styles.disable);

  return (
    <TouchableOpacity
      onPress={() => {
        !props.disabled && props.onPress();
      }}
    >
      <View style={[...customStyle, props.style]}>
        <Text.Body>{props.children}</Text.Body>
      </View>
    </TouchableOpacity>
  );
}

Default.displayName = "Default";
