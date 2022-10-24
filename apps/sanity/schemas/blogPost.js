export default {
  name: "blogPost",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(5)
          .error("A title of min. 5 characters is required!"),
        Rule.max(50).warning("Shorter titles are usually better.")
      ]
    },
    {
      title: "Description",
      name: "desc",
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().error("Description is required!")
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
      },
      validation: (Rule) => Rule.required().error("Slug is required!")
    },
    {
      title: "Background Image",
      name: "backgroundImage",
      type: "image"
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      options: {
        dateFormat: "DD MMM YYYY",
        calendarTodayLabel: "Today"
      },
      validation: (Rule) => Rule.required().error("Date is required!")
    },
    {
      title: "Blog Content",
      name: "blogContent",
      type: "array",
      of: [
        { type: "blockContentBlog" },
        { type: "doubleImages" },
        { type: "video" }
      ],
      validation: (Rule) =>
        Rule.required().error("Content is required!")
    },
    {
      title: "Related Articles",
      name: "relatedArticles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blogPost" }] }],
      validation: (Rule) => [
        Rule.required().min(1).error("Related Article is required!"),
        Rule.required()
          .max(4)
          .error("You can add max 4 Related Articles!"),
        Rule.unique().error("Related Articles ought to be unique")
      ]
    },
    {
      title: "Testimonials",
      name: "testimonials",
      type: "testimonialsSection"
    },
    {
      title: "List of tags",
      name: "listTags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      validation: (Rule) =>
        Rule.required().min(1).error("You have to add minimum 1 tag!")
    }
  ]
};
