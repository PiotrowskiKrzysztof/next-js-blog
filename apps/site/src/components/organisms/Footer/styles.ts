import { Typography } from "@components/styles/Typography";
import styled from "styled-components";

export const Box = styled.ul`
  flex-basis: 20%;
`;

export const NewLine = styled.li`
  color: ${({ theme }) => theme.colors.Grey};
  font-size: ${({ theme }) => theme.fontSizes.fontSize14};
  margin-bottom: 0.6rem;
  line-height: 1.5em;
`;

export const FooterAside = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontSize12};
  color: ${({ theme }) => theme.colors.Black};
  border-top: 1px solid ${({ theme }) => theme.colors.LightGrey};
  padding: 3.1rem 0;
`;

export const Footer = styled.div``;

export const Title = styled(Typography)`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.Black};
`;
