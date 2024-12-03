import { Meta, StoryFn } from "@storybook/react";
import { ExampleButton, ExampleButtonProps } from "./ExampleButton";

export default {
  title: "Components/ExampleButton",
  component: ExampleButton,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "inversion", "secondary"],
      },
    },
  },
} as Meta;

const Template: StoryFn<ExampleButtonProps> = (args) => <ExampleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary Button",
};

export const Inversion = Template.bind({});
Inversion.args = {
  variant: "inversion",
  label: "Inversion Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Secondary Button",
};
