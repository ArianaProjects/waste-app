import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    backgroundColor: Colors.background.default.light,
  },
  owner: {
    backgroundColor: "transparent",
    padding: 16,
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  ownerContainer: {
    marginTop: 8,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
