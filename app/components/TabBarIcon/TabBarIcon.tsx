import React, { ReactElement } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";
import { useSelector } from "react-redux";
import { RootState } from "states";

interface Props {
  name: string;
  focused: boolean;
}

export default function TabBarIcon(props: Props): ReactElement {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  const isDark = theme == "dark";
  return (
    <Ionicons name={props.name} size={26} color={props.focused ? Colors.green50 : Colors.grey40} />
  );
}
