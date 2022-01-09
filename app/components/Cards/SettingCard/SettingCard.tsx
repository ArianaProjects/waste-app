import { Text, View } from "components";
import React, { useState } from "react";
import { Animated, Pressable, Switch } from "react-native";
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
  onSwitchChange?: () => void;
  switchValue?: boolean;
}
export default function SettingCard(props: Props) {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);
  const [switchValue, setSwitchValue] = useState(props.switchValue || false);
  const onPressIn = () => {};
  const onPressOut = () => {
    props.switchMode ? () => {} : props.onPress();
  };
  const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

  return (
    <AnimatedTouchable onPress={onPressIn} onPressOut={onPressOut}>
      <View.Paper style={styles.container}>
        <Icon name={props.iconName} color={Colors.secondary[theme]} size={25} style={styles.icon} />
        <Text.Callout>{props.text}</Text.Callout>
        {props.switchMode && (
          <Switch
            disabled
            style={{ flex: 1, height: 30 }}
            shouldRasterizeIOS
            trackColor={{ false: Colors.text.secondary[theme], true: Colors.text.secondary[theme] }}
            thumbColor={switchValue ? Colors.primary.main : Colors.background.default[theme]}
            ios_backgroundColor={Colors.background.default[theme]}
            onValueChange={(value) => {
              setSwitchValue(value);
            }}
            value={switchValue}
          />
        )}
      </View.Paper>
    </AnimatedTouchable>
  );
}

SettingCard.displayName = "SettingCard";
SettingCard.defaultProps = { label: "test" };
