import { Text, View } from "components";
import React, { useEffect, useState } from "react";
import { Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import { RootState } from "states";
import { Colors } from "style";
import styles from "./SettingCard.style";
interface Props {
  iconName: string;
  text: string;
  onPress: () => void;
  switchMode?: boolean;
  onSwitchChange?: (value: boolean) => void;
  switchValue?: boolean;
}
export default function SettingCard(props: Props) {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);
  const [switchValue, setSwitchValue] = useState(props.switchValue || false);
  const onPressIn = () => {
    props.onPress();
  };
  useEffect(() => {
    props.onSwitchChange && props.onSwitchChange(switchValue);
  }, [switchValue]);

  if (props.switchMode)
    return (
      <View.Paper style={styles.container}>
        <Icon name={props.iconName} color={Colors.secondary[theme]} size={25} style={styles.icon} />
        <Text.Callout>{props.text}</Text.Callout>
        {props.switchMode && (
          <View.Paper
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <Switch
              style={{ height: 30 }}
              trackColor={{
                false: Colors.text.secondary[theme],
                true: Colors.text.secondary[theme],
              }}
              thumbColor={switchValue ? Colors.primary.main : Colors.background.default[theme]}
              ios_backgroundColor={Colors.background.default[theme]}
              onValueChange={(value) => {
                setSwitchValue(value);
              }}
              value={switchValue}
            />
          </View.Paper>
        )}
      </View.Paper>
    );
  return (
    <TouchableOpacity disabled={props.switchMode} onPress={onPressIn}>
      <View.Paper style={styles.container}>
        <Icon name={props.iconName} color={Colors.secondary[theme]} size={25} style={styles.icon} />
        <Text.Callout style={{ flexGrow: 1, width: 250 }}>{props.text}</Text.Callout>
      </View.Paper>
    </TouchableOpacity>
  );
}

SettingCard.displayName = "SettingCard";
SettingCard.defaultProps = { label: "test" };
