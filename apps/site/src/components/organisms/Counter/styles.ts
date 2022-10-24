import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 6rem;
`;

export const TitleWrapper = styled.div`
  margin-right: 50%;
`;

export const CounterListWrapper = styled.div`
  padding-top: 3rem;
`;

export const CounterList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const CounterListItem = styled.li``;

export const LabelListItem = styled.div`
  color: ${({ theme }) => theme.colors.MediumGrey};
  padding-bottom: 1rem;
`;
