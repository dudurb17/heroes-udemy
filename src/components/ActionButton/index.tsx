import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import Text from "../Text";
import styles from "./styles";

export type ButtonVariant = "primary" | "secondary" | "danger";

interface ActionButtonProps {
  label: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  style?: ViewStyle;
}

export function ActionButton({
  label,
  variant = "primary",
  onPress,
  style,
}: ActionButtonProps) {
  const variantStyles: Record<ButtonVariant, ViewStyle> = {
    primary: { backgroundColor: "#09a6ff" },
    secondary: { backgroundColor: "#6c757d" },
    danger: { backgroundColor: "#e74c3c" },
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.base, variantStyles[variant], style]}
    >
      <Text style={styles.text} color="white">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
