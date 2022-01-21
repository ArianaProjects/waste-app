import { capitalize } from "lodash";
import { StyleProp } from "react-native";
export const getStyle = (
  theme: "dark" | "light",
  variant: "primary" | "secondary",
  styles: any,
  defaultValue?: StyleProp<any>
) => {
  // let data = styles.global;
  const t: keyof typeof styles = (variant + capitalize(theme)) as keyof typeof styles;

  const data = { ...styles.global, ...defaultValue, ...styles[t] };
  return data;
};
