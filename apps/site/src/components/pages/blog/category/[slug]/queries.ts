import gql from "graphql-tag";

export const TAG_LIST_QUERY = gql`
  query GetTagListQuery {
    allTag {
      id: _id
      tagName
    }
  }
`;

export const SINGLE_TAG_QUERY = gql`
  query GetSingleTagQuery($slug: String!) {
    allTag(where: { tagName: { eq: $slug } }) {
      id: _id
      tagName
    }
  }
`;

export const ARTICLLES_TAG_QUERY = gql`
  query GetArticlesTagQuery {
    allBlogPost {
      id: _id
      title
      descRaw
      backgroundImage {
        asset {
          url
        }
      }
      date
      listTags {
        tagName
      }
      slug {
        current
      }
    }
  }
`;
