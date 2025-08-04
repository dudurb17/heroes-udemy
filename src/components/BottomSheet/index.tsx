import React from "react";
import { Animated, Modal, TouchableWithoutFeedback } from "react-native";
import useBottomSheet from "./hooks/useBottomSheet";
import styles from "./styles";

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  height?: number;
  children: React.ReactNode;
}

export default function BottomSheet({
  visible,
  onClose,
  height,
  children,
}: BottomSheetProps) {
  const { translateY, backdropOpacity, sheetHeight } = useBottomSheet({
    height,
    visible,
  });

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View
          style={[styles.backdrop, { opacity: backdropOpacity }]}
        />
      </TouchableWithoutFeedback>

      <Animated.View
        style={[
          styles.sheet,
          {
            height: sheetHeight,
            transform: [{ translateY }],
          },
        ]}
      >
        {children}
      </Animated.View>
    </Modal>
  );
}
