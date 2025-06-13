const MockedNews = ({
  published = true,
  title = "",
  content = "",
  createdAt = new Date().toISOString(),
  heroImage = "",
}) => ({
  id: crypto.randomUUID(),
  published,
  title,
  content,
  createdAt,
  heroImage,
});

export const news = [
  MockedNews({ title: "Something 1", content: "More here" }),
  MockedNews({ title: "Something 2", content: "More here" }),
  MockedNews({ title: "Something 3", content: "More here" }),
  MockedNews({ title: "Something 4", content: "More here" }),
  MockedNews({ title: "Something 5", content: "More here" }),
];
