import { StyleSheet } from "react-native";
import { Colors, Font } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  tabBarLabel: {
    marginLeft: 12,
    marginTop: 0,
    fontSize: Font.FontSize.Caption1,
    fontWeight: "bold",
  },
  tabBarContainer: {
    alignItems: "center",
    paddingHorizontal: 8,
    justifyContent: "center",
    shadowColor: "transparent",
    backgroundColor: Colors.secondary.main,
  },
  tabBar: {
    borderRadius: paper.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 35,
    alignSelf: "center",
    marginHorizontal: 4,
  },
});
