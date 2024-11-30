// src/stories/News.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { News } from "./News";

export default {
  title: "Components/News",
  component: News,
} as Meta;

const Template: StoryFn = (args) => <News {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: "https://wordpressapi.eu/wp-json/wp/v2/posts",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  url: "https://zlyadress.eu/wp-json/wp/v2/posts",
  // Błedny url aby pokazać obsługę błędu
};
