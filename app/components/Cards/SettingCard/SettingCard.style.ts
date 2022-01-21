import { StyleSheet } from "react-native";
import { Colors } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: paper.borderRadius,
    alignItems: "center",
    display: "flex",
  },
  icon: { marginRight: 8 },
  indicator: { alignSelf: "center", marginTop: 16, marginBottom: 40 },
});
