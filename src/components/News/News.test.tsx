import { render, screen, waitFor } from "@testing-library/react";
import { News } from "@/components/News";

describe("News component", () => {
  it("renders posts fetched from API", async () => {
    render(await News({ url: "/posts" }));

    await waitFor(() => {
      expect(screen.getByText("First Post")).toBeVisible();
      expect(screen.getByText(/First post content/)).toBeVisible();
      expect(screen.getByText("Second Post")).toBeVisible();
      expect(screen.getByText(/Second post content/)).toBeVisible();
    });
  });

  it("handles an empty response gracefully", async () => {
    render(await News({ url: "/empty-posts" }));

    await waitFor(() => {
      expect(screen.getByText("Brak danych")).toBeVisible();
      expect(screen.queryByText("First Post")).not.toBeInTheDocument();
      expect(screen.queryByText("Second Post")).not.toBeInTheDocument();
    });
  });
});
