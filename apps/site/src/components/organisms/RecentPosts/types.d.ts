export interface ContentProps {
  isAlt?: boolean;
}

export interface RecentPostsProps {
  [index: number]: {
    slug: string;
    backgroundImage: string;
    date: string;
    title: string;
    addDate: string;
  };
}
