import { StyleSheet } from "react-native";
import { Colors } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  global: {
    borderRadius: paper.borderRadius,
    marginVertical: 12,
    marginHorizontal: 8,
  },
  defaultLight: {
    backgroundColor: Colors.background.paper.light,
    color: Colors.text.primary.light,
  },
  defaultDark: {
    backgroundColor: Colors.background.paper.dark,
    color: Colors.text.primary.dark,
  },
});
