import type { Meta, StoryObj } from "@storybook/react";
import { Label } from ".";

const meta: Meta<typeof Label> = {
  title: "Components/Shared/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A label component that applies styling based on the color and visibility properties.",
      },
    },
  },
  argTypes: {
    color: {
      description: "Color variant of the label",
      control: "select",
      options: ["primary", "error"],
    },
    visibility: {
      description: "Visibility of the label",
      control: "select",
      options: ["shown", "hidden"],
    },
    className: {
      description: "Default styling classes",
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

export const Hidden: Story = {
  args: {
    visibility: "hidden",
    children: "Hidden Label",
  },
};
