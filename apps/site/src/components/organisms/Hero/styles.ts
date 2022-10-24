import Link from "@components/atoms/Link";
import { Typography } from "@components/styles/Typography";
import { ArrowLong } from "public/assets/svg";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: block;
  height: 100vh;
`;

export const ContentWrapper = styled.div``;

export const TitleWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 15rem;
`;

export const TitleSection = styled.div`
  color: ${({ theme }) => theme.colors.White};
  margin-right: 40%;
  padding-left: 15%;
`;

export const NavSection = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 10rem;
  height: 7.5rem;
  border-radius: 0 20px 0 0;
  display: grid;
  grid-template-columns: 5fr 1.5fr;
`;

export const NavListWrapper = styled.div`
  padding-left: 15%;
  padding-right: 5.5rem;
`;

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  position: relative;
  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.Orange};
  }
  &:not(:last-of-type) {
    padding-right: 8rem;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      //slash icon
      background-color: ${({ theme }) => theme.colors.SlashIcom};
      transform: rotate(20deg) translateY(-50%);
      height: 4.375rem;
      width: 0.063rem;
    }
  }
`;

export const ListItemFirst = styled(Typography)`
  color: ${({ theme }) => theme.colors.MediumGrey};
`;

export const Arrow = styled(ArrowLong)`
  margin-left: 0.5rem;
  transition: 0.5s;
`;

export const NavMainWrapper = styled(Link)`
  background-color: ${({ theme }) => theme.colors.Orange};
  border-radius: 0 1rem 0 0;
  min-width: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${Arrow} {
      margin-left: 1.5rem;
    }
  }
`;

export const MainNavigation = styled.div`
  color: ${({ theme }) => theme.colors.White};
  fill: currentColor;
  display: flex;
  align-items: center;
`;
