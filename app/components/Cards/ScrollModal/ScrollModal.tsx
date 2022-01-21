import { Text, View } from "components";
import Indicator from "../../../icons/Indicator";
import React, { Ref, useEffect, useRef, useState } from "react";
import { Animated, Button, Dimensions, ViewStyle } from "react-native";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";
import { useSelector } from "react-redux";
import { RootState } from "states";
import styles from "./ScrollModal.style";
import { Colors } from "style";
import { ScrollView } from "react-native-gesture-handler";
import GestureRecognizer from "react-native-swipe-detect";
import { createRef } from "react";
// @ts-ignore
import Modal from "react-native-modal";

interface Props {
  children?: JSX.Element[] | JSX.Element;
  fullWidth?: boolean;
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export default function ScrollModal(this: any, props: Props) {
  const theme = useSelector((state: RootState) => state.systemTheme.theme);
  // const isDark = theme == "dark";
  const [currentHeight, setCurrentHeight] = useState<number>();
  const [scrollOffset, setScrollOffset] = useState<number>();
  const scrollViewRef = useRef(null);
  let ScreenHeight = Dimensions.get("window").height;
  const height = useRef(new Animated.Value(150)).current;
  const handleOnScroll = (event: { nativeEvent: { contentOffset: { y: any } } }) => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };
  const close = () => {};
  const handleScrollTo = (p: any) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };
  return (
    <Modal
      testID={"modal"}
      isVisible={false}
      onSwipeComplete={close}
      swipeDirection={["down"]}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}
      scrollOffsetMax={400 - 300} // content height - ScrollView height
      propagateSwipe={false}
      style={styles.modal}
    >
      {!props.fullWidth && (
        <Indicator style={styles.indicator} color={Colors.text.secondary[theme]} />
      )}
      <View.Paper style={styles.scrollableModal}>
        <ScrollView ref={scrollViewRef} onScroll={handleOnScroll} scrollEventThrottle={16}>
          {props.children}
        </ScrollView>
      </View.Paper>
    </Modal>
  );
}

ScrollModal.displayName = "ScrollModal";
ScrollModal.defaultProps = { label: "test" };
