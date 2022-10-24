import { NextPage } from "next";
import BlogPostsList from "@components/organisms/BlogPostsList";
import Title from "@components/organisms/Title";

import { TagPageProps } from "./types";

const TagPage: NextPage<TagPageProps & { tagName: string }> = ({
  articlesByTag,
  allTag,
  tagName
}) => (
  <>
    <Title title={tagName} />
    <BlogPostsList allBlogPost={articlesByTag} allTag={allTag} />
  </>
);

export default TagPage;

/// #if !CLIENT_BUNDLE

export { getStaticPaths, getStaticProps } from "./utils";

/// #endif
