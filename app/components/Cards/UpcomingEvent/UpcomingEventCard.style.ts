import { StyleSheet } from "react-native";
import { Colors } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  container: {
    marginHorizontal: 12,
    borderRadius: paper.borderRadius,
    padding: 8,
    marginTop: 16,
    flexDirection: "row",
  },
  icon: { width: 45, height: 50 },
  textContainer: {},
  text: {},
});
