import styled, { css } from "styled-components";
import { Typography } from "@components/styles/Typography";
import { StyledBox } from "@components/styles/styles";
import FormatedDate from "@components/atoms/Date";
import { ArrowLong } from "public/assets/svg";

import { ContentProps } from "./types";

export const commonMargin = css`
  margin-bottom: 1.75rem;
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.Black};
  margin-bottom: 1rem;
`;

export const ArrowIcon = styled(ArrowLong)`
  width: 1.25rem;
  height: 0.375rem;
  transition: 0.5s;
`;

export const Content = styled(StyledBox)<ContentProps>`
  margin-bottom: 6.25rem;
  cursor: pointer;
  &:hover {
    ${ArrowIcon} {
      margin-left: 5rem;
    }
  }
  ${({ isAlt }) =>
    isAlt &&
    css`
      padding: 3rem;
      border: 0.063rem solid ${({ theme }) => theme.colors.LightGrey};
    `}
`;

export const Date = styled(FormatedDate)`
  ${commonMargin};
`;
