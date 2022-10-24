export default {
  title: "Counter",
  name: "counter",
  type: "object",
  fields: [
    {
      name: "value",
      type: "number",
      title: "Value",
      validation: (Rule) =>
        Rule.required().error("Value is required!")
    },
    {
      name: "label",
      type: "string",
      title: "Label",
      validation: (Rule) =>
        Rule.required().error("Label is required!")
    }
  ]
};
