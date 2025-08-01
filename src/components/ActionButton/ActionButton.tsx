import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

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
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.base, variantStyles[variant], style]}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const variantStyles: Record<ButtonVariant, object> = {
  primary: { backgroundColor: "#09a6ff" },
  secondary: { backgroundColor: "#6c757d" },
  danger: { backgroundColor: "#e74c3c" },
};
