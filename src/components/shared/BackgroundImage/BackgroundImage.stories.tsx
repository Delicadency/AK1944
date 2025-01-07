import { StoryObj, Meta } from "@storybook/react/types-6-0";
import { BackgroundImage } from "./BackgroundImage";

const meta: Meta<typeof BackgroundImage> = {
  title: "Components/BackgroundImage",
  component: BackgroundImage,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
      description: "The image source",
    },
    alt: {
      control: {
        type: "text",
      },
      description: "The image alt text",
    },
    children: {
      control: {
        type: "text",
      },
      description: "The content to display over the image",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BackgroundImage>;

export const Default: Story = {
  args: {
    src: "/placeholder-image.jpg",
    alt: "Example background",
    children: (
      <div className="p-8 text-white">
        <h2 className="text-2xl font-bold">Hello World</h2>
        <p>This is an example of content over a background image</p>
      </div>
    ),
  },
};
