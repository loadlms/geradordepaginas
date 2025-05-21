import { defineConfig } from "tinacms";
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config();

// Usa um branch fixo para desenvolvimento
const branch = "dev";

// Verifica se as credenciais estão definidas
if (!process.env.TINA_CLIENT_ID || !process.env.TINA_TOKEN) {
  console.error('Erro: TINA_CLIENT_ID e TINA_TOKEN são necessários no arquivo .env');
  process.exit(1);
}

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

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
