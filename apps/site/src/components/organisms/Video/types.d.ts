/* eslint-disable camelcase */
export interface Props {
  link: string | null;
  file: GetBlogPostQuery_allBlogPost_blogContent_Video_file;
  poster: GetBlogPostQuery_allBlogPost_blogContent_Video_poster_asset;
}

export interface CorrectVideoProps {
  url: string;
  poster: GetBlogPostQuery_allBlogPost_blogContent_Video_poster_asset;
}
