/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-useless-fragment */
import * as Logo from "public/assets/svg";
import { Typography } from "@components/styles/Typography";
import { GetPageQuery_allPage_sections_HeroSection } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import Image from "next/image";
import Link from "@components/atoms/Link";

import * as Styled from "./styles";

type Props = GetPageQuery_allPage_sections_HeroSection;

const Hero: React.FC<Props> = ({
  subTitle,
  title,
  backgroundImage,
  linksList,
  mainLink
}) => (
  <Styled.Wrapper>
    {backgroundImage?.asset?.url && (
      <Image
        src={backgroundImage?.asset?.url}
        alt="main-hero"
        layout="fill"
        objectFit="cover"
      />
    )}
    <Styled.ContentWrapper>
      <Styled.TitleWrapper>
        <Styled.TitleSection>
          <Typography variant="smallText">{title}</Typography>
          <Typography variant="mainTitle">{subTitle}</Typography>
        </Styled.TitleSection>
      </Styled.TitleWrapper>
      <Styled.NavSection>
        <Styled.NavListWrapper>
          <Styled.NavList>
            {linksList?.map((links) => (
              <Styled.ListItem key={links?._key}>
                <Link href={links?.url || "/"}>
                  <Styled.ListItemFirst variant="smallText">
                    CHECK OUT
                  </Styled.ListItemFirst>
                  <Typography variant="titleHeroMain">
                    {links?.label}
                  </Typography>
                </Link>
              </Styled.ListItem>
            ))}
          </Styled.NavList>
        </Styled.NavListWrapper>
        <Styled.NavMainWrapper href={mainLink?.url || "/"}>
          <Styled.MainNavigation>
            <Typography variant="smallText">
              {mainLink?.label}
            </Typography>
            <Styled.Arrow fontSize="0.5em" />
          </Styled.MainNavigation>
        </Styled.NavMainWrapper>
      </Styled.NavSection>
    </Styled.ContentWrapper>
  </Styled.Wrapper>
);

export default Hero;
