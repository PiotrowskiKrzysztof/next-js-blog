/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-useless-fragment */
export interface Props {
  title: string;
  sections: GetPageQuery_allPage["sections"];
}

export type PageParams = {
  slug: string[];
};
