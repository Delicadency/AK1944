import { Meta, StoryFn } from "@storybook/react";
import { News } from "./News";
import { Suspense } from "react";
import { Loader } from "../shared/Loader";

// Mockowany komponent News, aby wymusić nieskończone ładowanie
const MockNews = () => {
  const delay = new Promise(() => {}); // Symuluje nieskończone ładowanie
  throw delay;
};

// Komponent NewsSkeleton z mockowanym News
const NewsSkeletonWithMockedNews = () => (
  <Suspense fallback={<Loader />}>
    <MockNews />
  </Suspense>
);

export default {
  title: "Components/News",
  component: News,
} as Meta;

const Template: StoryFn = (args) => (
  <News url="https://wordpressapi.eu/wp-json/wp/v2/posts" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  url: "https://wordpressapi.eu/wp-json/wp/v2/posts", // Prawidłowy URL
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  url: "https://zlyadres.eu/", // Błędny URL dla obsługi błędu
};

export const LoadingState = () => <NewsSkeletonWithMockedNews />;
