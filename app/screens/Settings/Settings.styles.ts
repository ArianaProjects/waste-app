import { StyleSheet } from "react-native";
import { THEME } from "states/ducks/theme/systemThemeSlice";

import { Colors, Layout } from "style";

export default StyleSheet.create(({ theme }: { theme: THEME }) => ({
  container: {
    ...Layout.containerWithPadding,
    backgroundColor: Colors.background.default[theme],
  },
  owner: {
    backgroundColor: "transparent",
    padding: 16,
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  ownerContainer: {
    marginTop: 8,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
