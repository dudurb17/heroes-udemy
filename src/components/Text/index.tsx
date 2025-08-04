import React from "react";
import { Text as RNText, StyleProp, TextStyle } from "react-native";

type Variant =
  | "body"
  | "title"
  | "subtitle"
  | "caption"
  | "button"
  | "overline";

interface TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  variant?: Variant;
}

const variantStyles: Record<Variant, TextStyle> = {
  body: { fontSize: 16, lineHeight: 22 },
  title: { fontSize: 22, fontWeight: "bold", lineHeight: 28 },
  subtitle: { fontSize: 18, fontWeight: "600", lineHeight: 24 },
  caption: { fontSize: 12, lineHeight: 16 },
  button: { fontSize: 16, fontWeight: "600" },
  overline: { fontSize: 10, letterSpacing: 1, textTransform: "uppercase" },
};

export default function Text({
  children,
  style,
  color = "#000",
  variant = "body",
}: TextProps) {
  return (
    <RNText style={[variantStyles[variant], { color }, style]}>
      {children}
    </RNText>
  );
}
