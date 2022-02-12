import { StyleSheet } from "react-native";
import { Colors } from "style";

export default StyleSheet.create({
  containerLight: {
    // ...Layout.containerWithPadding,
    backgroundColor: Colors.background.default.light,
    flex: 1,
    padding: 0,
  },
  containerDark: {
    // ...Layout.containerWithPadding,
    backgroundColor: Colors.background.default.dark,
    flex: 1,
    padding: 0,
  },
});
