import { GetBlogPostQuery_allBlogPost as BlogPostQuery } from "@components/pages/blog/[slug]/operationTypes/GetBlogPostQuery";

export interface StyledRelatedArticlesProps {
  isFirst?: boolean;
}

export interface RelatedArticlesProps {
  relatedArticles?: BlogPostQuery["relatedArticles"];
}
