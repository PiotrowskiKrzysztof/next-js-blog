import { Inner } from "@components/styles/Inners";
import React from "react";
import { GetPageQuery_allPage_sections_ServicesSection as ServicesProps } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import { Typography } from "@components/styles/Typography";

import * as Styled from "./styles";

const Services: React.FC<ServicesProps> = ({ title, services }) => (
  <Inner variant="default">
    <Styled.WrapperTitle>
      <Styled.Category variant="smallText">SERVICES</Styled.Category>
      <Styled.Title variant="h2" fontWeight="bold">
        {title}
      </Styled.Title>
    </Styled.WrapperTitle>
    <Styled.WrapperGrid>
      <Styled.Grid>
        {services?.map((element, index) => (
          <Styled.LinkService
            href={element?.locationLink?.url || "/"}
            key={element?._key}
          >
            <Styled.ImageText>
              <Typography variant="serviceName" fontWeight="bold">
                {element?.name}
              </Typography>
              <Typography variant="serviceNumber">
                {element?.locationNumber} Locations
              </Typography>
            </Styled.ImageText>
            {element?.locationImage?.asset?.url && (
              <Styled.ImageBox
                src={element?.locationImage?.asset?.url}
                width={index === 0 ? 730 : 350}
                height={350}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
              />
            )}
          </Styled.LinkService>
        ))}
      </Styled.Grid>
    </Styled.WrapperGrid>
  </Inner>
);

export default Services;
