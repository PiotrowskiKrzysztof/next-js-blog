/* eslint-disable camelcase */
import { StyledBox, StyledGridBox } from "@components/styles/styles";
import { GetPageQuery_allPage_sections_AboutSection } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import { Inner } from "@components/styles/Inners";
import NextLink from "next/link";
import NextImage from "next/image";

import * as Styled from "./styles";

type Props = GetPageQuery_allPage_sections_AboutSection;

const AboutUs: React.FC<Props> = ({
  title,
  descLeftRaw,
  imageLeft,
  linkLeft,
  descRightRaw,
  imageRight,
  linkRight
}) => (
  <Styled.Container>
    <Inner variant="default">
      <Styled.Category variant="smallText">ABOUT US</Styled.Category>
      <Styled.Title variant="h2">{title}</Styled.Title>
      <StyledGridBox
        gridTemplateColumns="1fr 1fr"
        gridRowGap="5rem"
        width="100%"
        gridColumnGap="1.2rem"
      >
        <StyledBox flexDirection="column" alignItems="baseline">
          <Styled.Description content={descLeftRaw} />
          <Styled.ImageWrapper>
            {imageLeft?.asset?.url && (
              <NextImage
                src={imageLeft?.asset?.url}
                width={
                  imageLeft?.asset?.metadata?.dimensions?.width ||
                  "100%"
                }
                height={
                  imageLeft?.asset?.metadata?.dimensions?.height ||
                  "100%"
                }
              />
            )}
            {linkLeft?.url && (
              <NextLink href={linkLeft.url} passHref>
                <Styled.Link>
                  {linkLeft.label}
                  <Styled.Arrow />
                </Styled.Link>
              </NextLink>
            )}
          </Styled.ImageWrapper>
        </StyledBox>
        <StyledBox flexDirection="column" alignItems="baseline">
          <Styled.Description content={descRightRaw} />
          <Styled.ImageWrapper>
            {imageRight?.asset?.url && (
              <NextImage
                src={imageRight?.asset?.url}
                width={
                  imageRight?.asset?.metadata?.dimensions?.width ||
                  "100%"
                }
                height={
                  imageRight?.asset?.metadata?.dimensions?.height ||
                  "100%"
                }
              />
            )}
            {linkRight?.url && (
              <NextLink href={linkRight?.url} passHref>
                <Styled.Link>
                  {linkRight?.label}
                  <Styled.Arrow />
                </Styled.Link>
              </NextLink>
            )}
          </Styled.ImageWrapper>
        </StyledBox>
      </StyledGridBox>
    </Inner>
  </Styled.Container>
);

export default AboutUs;
