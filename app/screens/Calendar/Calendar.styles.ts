import { StyleSheet } from "react-native";

import { Colors, Font, Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    position: "relative",
    justifyContent: "space-between",
    backgroundColor: Colors.background.default.light,
  },
  arrows: { width: 20, fontSize: 40, color: "red", backgroundColor: "red" },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  knob: {
    width: 100,
    height: 7,
    backgroundColor: Colors.primary.main,
    marginTop: 12,
    borderRadius: 8,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundImage: { width: 300, height: 300, resizeMode: "contain" },
  notFoundText: {
    fontSize: Font.FontSize.Title2,
    color: Colors.primary.dark,
    fontWeight: "bold",
    marginTop: 16,
  },
});
