import { NextPage } from "next";
import React from "react";
import { Typography } from "@components/styles/Typography";

const TypographyPage: NextPage = () => (
  <div>
    <Typography variant="mainTitle" fontWeight="bold">
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography variant="h1" fontWeight="bold">
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography variant="h2">
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography variant="h3">
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography variant="h4">
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography variant="h5">
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography variant="h6">
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography variant="paragraph">
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography variant="smallText" fontWeight="bold">
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography variant="formText">
      The quick brown fox jumps over the lazy dog.
    </Typography>
  </div>
);

export default TypographyPage;
