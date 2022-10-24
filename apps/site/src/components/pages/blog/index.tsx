import BlogPostsList from "@components/organisms/BlogPostsList";
import NewestBlogPost from "@components/organisms/NewestBlogPost";
import Title from "@components/organisms/Title";
import { NextPage } from "next";

import { GetAllBlogs } from "./operationTypes/GetAllBlogs";
import { GetAllTags_allTag as AllTagsProps } from "./operationTypes/GetAllTags";

const Blog: NextPage<GetAllBlogs & { allTag: AllTagsProps[] }> = ({
  allBlogPost,
  allTag
}) => (
  <>
    <Title title={null} />
    <NewestBlogPost {...allBlogPost[allBlogPost.length - 1]} />
    <BlogPostsList allBlogPost={allBlogPost} allTag={allTag} />
  </>
);

export default Blog;

/// #if !CLIENT_BUNDLE

export { getStaticProps } from "./utils";

/// #endif
