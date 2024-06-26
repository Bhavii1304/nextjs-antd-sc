import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Ant Design/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: { control: "radio", options: ["error", "warning"] },
    size: { control: "radio", options: ["large", "small", "medium"] },
    variant: {
      control: "radio",
      options: ["outlined", "borderless", "filled"],
    },
    disabled: { control: "boolean" },
    allowClear: { control: "boolean" },
  },
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Demo: Story = {
  args: {
    maxLength: 10,
    type: "primary",
    size: "large",
    placeholder: "Input",
    disabled: false,
    allowClear: false,
  },
};
