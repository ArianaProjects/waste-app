import { StyleSheet } from "react-native";

import { Colors, Font, Layout } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between",
    paddingTop: 32,
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
    width: 120,
    marginLeft: 8,
    fontSize: 30,
    color: Colors.text.primary.light,
  },
  input: {
    width: 110,
    marginLeft: 8,
    color: Colors.text.primary.light,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeAM_PM: {
    backgroundColor: Colors.primary.main,
    marginLeft: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,

    borderRadius: paper.borderRadius / 2,
  },
  button: {
    marginBottom: 50,
  },
});
