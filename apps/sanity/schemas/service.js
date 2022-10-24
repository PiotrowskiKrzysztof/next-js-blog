export default {
  name: "service",
  type: "object",
  title: "Service",
  fields: [
    {
      title: "Location Number",
      name: "locationNumber",
      type: "number",
      validation: (Rule) => [
        Rule.required().error("Location Number is required!"),
        Rule.min(1).error(
          "Location number needs to be greater than 0"
        )
      ]
    },
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required!")
    },
    {
      title: "Location Image",
      name: "locationImage",
      type: "image",
      validation: (Rule) =>
        Rule.required().error("Image is required!")
    },
    {
      title: "Location Link",
      name: "locationLink",
      type: "link"
    }
  ]
};
