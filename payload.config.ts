import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

// Todo: Setup Env variables at Vercel.
const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET || "";
const DATABASE_URI = process.env.DATABASE_URI || "";

export default buildConfig({
  secret: PAYLOAD_SECRET,
  db: mongooseAdapter({ url: DATABASE_URI }),
  sharp,
  editor: lexicalEditor(), // If you'd like to use Rich Text, pass your editor here
  graphQL: { disable: true },
  collections: [],
});
