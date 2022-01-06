const setOpacity = (hex: string, alpha: number) =>
  `${hex}${Math.floor(alpha * 255)
    .toString(16)
    // @ts-ignore
    .padStart(2, 0)}`;
export default setOpacity;
