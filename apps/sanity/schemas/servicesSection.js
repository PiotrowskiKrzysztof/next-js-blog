export default {
  name: "servicesSection",
  type: "object",
  title: "Services Section",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Title is required!")
    },
    {
      title: "Services",
      name: "services",
      type: "array",
      of: [{ type: "service" }],
      validation: (Rule) => [
        Rule.required().error("Services are required!"),
        Rule.min(2).error(
          "Location number needs to be greater than 1"
        )
      ]
    }
  ]
};
