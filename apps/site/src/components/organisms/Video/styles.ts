import styled, { css } from "styled-components";
import { Play } from "public/assets/svg";
import { StyledBox } from "@components/styles/styles";

export const videoCommonStyles = css`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const FullWidthContainer = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
`;

export const Content = styled.div`
  position: relative;
  padding-top: 48.6%;
  overflow: hidden;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.Black};
`;

export const PlayIcon = styled(Play)`
  position: relative;
  z-index: 1;
  width: 5.313rem;
  height: 5.313rem;
  transition: 0.5s;
`;

export const PosterContainer = styled.button`
  ${videoCommonStyles};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  border: 0;
  background-color: transparent;
  padding: 0;
  &:hover {
    ${PlayIcon} {
      width: 6.5rem;
      height: 6.5rem;
    }
  }
`;

export const SpinnerContainer = styled(StyledBox)`
  ${videoCommonStyles};
  z-index: 1;
`;

export const IFrame = styled.iframe`
  ${videoCommonStyles};
`;

export const Video = styled.video`
  ${videoCommonStyles};
`;
