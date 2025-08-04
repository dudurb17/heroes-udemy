import { useEffect, useRef } from "react";
import { Animated, Dimensions } from "react-native";

const useBottomSheet = ({
  height,
  visible,
}: {
  height?: number;
  visible: boolean;
}) => {
  const screenHeight = Dimensions.get("window").height;
  const sheetHeight = height ?? screenHeight * 0.5;

  const translateY = useRef(new Animated.Value(sheetHeight)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: sheetHeight,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, sheetHeight, translateY, backdropOpacity]);

  return {
    visible,
    translateY,
    backdropOpacity,
    sheetHeight,
  };
};

export default useBottomSheet;
