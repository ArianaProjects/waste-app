import { StyleSheet } from "react-native";
import { Colors } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  global: {
    borderRadius: paper.borderRadius,
  },
  defaultLight: {
    backgroundColor: Colors.background.paper.light,
  },
  defaultDark: {
    backgroundColor: Colors.background.paper.dark,
  },
});
