import { Meta, StoryObj } from "@storybook/react/*";
import { ReadMore } from "./ReadMore";

const meta: Meta<typeof ReadMore> = {
  title: "Components/Shared/Heading",
  component: ReadMore,
  argTypes: {
    id: {
      control: {
        type: "text",
      },
    },
    excerpt: {
      control: {
        type: "text",
      },
    },
    amountOfWords: {
      control: {
        type: "number",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReadMore>;

export const Default: Story = {
  args: {
    id: "read-more",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis eligendi, similique quisquam esse aliquam possimus, illum quaerat eaque illo dolor officiis. Temporibus odit, pariatur corporis ipsa odio officia tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis eligendi, similique quisquam esse aliquam possimus, illum quaerat eaque illo dolor officiis. Temporibus odit, pariatur corporis ipsa odio officia tenetur?",
    amountOfWords: 36,
    className: "",
  },
};
