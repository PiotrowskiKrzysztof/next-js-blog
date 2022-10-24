/* eslint-disable array-callback-return */
import { APOLLO_CLIENT } from "@setup/apollo";
import { GetStaticPaths, GetStaticProps } from "next";

import { Props, TagParam } from "./types";
import { GetTagListQuery } from "./operationTypes/GetTagListQuery";
import {
  ARTICLLES_TAG_QUERY,
  SINGLE_TAG_QUERY,
  TAG_LIST_QUERY
} from "./queries";
import {
  GetArticlesTagQuery,
  GetArticlesTagQuery_allBlogPost as allBlogPost
} from "./operationTypes/GetArticlesTagQuery";

export const getStaticPaths: GetStaticPaths<TagParam> = async () => {
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query<GetTagListQuery>({
    query: TAG_LIST_QUERY
  });

  return {
    paths: data.allTag.map((tag) => ({
      params: {
        slug: tag?.tagName || ""
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props, TagParam> = async (
  context
) => {
  const slug = context.params?.slug || "";
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query({
    query: SINGLE_TAG_QUERY,
    variables: {
      slug
    }
  });
  const { data: allArticles } =
    await apolloClient.query<GetArticlesTagQuery>({
      query: ARTICLLES_TAG_QUERY
    });

  const { data: tagList } = await apolloClient.query<GetTagListQuery>(
    {
      query: TAG_LIST_QUERY
    }
  );

  const articlesByTag: allBlogPost[] = [];

  allArticles?.allBlogPost.map((article) => {
    if (article?.listTags) {
      article?.listTags.map((tag) => {
        if (tag?.tagName === slug) {
          articlesByTag.push(article);
        }
      });
    }
  });

  const {
    allTag: [tagData]
  } = data;

  return {
    props: {
      tagName: tagData.tagName || "",
      articlesByTag,
      allTag: tagList.allTag
    }
  };
};
