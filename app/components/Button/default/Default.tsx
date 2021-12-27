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

import styles from "./Default.styles";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  disabled?: boolean;
}

export default function Default(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  // console.log(props.disabled);
  if (props.disabled) customStyle.push({ backgroundColor: "grey" });

  return (
    <TouchableWithoutFeedback onPress={(x) => !props.disabled && props.onPress(x)}>
      <View style={customStyle}>
        <Text.Body>{props.children}</Text.Body>
      </View>
    </TouchableWithoutFeedback>
  );
}

Default.displayName = "Default";
