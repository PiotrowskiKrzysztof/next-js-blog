import Link from "@components/atoms/Link";
import { Typography } from "@components/styles/Typography";
import styled from "styled-components";
import * as Icon from "public/assets/svg";

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Information = styled.div`
  padding: 5.5rem;
  max-width: 44rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.Orange};
`;

export const Description = styled(Typography)`
  margin-top: 2rem;
`;

export const Home = styled(Link)`
  color: ${({ theme }) => theme.colors.Blue};
`;

export const Back = styled.button`
  border-style: none;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.Orange};
  color: ${({ theme }) => theme.colors.White};

  max-width: 12.3rem;
  padding: 0.8rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const ArrowIcon = styled(Icon.ArrowLong)`
  // icon was originally pointing right
  transform: rotate(0.5turn);
  margin-right: 0.5rem;
  fill: currentColor;
`;

export const Quote = styled.blockquote`
  margin-top: 4.25rem;
  font-style: italic;
`;
