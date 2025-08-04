import type { Meta, StoryObj } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import Text from "../../src/components/Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
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
      options: ["body", "title", "subtitle", "caption", "button", "overline"],
    },
  },
  args: {
    variant: "body",
    children: "Text",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: { variant: "body" },
};

export const Title: Story = {
  args: { variant: "title" },
};

export const Subtitle: Story = {
  args: { variant: "subtitle" },
};

export const Caption: Story = {
  args: { variant: "caption" },
};

export const Button: Story = {
  args: { variant: "button" },
};

export const Overline: Story = {
  args: { variant: "overline" },
};
