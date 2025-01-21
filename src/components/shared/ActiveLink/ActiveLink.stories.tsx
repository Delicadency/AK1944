import type { Meta, StoryObj } from "@storybook/react";
import { ActiveLink } from ".";

const meta: Meta<typeof ActiveLink> = {
  title: "Components/Shared/ActiveLink",
  component: ActiveLink,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A Next.js Link component that applies styling based on the current route. Supports exact and non-exact path matching, query parameters, and custom styling.",
      },
    },
  },
  argTypes: {
    href: {
      description: "URL or route object to link to",
      control: "text",
    },
    exact: {
      description: "Whether to match the path exactly or allow sub-paths",
      control: "boolean",
    },
    className: {
      description: "Default styling classes",
      control: "text",
    },
    activeClassName: {
      description: "Classes to apply when link is active",
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col space-y-4 p-4">
        <p className="text-sm text-gray-500">
          Current path shown for demo purposes
        </p>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ActiveLink>;

const defaultClasses = {
  className: "text-blue-600 hover:text-blue-800 transition-colors duration-200",
  activeClassName: "font-bold text-blue-800 underline",
};

export const Default: Story = {
  args: {
    href: "/example",
    children: "Example Link",
    ...defaultClasses,
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
  decorators: [
    (Story) => (
      <div className="space-y-2">
        <div className="text-xs text-gray-500">Current path: /example</div>
        <Story />
      </div>
    ),
  ],
};

export const WithQueryParams: Story = {
  args: {
    href: {
      pathname: "/example",
      query: { tab: "settings" },
    },
    children: "Settings Tab",
    ...defaultClasses,
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/example",
        query: { tab: "settings" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="space-y-2">
        <div className="text-xs text-gray-500">
          Current path: /example?tab=settings
        </div>
        <Story />
      </div>
    ),
  ],
};

export const NonExactMatching: Story = {
  args: {
    href: "/products",
    exact: false,
    children: "Products Section",
    ...defaultClasses,
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/products/123",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="space-y-2">
        <div className="text-xs text-gray-500">Current path: /products/123</div>
        <Story />
      </div>
    ),
  ],
};

export const MultipleLinks: Story = {
  render: () => (
    <nav className="flex flex-col space-y-2">
      <ActiveLink href="/dashboard" {...defaultClasses}>
        Dashboard
      </ActiveLink>
      <ActiveLink href="/products" exact={false} {...defaultClasses}>
        Products
      </ActiveLink>
      <ActiveLink
        href={{
          pathname: "/settings",
          query: { tab: "profile" },
        }}
        {...defaultClasses}
      >
        Settings
      </ActiveLink>
    </nav>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/products/123",
      },
    },
  },
};
