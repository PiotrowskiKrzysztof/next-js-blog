import { Typography } from "@components/styles/Typography";
import BlockContent from "@components/misc/BlockContent";
import styled, { css } from "styled-components";

import { StyledSliderArrowProps } from "./types";

export const Slider = styled.div`
  margin-top: 6rem;
`;

export const Title = styled(Typography)`
  margin-right: 2.5rem;
  margin-bottom: 2.2rem;
  flex: 1;
`;

export const Description = styled(BlockContent)`
  font-size: ${({ theme }) => theme.fontSizes.fontSize14};
  line-height: 1.5em;
  flex: 1;
  margin-bottom: 2.2rem;
`;

export const Arrow = styled.button<StyledSliderArrowProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.White};
  color: ${({ theme }) => theme.colors.MediumGrey};
  width: 3.75rem;
  height: 3.75rem;
  padding: 1.2rem;
  position: absolute;
  bottom: 0;
  left: 3.75rem;
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
      left: 0;
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

export const AppendDots = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1.8rem;
`;

export const Dots = styled.ul`
  margin: 0;
  li {
    margin-right: 0.6rem;
    width: 0.6rem;
    height: 0.6rem;
    margin-left: 0;
  }
  .slick-active {
    margin-right: 0.6rem;
    width: 1.5rem;
    height: 0.6rem;
    div {
      background-color: ${({ theme }) => theme.colors.Orange};
      border-radius: 3.1rem;
      width: 1.5rem;
      height: 0.6rem;
    }
  }
`;

export const Paging = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.LightGrey};
`;

export const ImageBox = styled.div`
  span {
    margin-right: 10px !important;
    margin-left: 0;
  }
`;
