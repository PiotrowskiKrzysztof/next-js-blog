/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-useless-fragment */
import Counter from "@components/organisms/Counter";
import Hero from "@components/organisms/Hero";
import AboutUs from "@components/organisms/AboutUs";
import Slider from "@components/organisms/Slider";
import Testimonials from "@components/organisms/Testimonials";
import { GetPageQuery_allPage } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import React from "react";
import Centered from "@components/organisms/Centered";
import Newsletter from "@components/organisms/Newsletter";
import Services from "@components/organisms/Services";
import Video from "@components/organisms/Video";

interface Props {
  sections: GetPageQuery_allPage["sections"];
}

const Sections: React.FC<Props> = ({ sections }) => (
  <>
    {sections?.map((section) => {
      switch (section?.__typename) {
        case "SliderSection": {
          return <Slider {...section} />;
        }
        case "HeroSection": {
          return <Hero {...section} />;
        }
        case "CounterSection": {
          return <Counter {...section} />;
        }
        case "AboutSection": {
          return <AboutUs {...section} />;
        }
        case "CenteredSection": {
          return <Centered {...section} />;
        }
        case "NewsletterSection": {
          return <Newsletter {...section} />;
        }
        case "TestimonialsSection": {
          return <Testimonials {...section} />;
        }
        case "ServicesSection": {
          return <Services {...section} />;
        }
        case "Video": {
          return <Video {...section} />;
        }
        default:
          return null;
      }
    })}
  </>
);

export default Sections;
