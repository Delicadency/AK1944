import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HeaderMobileNavigation } from "../HeaderMobileNavigation";
import { customOrder, submenuData } from "@/data/headerData";
import { navData } from "@/data/navigationData";
import { toHaveNoViolations, axe } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("HeaderMobileNavigation", () => {
  it("renders the navigation items correctly", () => {
    render(<HeaderMobileNavigation />);

    const orderedNavData = customOrder.map((index) => navData[index]);

    orderedNavData.forEach(({ label }) => {
      const elements = screen.getAllByText(label);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it("toggles submenu visibility when a navigation item with submenu is clicked", async () => {
    render(<HeaderMobileNavigation />);

    const orderedNavData = customOrder.map((index) => navData[index]);

    for (const { label, index } of orderedNavData.map((item, index) => ({
      ...item,
      index,
    }))) {
      if (submenuData[index]) {
        const button = screen.getByRole("button", {
          name: `Rozwiń menu ${label}`,
        });
        userEvent.click(button);
        const submenu = await screen.findByTestId(`submenu-${index}`);
        await waitFor(() => expect(submenu).toHaveClass("max-h-96"));
        userEvent.click(button);
        await waitFor(() => expect(submenu).toHaveClass("max-h-0"));
      }
    }
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<HeaderMobileNavigation />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
