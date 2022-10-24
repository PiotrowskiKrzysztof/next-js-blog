import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageGrayscale = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.GrayScale};
  z-index: 1;
`;

export const WrapperImage = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.colors.White};
  z-index: 2;
`;
