export default {
  name: "aboutSection",
  type: "object",
  title: "About Us Section",
  fieldsets: [
    {
      name: "columnLeft",
      title: "Column Left",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: "columnRight",
      title: "Column Right",
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Title is required.")
    },
    {
      title: "Description Left",
      name: "descLeft",
      type: "blockContent",
      fieldset: "columnLeft",
      validation: (Rule) =>
        Rule.required().error("Description column is required!")
    },
    {
      title: "Image Left",
      name: "imageLeft",
      type: "image",
      fieldset: "columnLeft",
      options: {
        hotspot: true
      },
      validation: (Rule) =>
        Rule.required().error("Image column is required!")
    },
    {
      title: "Link Left",
      name: "linkLeft",
      type: "link",
      fieldset: "columnLeft"
    },
    {
      title: "Description Right",
      name: "descRight",
      type: "blockContent",
      fieldset: "columnRight",
      validation: (Rule) =>
        Rule.required().error("Description column is required!")
    },
    {
      title: "Image Right",
      name: "imageRight",
      type: "image",
      fieldset: "columnRight",
      options: {
        hotspot: true
      },
      validation: (Rule) =>
        Rule.required().error("Image column is required!")
    },
    {
      title: "Link Right",
      name: "linkRight",
      type: "link",
      fieldset: "columnRight"
    }
  ]
};
