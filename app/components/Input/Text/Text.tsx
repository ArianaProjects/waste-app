import React from "react";
import { StyleProp, TextInput, TextStyle } from "react-native";

import styles from "./Text.styles";

interface Props {
  style?: StyleProp<TextStyle>;
}

export default function Text(props: Props) {
  const customStyle = [styles.default, props.style];

  return <TextInput {...props} style={customStyle} />;
}

Text.displayName = "Text";
