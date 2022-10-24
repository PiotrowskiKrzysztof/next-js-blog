import gql from "graphql-tag";

export const BLOG_POSTS_QUERY = gql`
  query GetBlogPostsQuery {
    allBlogPost {
      title
      slug {
        current
      }
    }
  }
`;

export const SINGLE_BLOG_POST_QUEERY = gql`
  query GetBlogPostQuery($slug: String!) {
    allBlogPost(where: { slug: { current: { eq: $slug } } }) {
      slug {
        current
      }
      title
      descRaw
      backgroundImage {
        asset {
          url
          metadata {
            dimensions {
              height
              width
            }
          }
        }
      }
      relatedArticles {
        id: _id
        slug {
          current
        }
        title
        descRaw
        listTags {
          tagName
        }
        backgroundImage {
          asset {
            url
            metadata {
              dimensions {
                height
                width
              }
            }
          }
        }
      }
      date
      listTags {
        tagName
      }
      blogContent {
        __typename
        ... on BlockContentBlog {
          key: _key
          blockContentRaw
        }
        __typename
        ... on DoubleImages {
          key: _key
          imageLeft {
            asset {
              url
              metadata {
                dimensions {
                  height
                  width
                }
              }
            }
          }
          imageRight {
            asset {
              url
              metadata {
                dimensions {
                  height
                  width
                }
              }
            }
          }
        }
        __typename
        ... on Video {
          key: _key
          link
          file {
            asset {
              url
            }
          }
          poster {
            asset {
              url
            }
          }
        }
      }
      testimonials {
        key: _key
        titleRaw
        listTestimonials {
          key: _key
          title
          descRaw
          authorImage {
            asset {
              url
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
          }
          authorName
        }
      }
    }
  }
`;
