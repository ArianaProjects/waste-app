import { Appearance, Linking, GestureResponderEvent } from "react-native";
import { contains, __ } from "ramda";

const isDarkModeEnabled = (): boolean => Appearance.getColorScheme() === "dark";

const onHTMLBodyLinkPress = (_: GestureResponderEvent, link: string): void => {
  if (link) {
    Linking.openURL(link);
  }
};

export default {
  isDarkModeEnabled,
  onHTMLBodyLinkPress,
};
