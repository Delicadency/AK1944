import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal component", () => {
  it("should render the modal when open", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Test
      </Modal>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should not render the modal when closed", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        Test
      </Modal>,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        Test
      </Modal>,
    );
    fireEvent.click(screen.getByLabelText("Zamknij modal"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should call onClose when clicking outside the modal content", () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        Test
      </Modal>,
    );
    fireEvent.click(screen.getByRole("dialog"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should close the modal when Escape key is pressed", () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        Test
      </Modal>,
    );
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close the modal when any other key than Escape is pressed", () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        Test
      </Modal>,
    );
    fireEvent.keyDown(window, { key: "Enter" });
    expect(onClose).not.toHaveBeenCalled();
  });

  it("should move focus to the modal when opened", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Test
      </Modal>,
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveFocus();
  });

  it("should move focus to the modal when opened and return focus to the triggering element when the modal closes", () => {
    const onClose = jest.fn();
    const { rerender } = render(
      <>
        <button aria-label="Open modal" onClick={() => {}}>
          Open Modal
        </button>
        <Modal isOpen={false} onClose={onClose}>
          Test
        </Modal>
      </>,
    );
    const openButton = screen.getByRole("button", { name: /open modal/i });
    openButton.focus();
    rerender(
      <>
        <button aria-label="Open modal" onClick={() => {}}>
          Open Modal
        </button>
        <Modal isOpen={true} onClose={onClose}>
          Test
        </Modal>
      </>,
    );
    fireEvent.keyDown(window, { key: "Escape" });
    rerender(
      <>
        <button aria-label="Open modal" onClick={() => {}}>
          Open Modal
        </button>
        <Modal isOpen={false} onClose={onClose}>
          Test
        </Modal>
      </>,
    );
    expect(openButton).toHaveFocus();
  });

  it("should lock scroll when modal is open", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Test
      </Modal>,
    );
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("should unlock scroll when modal is closed", () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={() => {}}>
        Test
      </Modal>,
    );
    rerender(
      <Modal isOpen={false} onClose={() => {}}>
        Test
      </Modal>,
    );
    expect(document.body.style.overflow).toBe("auto");
  });

  it("should stop event propagation when clicking inside the modal content", () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Content</div>
      </Modal>,
    );
    fireEvent.click(screen.getByText("Content"));
    expect(onClose).not.toHaveBeenCalled();
  });
});
