import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between",
    backgroundColor: Colors.background.paper.light,
  },
  title: {
    color: Colors.primary.dark,
    fontSize: 30,
    textAlign: "center",
    lineHeight: 30,
    fontWeight: "bold",
    marginBottom: 24,
  },
  desc: { marginHorizontal: 56, textAlign: "center", marginTop: 16, fontWeight: "bold" },
  image: { height: 180, width: 180 },
  dataContainer: {
    borderRadius: paper.borderRadius,
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 385,
  },
  button: { marginHorizontal: 0 },
});
