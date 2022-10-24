import { StyledBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import styled, { css } from "styled-components";

import { StyledTestimonialsArrowProps } from "./types";

export const Category = styled(Typography)`
  color: ${({ theme }) => theme.colors.MediumGrey};
`;

export const Arrow = styled.button<StyledTestimonialsArrowProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.White};
  color: ${({ theme }) => theme.colors.MediumGrey};
  width: 3.75rem;
  height: 3.75rem;
  padding: 1.2rem;
  border: 0;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.DarkGrey};
  }
  ${({ isPrev }) =>
    isPrev &&
    css`
      z-index: 1;
      transform: rotate(180deg);
      &:after {
        content: "";
        background-color: ${({ theme }) => theme.colors.LightGrey};
        position: absolute;
        left: 0;
        width: 0.063rem;
        height: 2.5rem;
        transform: rotate(20deg);
      }
    `}
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.LightGrey2};
  padding: 6.25rem 0;
`;

export const Wrapper = styled(StyledBox)`
  .slick-slider {
    width: 100%;
    .slick-list {
      width: 100%;
    }
  }
`;

export const Testimonial = styled(StyledBox)`
  box-sizing: border-box;
  padding: 1.865rem;
  background-color: ${({ theme }) => theme.colors.White};
  height: 20.75rem;
  width: 20rem;
  margin: 0.25rem 0.625rem;
  filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.137));
`;

export const SubTitle = styled(Typography)`
  margin-bottom: 0.438rem;
`;

export const Author = styled(Typography)`
  margin-left: 0.625rem;
  color: ${({ theme }) => theme.colors.DarkGrey};
`;
