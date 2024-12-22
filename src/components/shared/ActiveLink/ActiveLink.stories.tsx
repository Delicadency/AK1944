import type { Meta, StoryObj } from "@storybook/react";
import { ActiveLink } from ".";

const meta: Meta<typeof ActiveLink> = {
  title: "Components/Shared/ActiveLink",
  component: ActiveLink,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ActiveLink>;

export const Default: Story = {
  args: {
    href: "/example",
    children: "Example Link",
    className: "text-blue-600 hover:text-blue-800",
    activeClassName: "font-bold",
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/example",
      },
    },
  },
};

export const WithQueryParams: Story = {
  args: {
    href: {
      pathname: "/example",
      query: { tab: "settings" },
    },
    children: "Settings Tab",
    className: "text-blue-600 hover:text-blue-800",
    activeClassName: "font-bold",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/example",
      },
    },
  },
};

export const NonExactMatching: Story = {
  args: {
    href: "/products",
    exact: false,
    children: "Products Section",
    className: "text-blue-600 hover:text-blue-800",
    activeClassName: "font-bold",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/products/123",
      },
    },
  },
};
