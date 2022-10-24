export interface Props {
  title: string | null;
  // eslint-disable-next-line camelcase
  backgroundImage: GetBlogPostQuery_allBlogPost_backgroundImage;
  date: SanityGQLDate;
}

export interface ContentProps {
  isAlt?: boolean;
}
