import BlockContent from "@components/misc/BlockContent";
import { GetPageQuery_allPage_sections_CenteredSection as CenteredTextQuery } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import { Inner } from "@components/styles/Inners";
import Image from "next/image";

import * as Styled from "./styles";

const Centered: React.FC<CenteredTextQuery> = ({
  backgroundImage,
  titleRaw
}) => (
  <Styled.Wrapper>
    <Styled.ImageGrayscale />
    <Styled.WrapperImage>
      {backgroundImage?.asset?.url && (
        <Image
          src={backgroundImage?.asset?.url}
          alt="centered-text"
          width={
            backgroundImage?.asset?.metadata?.dimensions?.width || "0"
          }
          height={
            backgroundImage?.asset?.metadata?.dimensions?.height ||
            "0"
          }
          layout="responsive"
        />
      )}
    </Styled.WrapperImage>
    <Styled.TitleWrapper>
      <Inner variant="default">
        <BlockContent content={titleRaw} />
      </Inner>
    </Styled.TitleWrapper>
  </Styled.Wrapper>
);

export default Centered;
