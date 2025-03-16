import type { Meta, StoryObj } from "@storybook/react";
import { ExclamationIcon } from "@/icons/ExclamationIcon";
import IconCheckSquare from "@/icons/IconCheckSquare";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Shared/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A customizable input component with support for different color variants, icons, and states. Features include leading/trailing icons, error states, and full accessibility support.",
      },
    },
  },
  argTypes: {
    color: {
      description:
        "Color variant of the input - affects the input border, text, and icon colors",
      control: "select",
      options: ["primary", "error"],
    },
    leadingIcon: {
      description:
        "Optional icon component to be displayed at the start of the input",
      control: false,
    },
    trailingIcon: {
      description:
        "Optional icon component to be displayed at the end of the input",
      control: false,
    },
    disabled: {
      description: "Controls whether the input is disabled",
      control: "boolean",
    },
    placeholder: {
      description: "Placeholder text to show when the input is empty",
      control: "text",
    },
    className: {
      description: "Additional CSS classes to apply to the input",
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-56">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    color: "primary",
    placeholder: "Enter text...",
  },
  parameters: {
    docs: {
      description: {
        story: "Default input variant with primary styling.",
      },
    },
  },
};

export const WithLeadingIcon: Story = {
  args: {
    color: "primary",
    placeholder: "Search...",
    leadingIcon: IconCheckSquare,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Input with a leading icon, useful for search fields or similar functionality.",
      },
    },
  },
};

export const WithTrailingIcon: Story = {
  args: {
    color: "primary",
    placeholder: "Enter value...",
    trailingIcon: ExclamationIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Input with a trailing icon, useful for validation status or action indicators.",
      },
    },
  },
};

export const WithBothIcons: Story = {
  args: {
    color: "primary",
    placeholder: "Search...",
    leadingIcon: IconCheckSquare,
    trailingIcon: ExclamationIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Input with both leading and trailing icons, showing maximum customization.",
      },
    },
  },
};

export const Error: Story = {
  args: {
    color: "error",
    placeholder: "Invalid input",
    defaultValue: "Invalid value",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error state input with red styling to indicate validation issues.",
      },
    },
  },
};

export const ErrorWithIcons: Story = {
  args: {
    color: "error",
    placeholder: "Invalid input",
    defaultValue: "Invalid value",
    leadingIcon: IconCheckSquare,
    trailingIcon: ExclamationIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error state input with icons, showing how icons adapt to the error state color scheme.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Input disabled",
    defaultValue: "Cannot edit this value",
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled input state, preventing user interaction.",
      },
    },
  },
};

export const DisabledWithIcons: Story = {
  args: {
    disabled: true,
    placeholder: "Input disabled",
    defaultValue: "Cannot edit this value",
    leadingIcon: IconCheckSquare,
    trailingIcon: ExclamationIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Disabled input with icons, showing how the entire component appears in disabled state.",
      },
    },
  },
};

export const WithValue: Story = {
  args: {
    color: "primary",
    defaultValue: "Prefilled value",
    placeholder: "Enter text...",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Input with a pre-filled value, showing how text appears in the field.",
      },
    },
  },
};
