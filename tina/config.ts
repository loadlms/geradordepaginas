import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID || "",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "src/content",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "template",
            label: "Template",
            options: ["template1", "template2"],
            required: true,
          },
          {
            type: "string",
            name: "videoUrl",
            label: "Video URL",
            required: true,
          },
          {
            type: "string",
            name: "ctaText",
            label: "CTA Text",
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            required: true,
          },
          {
            type: "rich-text",
            name: "disclaimer",
            label: "Disclaimer",
            required: true,
          },
        ],
      },
    ],
  },
});
