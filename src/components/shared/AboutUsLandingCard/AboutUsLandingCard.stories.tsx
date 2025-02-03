import { StoryObj, Meta } from "@storybook/react/types-6-0";
import AboutUsLandingCard from "./AboutUsLandingCard";

const meta: Meta<typeof AboutUsLandingCard> = {
  title: "Components/Shared/AboutUsLandingCard",
  component: AboutUsLandingCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    image: {
      control: {
        type: "object",
      },
      description: "The image properties",
    },
    heading: {
      control: {
        type: "text",
      },
      description: "The heading text",
    },
    description: {
      control: {
        type: "text",
      },
      description: "The description text",
    },
    buttonLabel: {
      control: {
        type: "text",
      },
      description: "The button label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AboutUsLandingCard>;

export const Default: Story = {
  args: {
    image: {
      src: "/images/history_AK.png",
      alt: "Historia AK. Zdjęcie grupy żołnierzy: Grupa żołnierzy w mundurach polowych, ustawionych w szeregu. Żołnierze noszą zielone berety, a jeden z nich trzyma sztandar wojskowy i flagę. Tło to miejskie budynki.",
      width: 350,
      height: 190,
    },
    heading: "Historia AK",
    description:
      "ŚZŻAK powstał w 1990 roku w Polsce z inicjatywy byłych żołnierzy Armii Krajowej, którzy pragnęli upamiętnić działalność jednej z największych podziemnych armii II wojny światowej.",
    buttonLabel: "Poznaj historię",
  },
};
