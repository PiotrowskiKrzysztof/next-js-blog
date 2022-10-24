export default {
  name: "testimonialsSection",
  type: "object",
  title: "Testimonials Section",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().error("Title is required!")
    },
    {
      title: "List of Testimonials",
      name: "listTestimonials",
      type: "array",
      of: [{ type: "testimonial" }],
      validation: (Rule) =>
        Rule.required().min(3).error("You need add minimum 3 images.")
    }
  ]
};
