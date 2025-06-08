import type { Meta, StoryObj } from "@storybook/react";
import { ExclamationIcon } from "@/icons/ExclamationIcon";
import { FormField } from ".";

const meta: Meta<typeof FormField> = {
  title: "Components/Shared/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A form field component that combines a label, input, and error message. It handles input validation states and provides proper accessibility attributes.",
      },
    },
  },
  argTypes: {
    name: {
      description: "Field name used as label and in form submission",
      control: "text",
      required: true,
    },
    issues: {
      description:
        "Array of error messages. First message will be displayed if present",
      control: "object",
    },
    placeholder: {
      description: "Placeholder text for the input",
      control: "text",
    },
    className: {
      description: "Additional class names for the form field",
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    name: "email",
    placeholder: "Enter your email",
  },
  parameters: {
    docs: {
      description: {
        story: "Default state of the form field.",
      },
    },
  },
};

export const WithError: Story = {
  args: {
    name: "email",
    placeholder: "Enter your email",
    issues: ["Please provide a valid email address"],
    defaultValue: "invalid-email",
  },
  parameters: {
    docs: {
      description: {
        story: "Form field showing validation error state with error message.",
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    trailingIcon: ExclamationIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Form field with an icon, showing how icons integrate with the label and potential error messages.",
      },
    },
  },
};
