export default {
  name: "counterSection",
  type: "object",
  title: "Counter Section",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Title is required!")
    },
    {
      title: "Counter List",
      name: "counterList",
      type: "array",
      of: [{ type: "counter" }]
    }
  ]
};
