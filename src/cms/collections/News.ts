import type { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: "news",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "published",
      type: "checkbox",
      label: "Show news as published or not",
      required: true,
      defaultValue: false,
    },
    {
      name: "title",
      type: "text",
      label: "Title of the news article",
      required: true,
    },
    {
      name: "teaser",
      type: "text",
      label: "Short teaser of the news article",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Content of the news article",
      required: true,
    },
    {
      name: "createdAt",
      type: "date",
      label: "Date of creation of the article",
      required: true,
      defaultValue: () => new Date(),
      timezone: true,
    },
    {
      name: "heroImage",
      type: "upload",
      label: "Main image as hero banner",
      required: true,
      relationTo: "asset",
    },
    // Todo: Link Gallery. Optional.
  ],
};
