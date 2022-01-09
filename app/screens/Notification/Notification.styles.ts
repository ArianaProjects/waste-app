import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between",
    backgroundColor: Colors.background.default.light,
  },
});
