import { Meta, StoryObj } from "@storybook/react";
import { ExclamationIcon } from "@/icons/ExclamationIcon";
import { IconCheckSquare } from "@/icons/IconCheckSquare";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Shared/Button",
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
    leadingIcon: {
      control: false,
      description:
        "Optional icon component to be displayed before the label. The icon inherits the text color of the button.",
    },
    trailingIcon: {
      control: false,
      description:
        "Optional icon component to be displayed after the label. The icon inherits the text color of the button.",
    },
    disabled: {
      control: "boolean",
      description:
        "When the button is deactivated, the styles responsible for the appearance and behavior of the button that is deactivated are transferred.",
    },
    label: {
      control: "text",
      description: "The text displayed inside the button.",
    },
    href: {
      control: "text",
      description:
        "If provided with a URL path, a Next.js Link element will be generated, styled like a button. Otherwise, a button element will be generated.",
    },
    ariaDescription: {
      control: "text",
      description:
        "Required. The text used for the aria-label attribute to provide accessible description of the button's action.",
      required: true,
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Universal button with a choice of color variants and sizes, with support for leading and trailing icons. Can be rendered as a button or link, and supports disabled state.",
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
    ariaDescription: "Navigate to home page",
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

export const PrimaryWithIcons: Story = {
  args: {
    variant: "primary",
    size: "large",
    label: "Primary Button",
    leadingIcon: IconCheckSquare,
    trailingIcon: ExclamationIcon,
    ariaDescription: "Continue to next step",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button element with trailing arrow icon, in the default **primary** variant and **large** size",
      },
    },
  },
};

export const Inversion: Story = {
  args: {
    variant: "inversion",
    size: "medium",
    label: "Inversion Button",
    ariaDescription: "Alternative action button",
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

export const InversionWithIcons: Story = {
  args: {
    variant: "inversion",
    size: "large",
    label: "Inversion Button",
    href: "/",
    leadingIcon: IconCheckSquare,
    trailingIcon: ExclamationIcon,
    ariaDescription: "Confirm and proceed to next step",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Link element with both leading and trailing icons, in **inversion** variant and **large** size",
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
    ariaDescription: "Navigate to secondary action",
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
    leadingIcon: IconCheckSquare,
    trailingIcon: ExclamationIcon,
    ariaDescription: "Send form",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button element with send icon, in the **secondary** variant and **medium** size",
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
    ariaDescription: "Button is disabled",
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
    disabled: true,
    ariaDescription: "Disabled confirmation button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Disabled** link element with check icon, in the **inversion** variant and **large** size",
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
    ariaDescription: "Disabled secondary action",
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
