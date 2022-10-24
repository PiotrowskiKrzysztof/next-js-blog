import { APOLLO_CLIENT } from "@setup/apollo";
import { GetStaticPaths, GetStaticProps } from "next";

import { GetBlogPostsQuery } from "./operationTypes/GetBlogPostsQuery";
import { BLOG_POSTS_QUERY, SINGLE_BLOG_POST_QUEERY } from "./queries";
import { BlogPostParam, Props } from "./types";

export const getStaticPaths: GetStaticPaths<
  BlogPostParam
> = async () => {
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query<GetBlogPostsQuery>({
    query: BLOG_POSTS_QUERY
  });

  return {
    paths: data.allBlogPost.map(({ slug }) => ({
      params: {
        slug: slug?.current || ""
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<
  Props,
  BlogPostParam
> = async (context) => {
  const slug = context.params?.slug || "";
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query({
    query: SINGLE_BLOG_POST_QUEERY,
    variables: {
      slug
    }
  });
  const { data: postsData } =
    await apolloClient.query<GetBlogPostsQuery>({
      query: BLOG_POSTS_QUERY
    });

  const {
    allBlogPost: [blogPost]
  } = data;

  const currentArticleIndex = postsData?.allBlogPost?.findIndex(
    (object) => object?.slug?.current === slug
  );

  const nextBlogPost =
    // eslint-disable-next-line no-unsafe-optional-chaining
    currentArticleIndex !== postsData?.allBlogPost?.length - 1
      ? postsData?.allBlogPost[currentArticleIndex + 1]
      : null;

  return {
    props: {
      slug: blogPost.slug || "",
      title: blogPost.title || "",
      backgroundImage: blogPost.backgroundImage,
      date: blogPost.date,
      blogContent: blogPost.blogContent,
      relatedArticles: blogPost.relatedArticles,
      nextBlogPost,
      testimonials: blogPost.testimonials,
      listTags: blogPost.listTags
    }
  };
};
