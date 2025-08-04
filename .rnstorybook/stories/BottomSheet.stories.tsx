import type { Meta, StoryObj } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { ActionButton } from "../../src/components/ActionButton";
import BottomSheet from "../../src/components/BottomSheet";

const meta: Meta<typeof BottomSheet> = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    visible: {
      control: { type: "boolean" },
    },
    onClose: {
      action: "onClose",
    },
    height: {
      control: { type: "number" },
    },
  },
  args: {
    visible: true,
    onClose: () => {},
    height: 300,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: (args) => {
    function Wrapper() {
      const [open, setOpen] = React.useState(true);
      return (
        <>
          <View style={{ marginBottom: 16, alignItems: "center" }}>
            <ActionButton
              label="Abrir BottomSheet"
              onPress={() => setOpen(true)}
            />
          </View>
          <BottomSheet {...args} visible={open} onClose={() => setOpen(false)}>
            <View style={{ padding: 16 }}>
              <View style={{ height: 100 }} />
            </View>
          </BottomSheet>
        </>
      );
    }
    return <Wrapper />;
  },
};
