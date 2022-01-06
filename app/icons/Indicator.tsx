import * as React from "react";
import Svg, { Rect, SvgProps } from "react-native-svg";

export default function Indicator(props: SvgProps) {
  return (
    <Svg width="80" height="5" viewBox="0 0 80 5" fill="none" {...props}>
      <Rect width="80" height="5" rx="2.5" fill={props.color || "#262626"} />
    </Svg>
  );
}
