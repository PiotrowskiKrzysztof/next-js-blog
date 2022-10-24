import styled from "styled-components";
import { Typography } from "@components/styles/Typography";

export const SubTitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.MediumGrey};
  position: relative;
  &:before {
    content: "";
    width: 4.625rem;
    height: 0.313rem;
    background-color: ${({ theme }) => theme.colors.Orange};
    position: absolute;
    bottom: 3rem;
  }
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.Black};
  margin-top: 3.125rem;
  text-align: center;
`;

export const LinkContent = styled.a`
  width: 10.5rem;
  height: 3.125rem;
  background-color: ${({ theme }) => theme.colors.Orange};
  color: ${({ theme }) => theme.colors.White};
  border: 0;
  cursor: pointer;
  margin-top: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transition: 0.5s;
    width: 1.25rem;
    height: 0.375rem;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.Black};
  }
`;
