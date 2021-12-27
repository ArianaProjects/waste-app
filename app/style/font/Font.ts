import { Layout } from "constant";

const FontWeight = {
  Black: "Rubik-Black",
  Bold: "Rubik-Bold",
  ExtraBold: "Rubik-ExtraBold",
  Light: "Rubik-Light",
  Medium: "Rubik-Medium",
  Regular: "Rubik-Regular",
  SemiBold: "Rubik-SemiBold",
};

const FontSizeNormalDevice = {
  Caption2: 20,
  Caption1: 20,
  Footnote: 20,
  SubheadLine: 20,
  Callout: 20,
  Body: 20,
  HeadLine: 20,
  Title3: 20,
  Title2: 20,
  Title1: 20,
  LargeTitle: 20,
};

const FontSizeSmallDevice = {
  Caption2: 20,
  Caption1: 20,
  Footnote: 20,
  SubheadLine: 20,
  Callout: 20,
  Body: 20,
  HeadLine: 20,
  Title3: 20,
  Title2: 20,
  Title1: 20,
  LargeTitle: 20,
};

const FontSize = Layout.isSmallDevice ? FontSizeSmallDevice : FontSizeNormalDevice;

const Font = { FontWeight, FontSize };

export { Font };
