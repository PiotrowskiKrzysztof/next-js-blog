import { Inner } from "@components/styles/Inners";
import { StyledBox } from "@components/styles/styles";
import NextLink from "next/link";
import { ArrowLong } from "public/assets/svg";

import * as Styled from "./styles";
import { NextPostProps } from "./types";

export const NextPost: React.FC<NextPostProps> = ({
  nextBlogPost
}) => (
  <div>
    {nextBlogPost !== null ? (
      <Inner variant="default">
        <StyledBox
          flexDirection="column"
          alignItems="center"
          py="6rem"
        >
          <Styled.SubTitle fontSize="fontSize14" lineHeight="1.1em">
            NEXT POST
          </Styled.SubTitle>
          <Styled.Title
            fontSize="fontSize60"
            fontFamily="header"
            lineHeight="1.3em"
          >
            {nextBlogPost?.title}
          </Styled.Title>
          <NextLink
            href={{
              pathname: "/blog/[slug]",
              query: { slug: nextBlogPost?.slug?.current }
            }}
          >
            <Styled.LinkContent>
              <ArrowLong fill="currentColor" />
            </Styled.LinkContent>
          </NextLink>
        </StyledBox>
      </Inner>
    ) : null}
  </div>
);

export default NextPost;
