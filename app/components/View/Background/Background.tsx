import React from "react";
import { ViewProps } from "react-native";
import { StyleProp, useColorScheme, View, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "states";

import styles from "./Background.styles";

interface Props extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export default function Background(props: Props): React.ReactElement {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  const isDark = theme == "dark";
  const customStyle = isDark
    ? [styles.global, styles.defaultDark, props.style]
    : [styles.global, styles.defaultLight, props.style];

  return <View {...props} style={customStyle} />;
}

Background.displayName = "Background";
