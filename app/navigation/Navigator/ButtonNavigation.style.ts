import { StyleSheet } from "react-native";
import { Colors, Font } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  tabBarLabel: {
    marginLeft: 16,
    fontSize: Font.FontSize.Footnote,
    fontWeight: "bold",
  },
  tabBarContainer: {
    alignItems: "center",
    paddingHorizontal: 8,
    justifyContent: "center",
    height: 45,
    paddingBottom: 8,
    paddingTop: 4,
    shadowColor: "transparent",
    backgroundColor: Colors.background.default["light"],
  },
  tabBar: {
    borderRadius: paper.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    backgroundColor: "transparent",
    height: 40,
    width: 100,

    alignSelf: "center",
    marginHorizontal: 8,
  },
});
