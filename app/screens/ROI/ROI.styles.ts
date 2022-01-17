import { StyleSheet } from "react-native";
import { Colors } from "style";
import paper from "style/components/Paper/paper";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.background.default.light,
    marginHorizontal: 8,
  },
  trashCardsContainer: {
    marginTop: 8,

    maxHeight: 650,
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
  button: {
    marginBottom: 32,
  },
});
