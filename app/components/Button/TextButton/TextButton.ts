import { StyleSheet } from "react-native";
import { Colors, Font } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  global: {},
  textDark: {
    alignItems: "center",
    fontSize: Font.FontSize.Body,
    color: Colors.primary.dark,
  },
  textLight: {
    alignItems: "center",
    fontSize: Font.FontSize.Body,
    color: Colors.primary.light,
  },
  defaultLight: {
    // backgroundColor: Colors.primary.light,
    color: Colors.primary.light,
  },
  defaultDark: {
    // backgroundColor: Colors.primary.dark,
    color: Colors.primary.dark,
  },
  disable: {
    // backgroundColor: Colors.background.paper.light,
    color: Colors.text.button.disabled,
    borderWidth: 1,
    borderColor: Colors.text.button.disabled,
  },
});
