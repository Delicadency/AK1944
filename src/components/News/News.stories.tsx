// src/stories/News.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { News } from ".";

export default {
  title: "Components/News",
  component: News,
} as Meta;

const Template: StoryFn = (args) => (
  <News url="https://wordpressapi.eu/wp-json/wp/v2/posts" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // Prawidłowy url aby pokazać obsłgę danych
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  url: "https://zlyadres.eu/",
  // Błedny url aby pokazać obsługę błędu
};
