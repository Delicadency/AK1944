import { StoryFn, Meta } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";
import { useDisclosure } from "@/hooks/useDisclosure";

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A reusable modal component that supports custom content, keyboard navigation, and click-outside behavior.",
      },
    },
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls the visibility of the modal",
    },
    onClose: {
      action: "onClose",
      description: "Callback function to close the modal",
    },
    children: {
      control: "text",
      description: "Content to be rendered inside the modal",
    },
  },
} as Meta;

const InteractiveTemplate: StoryFn<ModalProps> = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <button onClick={onOpen}>Open Modal</button>
      <Modal {...args} isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

const StaticTemplate: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  children: (
    <div className="p-4">
      <h2 className="mb-4 text-xl">Interactive Modal</h2>
      <p>This modal can be opened and closed with state management</p>
    </div>
  ),
};

export const Default = StaticTemplate.bind({});
Default.args = {
  isOpen: true,
  children: (
    <div className="p-4">
      <h2 className="mb-4 text-xl">Default Modal</h2>
      <p>This is a basic modal example</p>
    </div>
  ),
};

export const WithCustomContent = StaticTemplate.bind({});
WithCustomContent.args = {
  isOpen: true,
  children: (
    <div className="p-8">
      <h1 className="mb-4 text-2xl">Custom Content Modal</h1>
      <p className="mb-4">This modal demonstrates custom styling and content</p>
      <button className="bg-blue-500 rounded px-4 py-2 text-white">
        Action Button
      </button>
    </div>
  ),
};

export const LongContent = StaticTemplate.bind({});
LongContent.args = {
  isOpen: true,
  children: (
    <div className="p-4">
      <h2 className="mb-4 text-xl">Scrollable Content</h2>
      {Array(10)
        .fill(null)
        .map((_, i) => (
          <p key={i} className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
    </div>
  ),
};
