import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "states";
import { getStyle } from "utils/getstyles";
import styles from "./Footnote.styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  green?: boolean;
  color: "primary" | "secondary";
}

export default function Footnote(props: Props): React.ReactElement {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  return <Text {...props} style={(getStyle(theme, props.color, styles), props.style)} />;
}

Footnote.displayName = "Footnote";
Footnote.defaultProps = {
  color: "primary",
};
