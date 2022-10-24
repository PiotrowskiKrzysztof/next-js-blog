import { Inner } from "@components/styles/Inners";
import { StyledBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import * as Styled from "./styles";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ isLight, items }) => {
  const { asPath } = useRouter();

  return (
    <Styled.Wrapper {...{ isLight }}>
      <Inner variant="wide">
        <StyledBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Styled.Title>
            <Typography variant="smallText" fontWeight="bold">
              <Link href="/">Travelsy</Link>
            </Typography>
          </Styled.Title>
          <StyledBox>
            <Styled.List>
              {items.map(({ label, href }) => {
                const isHighlighted = asPath.startsWith(href);

                return (
                  <Styled.ListItem key={label} {...{ isHighlighted }}>
                    <Typography variant="smallText">
                      <Link {...{ href }}>{label}</Link>
                    </Typography>
                    <Styled.Dot {...{ isHighlighted }} />
                  </Styled.ListItem>
                );
              })}
            </Styled.List>
          </StyledBox>
        </StyledBox>
      </Inner>
    </Styled.Wrapper>
  );
};

export default Header;
