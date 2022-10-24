import BlogPost from "@components/molecues/BlogPost";
import { GetAllBlogs } from "@components/pages/blog/operationTypes/GetAllBlogs";
import { Inner } from "@components/styles/Inners";
import { StyledGridBox } from "@components/styles/styles";
import { useState } from "react";
import RecentPosts from "@components/organisms/RecentPosts";
import { GetAllTags_allTag as AllTags } from "@components/pages/blog/operationTypes/GetAllTags";

import * as Styled from "./styles";

const BlogPostsList: React.FC<
  GetAllBlogs & { allTag: AllTags[] }
> = ({ allBlogPost, allTag }) => {
  const [maxArticles, setMaxArticles] = useState(5);
  const [isShowed, setIsShowed] = useState(allBlogPost.length > 5);

  return (
    <div>
      <Inner variant="default">
        <StyledGridBox gridTemplateColumns="2fr 1fr" py="6.25rem">
          <div>
            {allBlogPost.slice(0, maxArticles).map((article) => (
              <BlogPost key={article?.id} {...article} />
            ))}
            {isShowed && (
              <Styled.Button
                type="button"
                onClick={() => {
                  setMaxArticles(10);
                  setIsShowed(false);
                }}
              >
                Read more
              </Styled.Button>
            )}
          </div>
          <RecentPosts allTag={allTag} />
        </StyledGridBox>
      </Inner>
    </div>
  );
};

export default BlogPostsList;
