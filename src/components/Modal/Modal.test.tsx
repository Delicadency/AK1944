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
    fireEvent.click(screen.getByLabelText("Zamknij modal"));
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

  it("should not close the modal when any other key than Escape is pressed", () => {
    const setIsModalOpen = jest.fn();
    render(
      <Modal isModalOpen={true} setIsModalOpen={setIsModalOpen}>
        Test
      </Modal>,
    );
    fireEvent.keyDown(window, { key: "Enter" });
    expect(setIsModalOpen).not.toHaveBeenCalled();
  });

  it("should move focus to the modal when opened", () => {
    render(
      <Modal isModalOpen={true} setIsModalOpen={() => {}}>
        Test
      </Modal>,
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveFocus();
  });

  it("should move focus to the modal when opened and return focus to the triggering element when the modal closes", () => {
    const setIsModalOpen = jest.fn();
    const { rerender } = render(
      <>
        <button aria-label="Open modal" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
        <Modal isModalOpen={false} setIsModalOpen={setIsModalOpen}>
          Test
        </Modal>
      </>,
    );
    const openButton = screen.getByRole("button", { name: /open modal/i });
    openButton.focus();
    rerender(
      <>
        <button aria-label="Open modal" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
        <Modal isModalOpen={true} setIsModalOpen={setIsModalOpen}>
          Test
        </Modal>
      </>,
    );
    fireEvent.keyDown(window, { key: "Escape" });
    rerender(
      <>
        <button aria-label="Open modal" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
        <Modal isModalOpen={false} setIsModalOpen={setIsModalOpen}>
          Test
        </Modal>
      </>,
    );
    expect(openButton).toHaveFocus();
  });

  it("should lock scroll when modal is open", () => {
    render(
      <Modal isModalOpen={true} setIsModalOpen={() => {}}>
        Test
      </Modal>,
    );
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("should unlock scroll when modal is closed", () => {
    const { rerender } = render(
      <Modal isModalOpen={true} setIsModalOpen={() => {}}>
        Test
      </Modal>,
    );
    rerender(
      <Modal isModalOpen={false} setIsModalOpen={() => {}}>
        Test
      </Modal>,
    );
    expect(document.body.style.overflow).toBe("auto");
  });

  it("should stop event propagation when clicking inside the modal content", () => {
    const setIsModalOpen = jest.fn();
    render(
      <Modal isModalOpen={true} setIsModalOpen={setIsModalOpen}>
        <div>Content</div>
      </Modal>,
    );
    fireEvent.click(screen.getByText("Content"));
    expect(setIsModalOpen).not.toHaveBeenCalled();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(
      <Modal isModalOpen={true} setIsModalOpen={() => {}}>
        Test
      </Modal>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
