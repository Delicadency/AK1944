import type { Meta, StoryObj } from "@storybook/react";
import { Label } from ".";

const meta: Meta<typeof Label> = {
  title: "Components/Shared/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A customizable label component with support for different color variants. Used for form fields and other UI elements requiring text labels with consistent styling.",
      },
    },
  },
  argTypes: {
    color: {
      description: "Color variant of the label",
      control: "select",
      options: ["primary", "error"],
    },
    className: {
      description: "Additional CSS classes to apply to the label",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Primary Label",
  },
};

export const Error: Story = {
  args: {
    color: "error",
    children: "Error Label",
  },
};
