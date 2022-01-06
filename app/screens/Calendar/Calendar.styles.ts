import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    position: "relative",
    justifyContent: "space-between",
  },
  arrows: { width: 20, fontSize: 40, color: "red", backgroundColor: "red" },
});
