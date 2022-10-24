import gql from "graphql-tag";

export const PAGES_QUERY = gql`
  query GetPagesQuery {
    allPage {
      slug {
        current
      }
    }
  }
`;

export const SINGLE_PAGE_QUERY = gql`
  query GetPageQuery($slug: String!) {
    allPage(where: { slug: { current: { eq: $slug } } }) {
      title
      slug {
        current
      }
      sections {
        __typename
        ... on HeroSection {
          key: _key
          title
          subTitle
          mainLink {
            url
            label
          }
          backgroundImage {
            asset {
              originalFilename
              url
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
          }
          linksList {
            url
            label
            _key
          }
        }
        ... on SliderSection {
          key: _key
          title
          descRaw
          imagesList {
            _key
            asset {
              url
            }
          }
        }
        ... on CounterSection {
          key: _key
          title
          counterList {
            _key
            label
            value
          }
        }
        ... on AboutSection {
          key: _key
          title
          descLeftRaw
          imageLeft {
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
          linkLeft {
            url
            label
          }
          descRightRaw
          imageRight {
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
          linkRight {
            url
            label
          }
        }
        ... on NewsletterSection {
          key: _key
          backgroundImage {
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
          messagePlaceholder
          emailPlaceholder
        }
        ... on CenteredSection {
          key: _key
          backgroundImage {
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
          titleRaw
        }
        ... on TestimonialsSection {
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
        ... on ServicesSection {
          key: _key
          title
          services {
            _key
            name
            locationNumber
            locationImage {
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
            locationLink {
              url
              label
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
    }
  }
`;
