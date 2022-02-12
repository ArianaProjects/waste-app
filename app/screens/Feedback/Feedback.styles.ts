import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";

export default StyleSheet.create({
  containerLight: {
    ...Layout.containerWithPadding,
    flex: 1,
    paddingHorizontal: 16,
    padding: 0,
    backgroundColor: Colors.background.default.light,
  },
  containerDark: {
    ...Layout.containerWithPadding,
    flex: 1,
    paddingHorizontal: 16,
    padding: 0,
    backgroundColor: Colors.background.default.dark,
  },
  input: {
    padding: 16,
    marginTop: 32,
    height: 250,
    textAlignVertical: "top",
  },
  text: { textAlign: "center", marginBottom: 50, fontWeight: "bold" },
  main: {
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});
