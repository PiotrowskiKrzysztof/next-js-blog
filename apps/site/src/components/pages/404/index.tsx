import Image from "next/image";
import React from "react";
import errorImage from "public/assets/images/404.png";
import { useRouter } from "next/router";
import { Typography } from "@components/styles/Typography";

import * as Styled from "./styles";

const Custom404: React.FC = () => {
  const router = useRouter();

  return (
    <Styled.Wrapper>
      <Styled.Information>
        <Typography variant="mediumTitle" fontWeight="bold">
          <Styled.TitleHighlight>Woops!</Styled.TitleHighlight> You
          have moved so fast and got lost...
        </Typography>
        <Styled.Description variant="newsletterError">
          The page you were looking for does not exist. Please check
          your URL for spellings or capitalizations. If you are having
          troube locating your destination try to visit the{" "}
          <Styled.Home href="/">Home Page</Styled.Home>.
        </Styled.Description>
        <Styled.Back onClick={() => router.back()}>
          <Styled.ArrowIcon fontSize="0.5em" />
          <Typography variant="tags">GO BACK</Typography>
        </Styled.Back>
        <Styled.Quote>
          <Typography variant="largeQuote">
            “Not all those who wander are lost.”
            <br />― J.R.R. Tolkien,
          </Typography>
        </Styled.Quote>
      </Styled.Information>
      <Image
        src={errorImage}
        alt="404"
        height="100%"
        objectFit="cover"
        width="100%"
        layout="responsive"
        objectPosition="center"
      />
    </Styled.Wrapper>
  );
};

export default Custom404;
