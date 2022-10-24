import gql from "graphql-tag";

export const ALL_ARTICLES_QUERY = gql`
  query GetAllBlogs {
    allBlogPost(limit: 11) {
      id: _id
      title
      descRaw
      backgroundImage {
        asset {
          url
        }
      }
      date
      tagsList
      slug {
        current
      }
    }
  }
`;

export const ALL_TAGS_QUERY = gql`
  query GetAllTags {
    allTag {
      id: _id
      tagName
    }
  }
`;
