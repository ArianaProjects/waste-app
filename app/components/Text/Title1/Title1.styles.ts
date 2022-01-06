import { fontWeightInterface } from "interfaces/global";
import { StyleSheet } from "react-native";

import { Font, Colors } from "style";

export default StyleSheet.create({
  global: {
    fontWeight: Font.FontWeight.Title1 as fontWeightInterface,
    fontSize: Font.FontSize.Title1,
    lineHeight: Font.LineHeight.Title1,
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
