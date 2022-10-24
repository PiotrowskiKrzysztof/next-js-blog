/* eslint-disable react/no-array-index-key */
import { Inner } from "@components/styles/Inners";
import { StyledBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";

import * as Styled from "./styles";
import { TagsProps } from "./types";

const Tags: React.FC<TagsProps> = ({ listTags }) => (
  <Inner variant="default">
    <StyledBox px="4.75rem" mb="3rem">
      <Typography variant="tags">Tags:</Typography>
      {listTags?.map((tag, index) => (
        <Styled.Tag key={index} variant="tags">
          {tag?.tagName}
          {index !== listTags.length - 1 && ","}
        </Styled.Tag>
      ))}
    </StyledBox>
  </Inner>
);

export default Tags;
