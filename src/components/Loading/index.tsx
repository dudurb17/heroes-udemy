import React, { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Easing,
  StyleSheet,
  View,
} from "react-native";

export type LoadingVariant = "spinner" | "dots" | "bar";

interface LoadingProps {
  variant?: LoadingVariant;
  color?: string;
  size?: number | "small" | "large";
}

export default function Loading({
  variant = "spinner",
  color = "#09a6ff",
  size = "large",
}: LoadingProps) {
  if (variant === "spinner") {
    return <ActivityIndicator color={color} size={size} />;
  }

  if (variant === "dots") {
    return <Dots color={color} />;
  }

  return <Bar color={color} />;
}

function Dots({ color }: { color: string }) {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const createAnim = (anim: Animated.Value, delay: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
            delay,
          }),
          Animated.timing(anim, {
            toValue: 0.3,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      );
    const a1 = createAnim(dot1, 0);
    const a2 = createAnim(dot2, 150);
    const a3 = createAnim(dot3, 300);
    a1.start();
    a2.start();
    a3.start();
    return () => {
      a1.stop();
      a2.stop();
      a3.stop();
    };
  }, [dot1, dot2, dot3]);

  return (
    <View style={styles.dotsContainer}>
      {[dot1, dot2, dot3].map((anim, i) => (
        <Animated.View
          key={i}
          style={[styles.dot, { backgroundColor: color, opacity: anim }]}
        />
      ))}
    </View>
  );
}

function Bar({ color }: { color: string }) {
  const translate = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    const anim = Animated.loop(
      Animated.timing(translate, {
        toValue: 150,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    anim.start();
    return () => anim.stop();
  }, [translate]);

  return (
    <View style={styles.barTrack}>
      <Animated.View
        style={[
          styles.barIndicator,
          { backgroundColor: color, transform: [{ translateX: translate }] },
        ]}
      />
    </View>
  );
}

const DOT_SIZE = 8;
const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    marginHorizontal: 4,
  },
  barTrack: {
    width: 120,
    height: 4,
    backgroundColor: "#e0e0e0",
    overflow: "hidden",
    borderRadius: 2,
  },
  barIndicator: {
    width: 50,
    height: 4,
    borderRadius: 2,
  },
});
