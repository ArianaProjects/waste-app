import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import useColorScheme from "hooks/useColorScheme";

import styles from "./Title1.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  green?: boolean;
}

export default function Title1(props: Props): React.ReactElement {
  const isDark = useColorScheme() == "dark";
  const customStyle = isDark
    ? [styles.defaultDark, props.style]
    : [styles.defaultLight, props.style];

  return <Text {...props} style={customStyle} />;
}

Title1.displayName = "Title1";
