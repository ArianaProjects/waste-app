import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "states";
import { getStyle } from "utils/getstyles";
import styles from "./Title1.styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  green?: boolean;
  color: "primary" | "secondary";
}

export default function Title1(props: Props): React.ReactElement {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  return <Text {...props} style={(getStyle(theme, props.color, styles), props.style)} />;
}

Title1.displayName = "Title1";
Title1.defaultProps = {
  color: "primary",
};
