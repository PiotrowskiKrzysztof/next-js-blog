import { StyledBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import styled, { css } from "styled-components";
import FormatedDate from "@components/atoms/Date";
import { ArrowLong } from "public/assets/svg";

import { ContentProps } from "./types";

export const Container = styled(StyledBox)`
  margin-left: 1.25rem;
  position: sticky;
  top: 3rem;
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.Black};
  margin-bottom: 1.25rem;
`;

export const ImageContainer = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  position: relative;
  margin-right: 1.25rem;
  flex: 1;
  transition: 0.5s;
`;

export const ArticleTitle = styled(Typography)`
  margin-bottom: 0.5rem;
`;

export const Date = styled(FormatedDate)`
  color: ${({ theme }) => theme.colors.Grey2};
  margin-bottom: 0.5rem;
`;

export const ArrowIcon = styled(ArrowLong)`
  width: 1.25rem;
  height: 0.375rem;
  transition: 0.5s;
`;

export const Post = styled(StyledBox)<ContentProps>`
  transition: 0.5s;
  ${({ isAlt }) =>
    isAlt &&
    css`
      padding: 2rem;
      border: 0.063rem solid ${({ theme }) => theme.colors.LightGrey};
    `}
  &:hover {
    color: ${({ theme }) => theme.colors.Black};
    ${ArrowIcon} {
      margin-left: 3rem;
    }
  }
`;

export const Tag = styled(Typography)`
  display: inline-block;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.Blue};
  cursor: pointer;
`;
