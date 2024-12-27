import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal component", () => {
  it("should render the modal when open", () => {
    render(
      <Modal isModalOpen={true} setIsModalOpen={() => {}}>
        Test
      </Modal>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should not render the modal when closed", () => {
    render(
      <Modal isModalOpen={false} setIsModalOpen={() => {}}>
        Test
      </Modal>,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should call setIsModalOpen when close button is clicked", () => {
    const setIsModalOpen = jest.fn();
    render(
      <Modal isModalOpen={true} setIsModalOpen={setIsModalOpen}>
        Test
      </Modal>,
    );
    fireEvent.click(screen.getByLabelText("Close modal"));
    expect(setIsModalOpen).toHaveBeenCalledTimes(1);
  });

  it("should call setIsModalOpen when clicking outside the modal content", () => {
    const setIsModalOpen = jest.fn();
    render(
      <Modal isModalOpen={true} setIsModalOpen={setIsModalOpen}>
        Test
      </Modal>,
    );
    fireEvent.click(screen.getByRole("dialog"));
    expect(setIsModalOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the modal when Escape key is pressed", () => {
    const setIsModalOpen = jest.fn();
    render(
      <Modal isModalOpen={true} setIsModalOpen={setIsModalOpen}>
        Test
      </Modal>,
    );
    fireEvent.keyDown(window, { key: "Escape" });
    expect(setIsModalOpen).toHaveBeenCalledWith(false);
  });
});
