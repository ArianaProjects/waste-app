import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between",
    paddingTop: 32,
  },
  inputs: { marginTop: 16, marginLeft: 8 },
  imageContainer: { justifyContent: "center", flexDirection: "row" },
  mainComponent: {
    justifyContent: "center",
    flex: 1,
  },
  button: { marginTop: 32 },
});
