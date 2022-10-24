import styled from "styled-components";

import { StyledHeaderProps } from "./types";

export const Wrapper = styled.header<StyledHeaderProps>`
  position: fixed;
  top: 0;
  height: 40px;
  width: 100%;
  color: ${({ isLight, theme }) =>
    isLight ? theme.colors.Black : theme.colors.White};
  background-color: ${({ isLight, theme }) =>
    isLight ? theme.colors.White : "transparent"};
  display: flex;
  align-items: center;
  z-index: 2;
  padding: 2.625rem 0;
`;

export const Title = styled.div``;

export const List = styled.ul``;

export const ListItem = styled.li<StyledHeaderProps>`
  display: table;
  float: left;
  padding: 0 10px;
  margin-left: 2rem;
  color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.colors.Orange : "inherit"};
  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.Orange};
  }
`;

export const Dot = styled.div<StyledHeaderProps>`
  width: 0.313rem;
  height: 0.313rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.Orange};
  ${({ isHighlighted }) =>
    isHighlighted
      ? `display: block;
         margin-left: auto;
         margin-right: auto;`
      : `display: none`};
`;
