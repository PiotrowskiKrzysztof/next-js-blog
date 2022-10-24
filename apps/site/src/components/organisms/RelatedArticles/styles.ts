import { Typography } from "@components/styles/Typography";
import styled from "styled-components";
import Image from "next/image";
import Link from "@components/atoms/Link";

import { StyledRelatedArticlesProps } from "./types";

export const Title = styled(Typography)`
  width: 100%;
  max-width: 15rem;
  color: ${({ theme }) => theme.colors.Black};
`;

export const Grid = styled.div`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.8rem 0.8rem;
`;

export const ImageBox = styled(Image)``;

export const Tag = styled(Typography)<StyledRelatedArticlesProps>`
  position: absolute;
  z-index: 1;
  aspect-ratio: 15/4;
  right: 2rem;
  color: ${({ theme }) => theme.colors.White};
  padding: 1rem 3rem;
  transition: 0.5s;
  ${({ isFirst }) => (isFirst ? `top: 2rem;` : `bottom: 2rem;`)};
  //bean shape
  border: 0.063rem solid ${({ theme }) => theme.colors.White};
  border-radius: 1.5rem;
`;

export const Section = styled(Link)`
  position: relative;
  &:first-of-type {
    grid-column: span 3;
  }
  &:hover {
    ${Tag} {
      background-color: ${({ theme }) => theme.colors.White};
      color: ${({ theme }) => theme.colors.Black};
      mix-blend-mode: lighten;
    }
  }
`;

export const MainImage = styled.div`
  position: relative;
`;

export const ArticleTitle = styled(
  Typography
)<StyledRelatedArticlesProps>`
  color: ${({ theme }) => theme.colors.Black};
  ${({ isFirst, theme }) =>
    isFirst
      ? `position: absolute;
         bottom: 0;
         aspect-ratio: 451/189;
         width: 100%;
         max-width: 25rem;
         display: flex;
         align-items: center;
         padding-left: 1rem;
         padding-right: 1rem;
         background-color: ${theme.colors.White}`
      : `margin-top: 1rem;`};
`;
