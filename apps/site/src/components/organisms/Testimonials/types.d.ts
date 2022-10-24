/* eslint-disable camelcase */
export interface StyledTestimonialsArrowProps {
  isPrev?: boolean;
}

export interface TestimonialSectionProps {
  titleRaw?: SanityGQLJSON | null;
  listTestimonials?:
    | (GetPageQuery_allPage_sections_TestimonialsSection_listTestimonials | null)[]
    | (GetBlogPostQuery_allBlogPost_testimonials_listTestimonials | null)[]
    | null;
}
