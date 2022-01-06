import { fontWeightInterface } from "interfaces/global";
import { StyleSheet } from "react-native";

import { Font, Colors } from "style";

export default StyleSheet.create({
  global: {
    fontWeight: Font.FontWeight.LargeTitle as fontWeightInterface,
    fontSize: Font.FontSize.LargeTitle,
    lineHeight: Font.LineHeight.LargeTitle,
  },
  primaryDark: {
    color: Colors.text.primary.dark,
  },
  primaryLight: {
    color: Colors.text.primary.light,
  },
  secondaryDark: {
    color: Colors.text.secondary.dark,
  },
  secondaryLight: {
    color: Colors.text.secondary.light,
  },
});
