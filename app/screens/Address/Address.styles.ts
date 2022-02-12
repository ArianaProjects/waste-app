import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";

export default StyleSheet.create({
  containerLight: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between",
    backgroundColor: Colors.background.default.light,
  },
  containerDark: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between",
    backgroundColor: Colors.background.default.dark,
  },
  inputs: { marginTop: 16, marginLeft: 8 },
  imageContainer: { justifyContent: "center", flexDirection: "row" },
  mainComponent: {
    justifyContent: "center",
    flex: 1,
  },
  button: { marginBottom: 32 },
});
