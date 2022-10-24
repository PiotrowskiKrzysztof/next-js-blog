import { Inner } from "@components/styles/Inners";
import { StyledBox } from "@components/styles/styles";

import * as Styled from "./styles";
import { TitleParam } from "./types";

const Title: React.FC<TitleParam> = ({ title }) => (
  <div>
    <Inner variant="default">
      <StyledBox justifyContent="center" pt="11.25rem" pb="4rem">
        <Styled.MainTitle variant="h2">
          {title || "Stories to inspire your journey"}
        </Styled.MainTitle>
      </StyledBox>
    </Inner>
  </div>
);

export default Title;
