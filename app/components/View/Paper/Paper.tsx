import React from "react";
import { StyleProp, useColorScheme, View, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "states";

import styles from "./Paper.styles";

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

function Paper(props: Props): React.ReactElement {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  const isDark = theme == "dark";
  const customStyle = isDark
    ? [styles.defaultDark, props.style]
    : [styles.defaultLight, props.style];

  return <View {...props} style={customStyle} />;
}

Paper.displayName = "Paper";
export default Paper;
