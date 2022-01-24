import { Layout } from "constant";

const FontWeight = {
  Black: "Rubik-Black",
  Bold: "Rubik-Bold",
  ExtraBold: "Rubik-ExtraBold",
  Light: "Rubik-Light",
  Medium: "Rubik-Medium",
  Regular: "Rubik-Regular",
  SemiBold: "Rubik-SemiBold",
  Caption2: "400",
  Caption1: "400",
  Footnote: "400",
  SubheadLine: "400",
  Callout: "400",
  Body: "400",
  HeadLine: "600",
  Title3: "400",
  Title2: "400",
  Title1: "400",
  LargeTitle: "400",
};

const FontSizeNormalDevice = {
  Caption2: 11,
  Caption1: 12,
  Footnote: 13,
  SubheadLine: 15,
  Callout: 16,
  Body: 17,
  HeadLine: 17,
  Title3: 20,
  Title2: 22,
  Title1: 28,
  LargeTitle: 34,
};

const FontSizeSmallDevice = {
  Caption2: 11,
  Caption1: 12,
  Footnote: 13,
  SubheadLine: 15,
  Callout: 16,
  Body: 17,
  HeadLine: 17,
  Title3: 16,
  Title2: 20,
  Title1: 26,
  LargeTitle: 34,
};
const LineHeight = {
  Caption2: 16,
  Caption1: 14,
  Footnote: 16,
  SubheadLine: 20,
  Callout: 21,
  Body: 16,
  HeadLine: 18,
  Title3: 22,
  Title2: 22,
  Title1: 20,
  LargeTitle: 16,
};
const FontSize = Layout.isSmallDevice ? FontSizeSmallDevice : FontSizeNormalDevice;

const Font = { FontWeight, FontSize, LineHeight };

export { Font };
