import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/posts", () => {
    return HttpResponse.json([
      {
        id: "1",
        title: {
          rendered: "First Post",
        },
        content: {
          rendered: "<p>First post content</p>",
        },
      },
      {
        id: "2",
        title: {
          rendered: "Second Post",
        },
        content: {
          rendered: "<p>Second post content</p>",
        },
      },
    ]);
  }),

  http.get("/empty-posts", () => {
    return HttpResponse.json([]);
  }),
];
