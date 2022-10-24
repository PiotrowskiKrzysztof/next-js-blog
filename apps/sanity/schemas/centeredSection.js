export default {
  name: "centeredSection",
  type: "object",
  title: "Cenetered Section",
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
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().error("Title is required!")
    }
  ]
};
