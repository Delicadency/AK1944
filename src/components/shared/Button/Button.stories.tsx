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
      description:
        "Variants of the button to choose from, giving the component the relevant classes.",
    },
    size: {
      control: {
        type: "radio",
        options: ["medium", "large"],
      },
      description:
        "Manage button size based on text size - medium 16px or large 18px. Padding inside the button is fixed.",
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
      description:
        "If you specify one of the listed icon names, an svg element on the left side of the button will be generated. The icon takes on the text color used in the selected variant.",
    },
    disabled: {
      control: "boolean",
      description:
        "When the button is deactivated, the styles responsible for the appearance and behavior of the button that is deactivated are transferred.",
    },
    label: {
      control: "text",
      description: "Allows you to enter the text displayed inside the button.",
    },
    href: {
      control: "text",
      description:
        "If completed with a URL path, a Next.js Link element will be generated, ostylated like a button. Otherwise, a button element will be generated.",
    },
    ariaDescription: {
      control: "text",
      description:
        "The element responsible for the text displayed in the aria-label attribute.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Universal button with a choice of color variants and sizes, with an option to select an icon. Can be deactivated.",
      },
    },
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
  },
  parameters: {
    docs: {
      description: {
        story:
          "Link element in the default **primary** variant, in **medium** size.",
      },
    },
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    variant: "primary",
    size: "large",
    label: "Primary Button",
    iconName: "gift",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button element with gift icon, in the default **primary** variant and **large** size",
      },
    },
  },
};

export const Inversion: Story = {
  args: {
    variant: "inversion",
    size: "medium",
    label: "Inversion Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button element in the **inversion** variant and **medium** size",
      },
    },
  },
};

export const InversionWithIcon: Story = {
  args: {
    variant: "inversion",
    size: "large",
    label: "Inversion Button",
    href: "/",
    iconName: "check",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Link element with **check** icon, in **inversion** variant and **large** size",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    label: "Secondary Button",
    href: "/",
  },
  parameters: {
    docs: {
      description: {
        story: "Link element in the **secondary** variant and **medium** size",
      },
    },
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    label: "Secondary Button",
    iconName: "send",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button element with **send** icon, in the **secondary** variant and **medium** size",
      },
    },
  },
};
export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    label: "Primary Button",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Disabled** button element in the **primary** variant and **medium** size",
      },
    },
  },
};

export const InversionDisabled: Story = {
  args: {
    variant: "inversion",
    size: "large",
    label: "Inversion Button",
    href: "/",
    iconName: "check",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Disabled** link element with **check** icon, in the **inversion** variant and **large** size",
      },
    },
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    size: "large",
    label: "Secondary Button",
    href: "/",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Disabled** link element in the **secondary** variant and **large** size",
      },
    },
  },
};
