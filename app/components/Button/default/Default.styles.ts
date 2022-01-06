import { StyleSheet } from "react-native";
import { Colors, Font } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  global: {
    fontSize: Font.FontSize.Title3,
    fontWeight: Font.FontWeight.Title3,
    // height: 40,
    marginVertical: 12,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: paper.borderRadius,
    paddingVertical: 18,
  },
  defaultLight: {
    backgroundColor: Colors.primary.light,
    color: Colors.text.primary.light,
  },
  defaultDark: {
    backgroundColor: Colors.primary.dark,
    color: Colors.text.primary.dark,
  },
  disable: {
    // backgroundColor: Colors.background.paper.light,
    opacity: 0.3,
    color: Colors.text.button.disabled,
    // borderWidth: 1,
    // borderColor: Colors.text.button.disabled,
  },
});
