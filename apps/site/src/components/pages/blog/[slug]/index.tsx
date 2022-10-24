import { NextPage } from "next";
import HeroBlogPost from "@components/organisms/HeroBlogPost";
import BlogContent from "@components/misc/BlogContent";
import NextPost from "@components/organisms/NextPost";
import RelatedArticles from "@components/organisms/RelatedArticles";
import Testimonials from "@components/organisms/Testimonials";
import Tags from "@components/atoms/Tags";
import { useEffect } from "react";
import { format } from "date-fns";

import { GetBlogPostQuery_allBlogPost as BlogPostQuery } from "./operationTypes/GetBlogPostQuery";
import { GetBlogPostsQuery_allBlogPost as NextBlogProps } from "./operationTypes/GetBlogPostsQuery";

const BlogPost: NextPage<
  BlogPostQuery & { nextBlogPost: NextBlogProps }
> = ({
  slug,
  title,
  backgroundImage,
  date,
  blogContent,
  relatedArticles,
  nextBlogPost,
  testimonials,
  listTags
}) => {
  useEffect(() => {
    const key = slug?.current as string;
    const addDate = format(new Date(), "ddMMyyyykkmmss");

    localStorage.setItem(
      key,
      JSON.stringify({
        slug: slug?.current,
        backgroundImage: backgroundImage?.asset?.url,
        date,
        title,
        addDate
      })
    );
  });

  return (
    <div>
      <HeroBlogPost {...{ title, backgroundImage, date }} />
      <BlogContent {...{ blogContent }} />
      <Tags {...{ listTags }} />
      <NextPost {...{ nextBlogPost }} />
      <Testimonials {...testimonials} />
      <RelatedArticles {...{ relatedArticles }} />
    </div>
  );
};

export default BlogPost;

/// #if !CLIENT_BUNDLE

export { getStaticPaths, getStaticProps } from "./utils";

/// #endif
