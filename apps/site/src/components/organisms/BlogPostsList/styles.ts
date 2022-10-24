import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.Orange};
  color: ${({ theme }) => theme.colors.White};
  padding: 1.375rem 4.625rem;
  cursor: pointer;
  transition: 0.5s;
  &: hover {
    color: ${({ theme }) => theme.colors.Black};
  }
`;
