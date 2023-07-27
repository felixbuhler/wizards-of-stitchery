import type { TinaField } from "tinacms";

// Client Fields
export function wizardRuler() {

  // Client Title
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "rich-text",
      name: "description",
      label: "Description",
    },
    {
      type: "image",
      name: "imageURL",
      label: "Image"
    }


  ] as TinaField[];
}