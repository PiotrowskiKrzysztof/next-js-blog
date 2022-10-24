import { GetBlogPostQuery_allBlogPost as BlogPostQuery } from "@components/pages/blog/[slug]/operationTypes/GetBlogPostQuery";

export interface Props {
  blogContent: BlogPostQuery["blogContent"];
}
