import styled from "styled-components";
import BlockContent from "@components/misc/BlockContent";
import { Typography } from "@components/styles/Typography";
import { StyledBox } from "@components/styles/styles";
import { ArrowLong } from "public/assets/svg";

export const Container = styled.div`
  padding: 8.75rem 0;
`;

export const Description = styled(BlockContent)`
  display: flex;
  align-items: baseline;
  height: 10rem !important;
  color: red;
`;

export const Category = styled(Typography)`
  color: ${({ theme }) => theme.colors.MediumGrey};
`;

export const Title = styled(Typography)`
  width: 60%;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const Arrow = styled(ArrowLong)`
  fill: ${({ theme }) => theme.colors.Orange};
  width: 20px;
  height: 6px;
  margin-left: 0.75rem;
  transition: 0.5s;
`;

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.fontSize14};
  line-height: 1.1rem;
  padding: 1.3rem 4rem;
  color: ${({ theme }) => theme.colors.Orange};
  background-color: ${({ theme }) => theme.colors.White};
  position: absolute;
  bottom: 0;
  right: 0;
  transition: 0.5s;
  &:hover {
    ${Arrow} {
      margin-left: 1.75rem;
    }
  }
`;

export const Wrapper = styled(StyledBox)`
  row-gap: 5rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 5rem;
`;
