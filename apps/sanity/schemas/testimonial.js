export default {
  name: "testimonial",
  type: "object",
  title: "Testimonial",
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
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().error("Description is required!")
    },
    {
      title: "Author Image",
      name: "authorImage",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (Rule) =>
        Rule.required().error("Author image is required!")
    },
    {
      title: "Author Name",
      name: "authorName",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Author name is required!")
    }
  ]
};
