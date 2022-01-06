import { Text, View } from "components";
import Indicator from "../../../icons/Indicator";
import React, { Ref, useEffect, useRef, useState } from "react";
import { Animated, Button, Dimensions, ViewStyle } from "react-native";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";
import { useSelector } from "react-redux";
import { RootState } from "states";
import styles from "./SwipeUp.style";
import { Colors } from "style";
import { ScrollView } from "react-native-gesture-handler";
import GestureRecognizer from "react-native-swipe-detect";
import { createRef } from "react";
interface Props {
  children?: JSX.Element[] | JSX.Element;
  fullWidth?: boolean;
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export default function SwipeUp(props: Props) {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);
  // const isDark = theme == "dark";
  const [currentHeight, setCurrentHeight] = useState<number>();
  let ScreenHeight = Dimensions.get("window").height;
  const height = useRef(new Animated.Value(180)).current;

  const maximize = () => {
    Animated.timing(height, {
      toValue: 500,
      duration: 200,
      useNativeDriver: false,
    }).start();
    props.onOpen && props.onOpen();
  };

  const minimize = () => {
    Animated.timing(height, {
      toValue: 180,
      duration: 180,
      useNativeDriver: false,
    }).start();
    props.onClose && props.onClose();
  };

  useEffect(() => {
    props.fullWidth &&
      Animated.timing(height, {
        toValue: ScreenHeight - 100,
        duration: 180,
        useNativeDriver: false,
      }).start();
  }, []);

  useEffect(() => {
    props.open === true ? maximize() : props.open === false ? minimize() : null;
  }, [props.open]);
  return (
    <GestureRecognizer
      onLayout={(event) => {
        setCurrentHeight(event.nativeEvent.layout.height);
      }}
      hitSlop={{ top: 50 }}
      style={styles.mainContainer}
      onSwipeUp={() => !props.fullWidth && maximize()}
      onSwipeDown={() => !props.fullWidth && minimize()}
    >
      <Animated.View
        style={[
          styles.container,
          {
            height: height,
          },
        ]}
      >
        {!props.fullWidth && (
          <Indicator style={styles.indicator} color={Colors.text.secondary[theme]} />
        )}
        <Animated.ScrollView
          // scrollToOverflowEnabled
          scrollEnabled={props.fullWidth ? true : currentHeight !== 180}
          style={{ height: 500, paddingVertical: 8, marginTop: props.fullWidth ? 40 : 0 }}
        >
          {props.children}
        </Animated.ScrollView>
      </Animated.View>
    </GestureRecognizer>
  );
}

SwipeUp.displayName = "SwipeUp";
SwipeUp.defaultProps = { label: "test" };
