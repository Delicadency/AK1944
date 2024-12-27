import { StoryFn, Meta } from "@storybook/react/types-6-0";
import { BackgroundImage, BackgroundImageProps } from "./BackgroundImage";

export default {
  title: "Components/BackgroundImage",
  component: BackgroundImage,
} as Meta;

const Template: StoryFn<BackgroundImageProps> = (args) => (
  <BackgroundImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/150",
  children: "Hello World",
};

export const CustomImage = Template.bind({});
CustomImage.args = {
  src: "https://via.placeholder.com/300",
  children: "Hello World",
};
