export default {
  name: "video",
  title: "Video",
  type: "object",
  fields: [
    {
      title: "Select the type of link",
      name: "linkType",
      type: "string",
      options: {
        list: [
          { title: "URL", value: "url" },
          { title: "File", value: "file" }
        ],
        layout: "radio"
      }
    },
    {
      title: "Link",
      name: "link",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "url"
    },
    {
      name: "file",
      type: "file",
      title: "File",
      hidden: ({ parent }) => parent?.linkType !== "file"
    },
    {
      name: "poster",
      type: "image",
      title: "Poster",
      hidden: ({ parent }) => parent?.linkType !== "file"
    }
  ],
  validation: (Rule) => Rule.required().error("Video is required!")
};
