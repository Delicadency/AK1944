import { render, screen, act } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { HeaderNavigation } from "../HeaderNavigation";
import { navData } from "@/data/navigationData";

expect.extend(toHaveNoViolations);

describe("HeaderNavigation", () => {
    it("renders the navigation links correctly", async () => {
        await act(async () => {
          render(<HeaderNavigation navItems={navData} />);
        });
    
        navData.forEach((item) => {
          expect(
            screen.getByRole("listitem", { name: new RegExp(item.label, "i") }),
          ).toBeInTheDocument();
        });
      });

  it("has no accessibility violations", async () => {
    const { container } = render(<HeaderNavigation navItems={navData} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
