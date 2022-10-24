import { NextPage } from "next";
import React from "react";
import { Inner } from "@components/styles/Inners";

const InnersPage: NextPage = () => (
  <div>
    <Inner variant="narrow">Narrow Inner</Inner>
    <Inner variant="default">Default Inner</Inner>
    <Inner variant="wide">Wide Inner</Inner>
  </div>
);

export default InnersPage;
