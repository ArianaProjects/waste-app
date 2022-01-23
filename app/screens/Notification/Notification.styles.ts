import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    // justifyContent: "space-between",
    paddingTop: 24,
    backgroundColor: Colors.background.default.light,
  },
  header: {
    marginTop: 16,
    textTransform: "capitalize",
    fontWeight: "700",
  },
});
