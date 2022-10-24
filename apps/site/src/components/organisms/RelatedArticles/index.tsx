import React from "react";
import { Inner } from "@components/styles/Inners";
import Link from "@components/atoms/Link";

import * as Styled from "./styles";
import { RelatedArticlesProps } from "./types";

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  relatedArticles
}) => {
  console.log("asd");

  return (
    <Inner variant="default">
      <Styled.Title variant="h2" fontWeight="bold">
        Related Articles
      </Styled.Title>
      <Styled.Grid>
        {relatedArticles?.map((article, index) => {
          const isFirst = index === 0;

          return (
            <Styled.Section
              href={article?.slug?.current || "/"}
              key={article?.id}
            >
              <>
                <Styled.MainImage>
                  {article?.backgroundImage?.asset?.url && (
                    <Styled.ImageBox
                      src={article?.backgroundImage?.asset?.url}
                      width={isFirst ? 1100 : 350}
                      height={isFirst ? 500 : 350}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  )}
                  {article?.listTags && (
                    <Styled.Tag
                      {...{ isFirst }}
                      variant="smallText"
                      fontWeight="bold"
                    >
                      {article?.listTags[0]?.tagName}
                    </Styled.Tag>
                  )}
                </Styled.MainImage>
                <Styled.ArticleTitle
                  {...{ isFirst }}
                  variant={isFirst ? "h5" : "blockquote"}
                  fontWeight={isFirst ? "bold" : "regular"}
                >
                  {article?.title}
                </Styled.ArticleTitle>
              </>
            </Styled.Section>
          );
        })}
      </Styled.Grid>
    </Inner>
  );
};

export default RelatedArticles;
