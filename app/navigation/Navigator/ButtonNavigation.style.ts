import { StyleSheet } from "react-native";
import { Colors, Font } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  tabBarLabel: {
    marginLeft: 12,
    marginTop: 0,
    fontSize: Font.FontSize.Callout,
    fontWeight: "bold",
  },
  tabBarContainer: {
    // height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary.main,
  },
  tabBar: {
    borderRadius: paper.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    alignSelf: "center",
    marginHorizontal: 4,
  },
});
