import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inner } from "@components/styles/Inners";
import Image from "next/image";
import { StyledBox } from "@components/styles/styles";
import BlockContent from "@components/misc/BlockContent";
import { useRef, useCallback } from "react";
import { ArrowShort } from "public/assets/svg";

import * as Styled from "./styles";
import { settings } from "./consts";
import { TestimonialSectionProps } from "./types";

const Testimonials: React.FC<TestimonialSectionProps> = ({
  titleRaw,
  listTestimonials
}) => {
  const ref = useRef<Carousel | null>(null);

  const nextSlide = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (ref && ref.current) {
        ref.current.slickNext();
      }
    },
    []
  );

  const prevSlide = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (ref && ref.current) {
        ref.current.slickPrev();
      }
    },
    []
  );

  return (
    <Styled.Container>
      <Inner variant="default">
        <StyledBox width="100%">
          <StyledBox
            flexDirection="column"
            width="34%"
            justifyContent="space-between"
          >
            <Styled.Category fontSize="fontSize14" lineHeight="1.1em">
              TESTIMONIALS
            </Styled.Category>
            <BlockContent content={titleRaw} />
            <StyledBox>
              <Styled.Arrow type="button" onClick={prevSlide} isPrev>
                <ArrowShort fill="currentColor" />
              </Styled.Arrow>
              <Styled.Arrow type="button" onClick={nextSlide}>
                <ArrowShort fill="currentColor" />
              </Styled.Arrow>
            </StyledBox>
          </StyledBox>
          <Styled.Wrapper width="64%">
            <Carousel ref={ref} {...settings}>
              {listTestimonials?.map((testimonial) => (
                <StyledBox key={testimonial?.key}>
                  <Styled.Testimonial
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <div>
                      <Styled.SubTitle
                        fontFamily="header"
                        fontSize="fontSize16"
                        fontWeight="bold"
                        lineHeight="1.25em"
                      >
                        {testimonial?.title}
                      </Styled.SubTitle>
                      <BlockContent content={testimonial?.descRaw} />
                    </div>
                    {testimonial?.authorImage?.asset?.url && (
                      <StyledBox alignItems="center">
                        <Image
                          src={testimonial?.authorImage?.asset?.url}
                          width={
                            testimonial?.authorImage?.asset?.metadata
                              ?.dimensions?.width || 40
                          }
                          height={
                            testimonial?.authorImage?.asset?.metadata
                              ?.dimensions?.height || 40
                          }
                        />
                        <Styled.Author
                          fontSize="fontSize14"
                          lineHeight="1.1em"
                        >
                          {testimonial?.authorName}
                        </Styled.Author>
                      </StyledBox>
                    )}
                  </Styled.Testimonial>
                </StyledBox>
              ))}
            </Carousel>
          </Styled.Wrapper>
        </StyledBox>
      </Inner>
    </Styled.Container>
  );
};

export default Testimonials;
