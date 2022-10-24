export default {
  name: "newsletterSection",
  type: "object",
  title: "Newsletter Section",
  fields: [
    {
      title: "Background Image",
      name: "backgroundImage",
      type: "image",
      validation: (Rule) =>
        Rule.required().error("Background image is required!")
    },
    {
      title: "Message Placeholder",
      name: "messagePlaceholder",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Message Placeholder is required!")
    },
    {
      title: "Email Placeholder",
      name: "emailPlaceholder",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Email Placeholder is required!")
    }
  ]
};
