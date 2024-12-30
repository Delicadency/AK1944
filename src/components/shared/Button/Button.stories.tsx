import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
      variant: {
        control: {
          type: "radio",
          options: ["primary", "inversion", "secondary"],
        },
      },
      size: {
        control: {
          type: "radio",
          options: ["medium", "large"],
        },
      },
      icon: {
        control: "boolean",
      },
      iconName: {
        control: {
          type: "select",
          options: [
            "award",
            "check",
            "coffee",
            "compass",
            "file",
            "gift",
            "help",
            "info",
            "pin",
            "send",
            "target",
          ],
        },
      },
      disabled: { control: "boolean" },
    },
  };
  export default meta;

type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    label: "Primary Button",
    href: "/",
    icon: false,
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    variant: "primary",
    size: "large",
    label: "Primary Button",
    href: "/",
    icon: true,
    iconName: "gift",
  },
};

export const Inversion: Story = {
  args: {
    variant: "inversion",
    size: "medium",
    label: "Inversion Button",
    href: "/",
    icon: false,
  },
};

export const InversionWithIcon: Story = {
  args: {
    variant: "inversion",
    size: "large",
    label: "Inversion Button",
    href: "/",
    icon: true,
    iconName: "check",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    label: "Secondary Button",
    href: "/",
    icon: false,
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    variant: "secondary",
    size: "large",
    label: "Secondary Button",
    href: "/",
    icon: true,
    iconName: "send",
  },
};
export const PrimaryDisabled: Story = {
    args: {
      variant: "primary",
      size: "medium",
      label: "Primary Button",
      href: "/",
      icon: false,
      disabled: true,
    },
  };
  
  export const InversionDisabled: Story = {
    args: {
      variant: "inversion",
      size: "large",
      label: "Inversion Button",
      href: "/",
      icon: true,
      iconName: "check",
      disabled: true,
    },
  };
  
  export const SecondaryDisabled: Story = {
    args: {
      variant: "secondary",
      size: "medium",
      label: "Secondary Button",
      href: "/",
      icon: false,
      disabled: true,
    },
  };