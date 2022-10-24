import { StyledBox } from "@components/styles/styles";
import Image from "next/image";

import { Props } from "./types";

const DoubleImages: React.FC<Props> = ({ imageLeft, imageRight }) => (
  <StyledBox my="2.875rem">
    <StyledBox flexGrow="1" display="inline-block" mr="1.25rem">
      <Image
        src={imageLeft?.asset?.url}
        width={356}
        height={280}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
      />
    </StyledBox>
    <StyledBox flexGrow="1" display="inline-block">
      <Image
        src={imageRight?.asset?.url}
        width={356}
        height={280}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
      />
    </StyledBox>
  </StyledBox>
);

export default DoubleImages;
