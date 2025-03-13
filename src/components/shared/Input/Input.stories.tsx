import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A input component that applies styling based on the color and visibility properties.",
      },
    },
  },
  argTypes: {
    color: {
      description: "Color variant of the input",
      control: "select",
      options: ["primary", "error"],
    },
    className: {
      description: "Default styling classes",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const Error: Story = {
  args: {
    color: "error",
  },
};
