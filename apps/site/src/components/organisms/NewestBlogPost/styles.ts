import styled from "styled-components";
import { Inner as CustomInner } from "@components/styles/Inners";
import { Typography } from "@components/styles/Typography";
import { ArrowLong } from "public/assets/svg";

export const ArrowIcon = styled(ArrowLong)`
  width: 1.25rem;
  height: 0.375rem;
  margin-left: 0.75rem;
  transition: 0.5s;
`;

export const Container = styled.div`
  width: 100vw;
  position: relative;
  cursor: pointer;
  &:hover {
    ${ArrowIcon} {
      margin-left: 5.375rem;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: ${({ theme }) => theme.colors.White};
`;

export const Inner = styled(CustomInner)`
  height: 100%;
`;

export const Title = styled(Typography)`
  width: 60%;
`;

export const LinkContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontSize14};
  line-height: 1.1em;
  position: relative;
  display: flex;
  align-items: center;
  &:before {
    content: "";
    width: 10.5rem;
    height: 0.063rem;
    background-color: ${({ theme }) => theme.colors.White};
    position: absolute;
    bottom: 2rem;
  }
`;
