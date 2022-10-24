/* eslint-disable camelcase */
import { GetPageQuery_allPage_sections_SliderSection as SliderSectionProps } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import { Inner } from "@components/styles/Inners";
import { StyledGridBox } from "@components/styles/styles";
import Carousel, { Settings } from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowShort } from "public/assets/svg";

import * as Styled from "./styles";
import { ArrowProps } from "./types";

const SampleNextArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;

  return (
    <Styled.Arrow onClick={onClick}>
      <ArrowShort fill="currentColor" />
    </Styled.Arrow>
  );
};

const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;

  return (
    <Styled.Arrow onClick={onClick} isPrev>
      <ArrowShort fill="currentColor" />
    </Styled.Arrow>
  );
};

const Slider: React.FC<SliderSectionProps> = ({
  title,
  descRaw,
  imagesList
}) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // eslint-disable-next-line react/no-unstable-nested-components
    appendDots: (dots) => (
      <Styled.AppendDots>
        <Styled.Dots> {dots}</Styled.Dots>
      </Styled.AppendDots>
    ),
    // eslint-disable-next-line react/no-unstable-nested-components
    customPaging: () => <Styled.Paging />
  };

  return (
    <Styled.Slider>
      <Inner variant="default">
        <StyledGridBox width="70%" gridTemplateColumns="1fr 1fr">
          <Styled.Title variant="h4">{title}</Styled.Title>
          <Styled.Description content={descRaw} />
        </StyledGridBox>
        <Carousel {...settings}>
          {imagesList?.map((image) => (
            <Styled.ImageBox key={image?._key}>
              {image?.asset?.url && (
                <Image
                  src={image?.asset?.url}
                  width="733px"
                  height="475px"
                />
              )}
            </Styled.ImageBox>
          ))}
        </Carousel>
      </Inner>
    </Styled.Slider>
  );
};

export default Slider;
