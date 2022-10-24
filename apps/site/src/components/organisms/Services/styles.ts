import { Typography } from "@components/styles/Typography";
import styled from "styled-components";
import Image from "next/image";
import Link from "@components/atoms/Link";

export const WrapperTitle = styled.div`
  max-width: 39rem;
`;

export const Category = styled(Typography)`
  color: ${({ theme }) => theme.colors.MediumGrey};
`;

export const Title = styled(Typography)`
  margin-top: 2rem;
`;

export const WrapperGrid = styled.div`
  margin-top: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.8rem;
`;

export const ImageText = styled.span`
  position: absolute;
  z-index: 1;
  color: ${({ theme }) => theme.colors.White};
  bottom: 1.7rem;
  left: 1.7rem;
  right: 1.7rem;
`;

export const ImageBox = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const LinkService = styled(Link)`
  position: relative;
  display: block;

  &:first-of-type {
    grid-column: span 2;
  }

  > span:nth-child(2) {
    height: 100% !important;
  }
`;
