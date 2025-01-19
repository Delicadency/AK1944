import { Meta, StoryObj } from "@storybook/react/*";
import { NewsItem } from "./NewsItem";

const meta: Meta<typeof NewsItem> = {
  title: "Components/Shared/Heading(NewsItem)",
  component: NewsItem,
  argTypes: {
    heading: {
      control: {
        type: "text",
      },
    },
    date: {
      control: {
        type: "text",
      },
    },

    excerpt: {
      control: {
        type: "text",
      },
    },
    id: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NewsItem>;

export const Default: Story = {
  args: {
    heading: "Lorem ipsum",
    date: "12.12.2024",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet est libero faucibus sed nullam nibh tempus massa ipsum. Vel commodo urna praesent justo convallis vel duis justo. Placerat ut egestas volutpat tincidunt sed. Diam pharetra sed ultricies mi eget mauris pharetra et ultrices. Eget nunc scelerisque viverra ",
  },
};
