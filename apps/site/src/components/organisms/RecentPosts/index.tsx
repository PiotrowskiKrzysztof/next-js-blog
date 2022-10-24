import Image from "next/image";
import { StyledBox } from "@components/styles/styles";
import { useEffect, useState } from "react";
import Link from "@components/atoms/Link";
import { GetAllTags } from "@components/pages/blog/operationTypes/GetAllTags";

import * as Styled from "./styles";
import { RecentPostsProps } from "./types";

const RecentPosts: React.FC<GetAllTags> = ({ allTag }) => {
  const [recentPosts, setRecentPosts] = useState<RecentPostsProps>();

  useEffect(() => {
    const values = [];
    const keys = Object.keys(localStorage);
    let index = keys.length;

    // eslint-disable-next-line no-plusplus
    while (index--) {
      if (
        JSON.parse(localStorage.getItem(keys[index]) || "{}").slug ===
        keys[index]
      ) {
        values.push(
          JSON.parse(localStorage.getItem(keys[index]) || "{}")
        );
      }
    }

    values.sort(
      (objA, objB) => Number(objB.addDate) - Number(objA.addDate)
    );

    if (values.length > 3) {
      localStorage.removeItem(values[3].slug);
      values.pop();
    }

    setRecentPosts(values);
  }, []);

  return (
    <StyledBox display="block">
      <Styled.Container flexDirection="column">
        <Styled.Title
          fontSize="fontSize18"
          lineHeight="1.3em"
          fontWeight="bold"
          fontFamily="header"
        >
          Recent Posts
        </Styled.Title>
        {recentPosts instanceof Array &&
          recentPosts?.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Styled.Post
                mb="1.25rem"
                isAlt={
                  !Object.prototype.hasOwnProperty.call(
                    post,
                    "backgroundImage"
                  )
                }
              >
                {post.backgroundImage && (
                  <Styled.ImageContainer>
                    <Image
                      src={post.backgroundImage}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </Styled.ImageContainer>
                )}
                <StyledBox
                  flexDirection="column"
                  justifyContent="center"
                  flex="2"
                >
                  <Styled.ArticleTitle
                    fontFamily="header"
                    fontSize="fontSize16"
                    lineHeight="1.375em"
                  >
                    {post.title}
                  </Styled.ArticleTitle>
                  <Styled.Date date={post.date} />
                  <Styled.ArrowIcon fill="currentColor" />
                </StyledBox>
              </Styled.Post>
            </Link>
          ))}
        <Styled.Title
          fontSize="fontSize18"
          lineHeight="1.3em"
          fontWeight="bold"
          fontFamily="header"
        >
          Tags
        </Styled.Title>
        <div>
          {allTag.map((tag) => (
            <Link href={`/blog/category/${tag?.tagName}`}>
              <Styled.Tag
                key={tag?.id}
              >{`#${tag?.tagName}`}</Styled.Tag>
            </Link>
          ))}
        </div>
      </Styled.Container>
    </StyledBox>
  );
};

export default RecentPosts;
