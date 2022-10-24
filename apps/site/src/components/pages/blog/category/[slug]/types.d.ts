/* eslint-disable camelcase */
export interface Props {
  tagName: string;
}

export type TagParam = {
  slug: string;
};

export interface TagPageProps {
  articlesByTag: GetArticlesTagQuery_allBlogPost;
  allTag: GetAllTags_allTag[];
}
