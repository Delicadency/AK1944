import type { CollectionConfig } from "payload";

// https://github.com/payloadcms/payload/tree/main/packages/storage-azure

export const Asset: CollectionConfig = {
  slug: "asset",
  upload: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alternative text describing the media asset",
      required: true,
      defaultValue: "Media asset",
    },
  ],
};
