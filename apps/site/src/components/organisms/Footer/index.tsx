import { StyledBox } from "@components/styles/styles";
import { Inner } from "@components/styles/Inners";
import Link from "@components/atoms/Link";
import * as Logo from "public/assets/svg";

import { data } from "./consts";
import * as Styled from "./styles";

const Footer = () => (
  <>
    <Inner variant="default">
      <StyledBox
        justifyContent="space-between"
        pt="6.2rem"
        pb="4.4rem"
      >
        <Styled.Box>
          <Styled.Title variant="smallText" fontWeight="bold">
            Need Travelsy Help?
          </Styled.Title>
          <Styled.NewLine>
            Got Questions? Call us 24/7!
          </Styled.NewLine>
          <Styled.NewLine>
            <Link href="tel:254716909815">
              Call Us: +254 716909 815
            </Link>
          </Styled.NewLine>
          <Styled.NewLine>
            <Link href="mailto:info@travelsy.com">
              Email Us: info@travelsy.com
            </Link>
          </Styled.NewLine>
        </Styled.Box>
        {data.map((element) => (
          <Styled.Box key={element.title}>
            <Styled.Title variant="smallText" fontWeight="bold">
              Need Travelsy Help?
            </Styled.Title>
            {element.content.map((subElement) => (
              <Styled.NewLine key={subElement.text}>
                <Link href={subElement.href}>{subElement.text}</Link>
              </Styled.NewLine>
            ))}
          </Styled.Box>
        ))}
        <Styled.Box>
          <Styled.Title variant="smallText" fontWeight="bold">
            Need Travelsy Help?
          </Styled.Title>
          <Styled.NewLine>
            2nd Floor, Fedha Plaza, Westlands, Nairobi, Kenya.
          </Styled.NewLine>
          <Styled.NewLine>
            P.O Box 7231-00300 Nairobi, Kenya
          </Styled.NewLine>
          <StyledBox
            width="40%"
            justifyContent="space-between"
            mt="1.2rem"
          >
            <Link href="/twitter">
              <Logo.Twitter />
            </Link>
            <Link href="/instagram">
              <Logo.Instagram />
            </Link>
            <Link href="/youtube">
              <Logo.Youtube />
            </Link>
          </StyledBox>
        </Styled.Box>
      </StyledBox>
    </Inner>
    <Styled.FooterAside>
      <Inner variant="default">
        <StyledBox justifyContent="space-between" width="100%">
          <p>Copyright © 2019 Travelsy Ltd. All rights reserved</p>
          <p>Made in Kenya by Ralak</p>
        </StyledBox>
      </Inner>
    </Styled.FooterAside>
  </>
);

export default Footer;
