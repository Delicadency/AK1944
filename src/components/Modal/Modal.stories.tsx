import { StoryFn, Meta } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isModalOpen: {
      control: {
        type: "boolean",
      },
    },
    setIsModalOpen: {
      action: "setIsModalOpen",
    },
  },
} as Meta;

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isModalOpen: true,
  setIsModalOpen: (isOpen: boolean) =>
    console.log(`Modal is now ${isOpen ? "open" : "closed"}`),
  children: <div>This is a default modal</div>,
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  isModalOpen: true,
  setIsModalOpen: (isOpen: boolean) =>
    console.log(`Modal is now ${isOpen ? "open" : "closed"}`),
  children: (
    <div>
      <button>Click me</button>
      <h1>This is a modal with custom content</h1>
    </div>
  ),
};
