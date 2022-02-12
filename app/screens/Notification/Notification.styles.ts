import { StyleSheet } from "react-native";
import { THEME } from "states/ducks/theme/systemThemeSlice";

import { Colors, Layout } from "style";

export default StyleSheet.create(({ theme }: { theme: THEME }) => ({
  container: {
    ...Layout.containerWithPadding,
    // justifyContent: "space-between",
    paddingTop: 24,
    backgroundColor: Colors.background.default[theme],
  },
  header: {
    marginTop: 16,
    textTransform: "capitalize",
    fontWeight: "700",
  },
}));
