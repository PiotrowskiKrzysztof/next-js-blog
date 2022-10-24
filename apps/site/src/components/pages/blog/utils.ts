import { APOLLO_CLIENT } from "@setup/apollo";
import { GetStaticProps } from "next";

import { GetAllTags } from "./operationTypes/GetAllTags";
import { ALL_ARTICLES_QUERY, ALL_TAGS_QUERY } from "./queries";

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query({
    query: ALL_ARTICLES_QUERY
  });

  const { data: tagsData } = await apolloClient.query<GetAllTags>({
    query: ALL_TAGS_QUERY
  });

  return {
    props: {
      allBlogPost: data?.allBlogPost,
      allTag: tagsData?.allTag
    }
  };
};
