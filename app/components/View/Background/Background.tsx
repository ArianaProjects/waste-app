import React from "react";
import { StyleProp, useColorScheme, View, ViewStyle } from "react-native";

import styles from "./Background.styles";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export default function Background(props: Props): React.ReactElement {
  const isDark = useColorScheme() == "dark";
  const customStyle = isDark
    ? [styles.defaultDark, props.style]
    : [styles.defaultLight, props.style];

  return <View {...props} style={customStyle} />;
}

Background.displayName = "Background";
