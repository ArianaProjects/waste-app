import { StyleSheet } from "react-native";

import { Colors, Font, Layout } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  tabBarLabel: {
    marginLeft: 12,
    marginTop: 0,
    fontSize: Font.FontSize.Callout,
    fontWeight: "bold",
  },
  tabBarContainer: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary.main,
  },
  tabBar: {
    // width: 80,
    // backgroundColor: Colors.background.paper.light,\
    borderRadius: paper.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    alignSelf: "center",
    // marginVertical: 8,
    marginHorizontal: 10,
  },
});
