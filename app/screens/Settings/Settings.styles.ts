import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between",
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
