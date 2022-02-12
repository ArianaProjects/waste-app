import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  containerDark: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between",
    backgroundColor: Colors.background.default.dark,
  },
  containerLight: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between",
    backgroundColor: Colors.background.default.light,
  },
  mainContainer: {
    flex: 1,
    marginTop: 48,
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
  trashCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.background.paper.light,
    marginVertical: 8,
    padding: 16,
    borderRadius: paper.borderRadius,
    marginHorizontal: 8,
  },
  button: { marginBottom: 32 },
  trashCardsContainer: {},
});
