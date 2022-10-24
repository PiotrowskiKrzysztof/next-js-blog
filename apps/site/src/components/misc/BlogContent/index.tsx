/* eslint-disable react/jsx-no-useless-fragment */
import BlockContent from "@components/misc/BlockContent";
import { Inner } from "@components/styles/Inners";
import DoubleImages from "@components/molecues/DoubleImages";
import Video from "@components/organisms/Video";
import { StyledBox } from "@components/styles/styles";

import { Props } from "./types";
import * as Styled from "./styles";

const BlogContent: React.FC<Props> = ({ blogContent }) => (
  <Inner variant="default">
    <Styled.ContentWraper>
      {blogContent?.map((element) => {
        switch (element?.__typename) {
          case "BlockContentBlog": {
            return (
              <BlockContent
                key={element?.key}
                content={element?.blockContentRaw}
              />
            );
          }
          case "DoubleImages": {
            return <DoubleImages {...element} />;
          }
          case "Video": {
            return (
              <StyledBox
                key={element?.key}
                display="block"
                my="3.125rem"
              >
                <Video {...element} />
              </StyledBox>
            );
          }
          default:
            return null;
        }
      })}
    </Styled.ContentWraper>
  </Inner>
);

export default BlogContent;
