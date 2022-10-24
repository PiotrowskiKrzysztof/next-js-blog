export default {
  name: "sliderSection",
  type: "object",
  title: "Slider Section",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Title is required!")
    },
    {
      title: "Description",
      name: "desc",
      type: "blockContent"
    },
    {
      title: "Images List",
      name: "imagesList",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => [
        Rule.required()
          .min(3)
          .error("You need add minimum 3 images."),
        Rule.required().max(8).error("U can add max 8 images.")
      ]
    }
  ]
};
