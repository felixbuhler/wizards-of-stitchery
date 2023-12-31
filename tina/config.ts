import { defineConfig } from "tinacms";

import { forest } from "./forest";
import { castle } from "./castle";
import { wizard } from "./wizard";
import { wizardRuler } from "./wizardruler";
import { wizardRulerSingle } from "./wizardrulersingle";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "/images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // Forest

      {
        name: "forest",
        label: "Forest",
        path: "content/forest",
        fields: [
          ...forest(),
        ],
      },
      {
        name: "castle",
        label: "Castle",
        path: "content/castle",
        fields: [
          ...castle(),
        ],
      },
      {
        name: "wizard",
        label: "Wizard",
        path: "content/wizard",
        fields: [
          ...wizard(),
        ],
      },
      {
        name: "wizardRuler",
        label: "Wizard Ruler",
        path: "content/wizardruler",
        fields: [
          ...wizardRuler(),
        ],
      },
      {
        name: "wizardRulerSingle",
        label: "Wizard Ruler Single",
        path: "content/wizardrulersingle",
        fields: [
          ...wizardRulerSingle(),
        ],
      }

    ],
  },
});
