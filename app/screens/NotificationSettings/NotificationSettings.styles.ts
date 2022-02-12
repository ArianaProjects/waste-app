import { StyleSheet } from "react-native";

import { Colors, Font, Layout } from "style";
import paper from "style/components/Paper/paper";

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
  content: { flex: 1, justifyContent: "center", marginBottom: 150 },
  card: {
    height: 70,
    marginHorizontal: 4,
    marginBottom: 8,
    padding: 16,
    borderRadius: paper.borderRadius,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  switch: { height: 20 },
  inputContainer: {
    borderRadius: 16,
    backgroundColor: Colors.primary.main,
  },
  inputTime: {
    width: 130,
    marginLeft: 8,
    fontSize: 30,
    color: Colors.text.primary.light,
  },
  input: {
    width: 130,
    marginLeft: 8,
    color: Colors.text.primary.light,
    height: 50,
    justifyContent: "center",
    marginHorizontal: 8,
  },
  timeContainer: {
    flexDirection: "row",

    backgroundColor: Colors.primary.main,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: paper.borderRadius / 2,
  },

  button: {
    marginBottom: 32,
  },
});
