export default {
  name: "heroSection",
  type: "object",
  title: "Hero Section",
  fields: [
    {
      title: "Background Image",
      name: "backgroundImage",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (Rule) =>
        Rule.required().error("Background image is required!")
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Title is required!")
    },
    {
      title: "Sub Title",
      name: "subTitle",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Sub Title is required!")
    },
    {
      title: "Links List",
      name: "linksList",
      type: "array",
      of: [{ type: "link" }],
      validation: (Rule) =>
        Rule.required().length(3).error("You need to add 3 elements.")
    },
    {
      title: "Main Link",
      name: "mainLink",
      type: "link",
      validation: (Rule) =>
        Rule.required().error("Main Link is required!")
    }
  ]
};
