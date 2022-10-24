import Image from "next/image";
import { Inner } from "@components/styles/Inners";
import FormatedDate from "@components/atoms/Date";

import { Props } from "./types";
import * as Styled from "./styles";

const HeroBlogPost: React.FC<Props> = ({
  title,
  backgroundImage,
  date
}) => (
  <Styled.ImageWrapper>
    {backgroundImage?.asset?.url && (
      <Image
        src={backgroundImage?.asset?.url}
        layout="fill"
        objectFit="cover"
      />
    )}
    <Inner variant="default">
      <Styled.TitleContainer isAlt={backgroundImage === null}>
        <FormatedDate date={date} />
        <Styled.Title variant="h1">{title}</Styled.Title>
      </Styled.TitleContainer>
    </Inner>
  </Styled.ImageWrapper>
);

export default HeroBlogPost;
