import { StyleSheet } from "react-native";
import { Colors } from "style";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary.main,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.primary.light,
    // minHeight: 130,
    marginHorizontal: -2,
  },
  mainContainer: {
    backgroundColor: Colors.background.default.light,
    position: "absolute",
    margin: "auto",
    bottom: 0,
    left: 0,
    right: 0,
  },
  indicator: { alignSelf: "center", marginTop: 16, marginBottom: 40 },
});
