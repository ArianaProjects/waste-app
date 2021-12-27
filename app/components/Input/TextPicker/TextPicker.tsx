import React, { useState } from "react";
import { StyleProp, TextInput, TextStyle } from "react-native";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";

import styles from "./TextPicker.styles";

interface Props extends PickerSelectProps {}

export default function TextPicker(props: Props) {
  const customStyle: any = [styles.default, props.style];
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <RNPickerSelect
      {...props}
      textInputProps={
        {
          // style: {
          //   color: "white",
          // },
        }
      }
      // style={customStyle}
      pickerProps={{
        style: {
          // backgroundColor: "red",
        },
      }}
    />
  );
}

TextPicker.displayName = "TextPicker";
