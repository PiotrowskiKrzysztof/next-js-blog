import styled, { css } from "styled-components";
import { Typography } from "@components/styles/Typography";

import { ContentProps } from "./types";

export const ImageWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

export const TitleContainer = styled.div<ContentProps>`
  position: absolute;
  bottom: 10rem;
  color: ${({ theme }) => theme.colors.White};
  width: 43.75rem;
  ${({ isAlt }) =>
    isAlt &&
    css`
      color: ${({ theme }) => theme.colors.Black};
    `}
`;

export const Title = styled(Typography)`
  margin-top: 3.75rem;
`;
