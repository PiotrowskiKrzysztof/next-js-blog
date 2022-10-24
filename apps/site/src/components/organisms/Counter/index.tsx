/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-useless-fragment */
import { GetPageQuery_allPage_sections_CounterSection } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import React from "react";
import CountUp from "react-countup";
import { Inner } from "@components/styles/Inners";
import { Typography } from "@components/styles/Typography";

import * as Styled from "./styles";

type Props = GetPageQuery_allPage_sections_CounterSection;

const Counter: React.FC<Props> = ({ counterList, title }) => (
  <Styled.Wrapper>
    <Inner variant="default">
      <Styled.TitleWrapper>
        <Typography variant="counterTitle" fontWeight="bold">
          {title}
        </Typography>
      </Styled.TitleWrapper>
      <Styled.CounterListWrapper>
        <Styled.CounterList>
          {counterList?.map((list) => (
            <Styled.CounterListItem key={list?._key}>
              <Styled.LabelListItem>
                <Typography variant="smallText">
                  {list?.label}
                </Typography>
              </Styled.LabelListItem>
              <Typography variant="h2" fontWeight="bold">
                <CountUp
                  end={list?.value || 0}
                  duration={2}
                  enableScrollSpy
                />
                +
              </Typography>
            </Styled.CounterListItem>
          ))}
        </Styled.CounterList>
      </Styled.CounterListWrapper>
    </Inner>
  </Styled.Wrapper>
);

export default Counter;
