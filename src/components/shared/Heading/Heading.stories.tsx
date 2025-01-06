import { Meta, StoryObj } from "@storybook/react/*";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    variant: {
      options: ["h1", "h2", "h3", "h4"],
      control: { type: "radio" },
      description: "Type of heading",
    },
    contrast: {
      options: ["yellow", "black"],
      control: { type: "radio" },
      description: "contrast style for heading",
    },
    color: {
      options: ["green", "white"],
      control: { type: "radio" },
      description: "color style of text and underline for heading",
    },
    underline: {
      control: { type: "boolean" },
      description: "Add an underline to heading",
    },
    children: {
      control: { type: "text" },
      description: "Content of heading",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    variant: "h1",
    contrast: "black",
    color: "green",
    underline: false,
    children: "Test Heading",
  },
};
