export default {
  name: "doubleImages",
  type: "object",
  title: "Double Images",
  fields: [
    {
      title: "Image Left",
      name: "imageLeft",
      type: "image",
      validation: (Rule) =>
        Rule.required().error("Image Left is required!")
    },
    {
      title: "Image Right",
      name: "imageRight",
      type: "image",
      validation: (Rule) =>
        Rule.required().error("Image Right is required!")
    }
  ]
};
