import { Text } from "components";
import React from "react";
import { TextStyle, ViewStyle } from "react-native";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";
import { useSelector } from "react-redux";
import { RootState } from "states";
import styles from "./TextPicker.styles";

interface Props extends PickerSelectProps {
  label: string;
  textStyles?: TextStyle;
}

export default function TextPicker(props: Props) {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);

  const isDark = theme == "dark";
  const customStyle: ViewStyle = isDark
    ? { ...styles.global, ...styles.defaultDark, ...props.style }
    : { ...styles.global, ...styles.defaultLight, ...props.style };

  const { label, ...newProps } = props;
  return (
    <>
      <Text.Title2 style={props.textStyles}>{label}</Text.Title2>
      <RNPickerSelect
        {...newProps}
        style={{
          viewContainer: customStyle,
          placeholder: theme === "dark" ? styles.placeholderDark : styles.placeholderLight,
          inputAndroid: theme === "dark" ? styles.inputDark : styles.inputLight,
          inputIOS: theme === "dark" ? styles.inputDark : styles.inputLight,
        }}
      />
    </>
  );
}

TextPicker.displayName = "TextPicker";
TextPicker.defaultProps = { label: "test" };
