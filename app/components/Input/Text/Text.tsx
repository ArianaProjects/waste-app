import React from "react";
import { StyleProp, TextInput, TextInputProps, TextStyle } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "states";

import styles from "./Text.styles";

interface Props extends TextInputProps {
  style?: StyleProp<TextStyle>;
}

export default function Text(props: Props) {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  const isDark = theme == "dark";
  const customStyle = isDark
    ? [styles.global, styles.defaultDark, props.style]
    : [styles.global, styles.defaultLight, props.style];

  return <TextInput {...props} style={customStyle} />;
}

Text.displayName = "Text";
