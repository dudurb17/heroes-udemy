import type { Meta, StoryObj } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import Loading from "../../src/components/Loading";

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["spinner", "dots", "bar"],
    },
    color: { control: "color" },
  },
  args: {
    variant: "spinner",
    color: "#09a6ff",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  args: { variant: "spinner" },
};

export const Dots: Story = {
  args: { variant: "dots" },
};

export const Bar: Story = {
  args: { variant: "bar", color: "#e74c3c" },
};
