import styled from "styled-components";
import { Typography } from "@components/styles/Typography";

export const MainTitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.Black};
  position: relative;
  width: 60%;
  text-align: center;
  &:after {
    content: "";
    width: 3.5rem;
    height: 0.313rem;
    background-color: ${({ theme }) => theme.colors.Orange};
    position: absolute;
    bottom: -1rem;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;
