import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import page from "./page";
import heroSection from "./heroSection";
import link from "./link";
import sliderSection from "./sliderSection";
import counterSection from "./counterSection";
import counter from "./counter";
import aboutSection from "./aboutSection";
import testimonial from "./testimonial";
import testimonialsSection from "./testimonialsSection";
import centeredSection from "./centeredSection";
import newsletterSection from "./newsletterSection";
import blockContent from "./blockContent";
import blockContentLink from "./blockContentLink";
import blogPost from "./blogPost";
import doubleImages from "./doubleImages";
import video from "./video";
import servicesSection from "./servicesSection";
import blockContentBlog from "./blockContentBlog";
import service from "./service";
import tag from "./tag";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    page,
    heroSection,
    link,
    sliderSection,
    counterSection,
    counter,
    aboutSection,
    testimonial,
    testimonialsSection,
    centeredSection,
    newsletterSection,
    blockContentLink,
    blockContent,
    blogPost,
    doubleImages,
    video,
    servicesSection,
    blockContentBlog,
    service,
    tag
  ])
});
