import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";
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
  imageContainer: {
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 100,
  },
  activeDotStyle: {
    width: 80,
    height: 5,
    backgroundColor: Colors.primary.light,
  },
  dotStyle: {
    backgroundColor: Colors.secondary.main,
    height: 5,
    width: 80,
  },
  trashCardsContainer: {
    marginTop: 8,
    height: "80%",
    overflow: "scroll",
  },
  trashCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.background.paper.light,
    marginTop: 16,
    padding: 16,
    borderRadius: paper.borderRadius,
    marginHorizontal: 8,
  },
  activeTrashCard: {
    borderWidth: 2,
    borderColor: Colors.primary.main,
    shadowColor: Colors.primary.dark,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});
