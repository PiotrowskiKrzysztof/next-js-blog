import { GetAllBlogs_allBlogPost as ArticleProps } from "@components/pages/blog/operationTypes/GetAllBlogs";
import Link from "@components/atoms/Link";
import { StyledBox } from "@components/styles/styles";
import Image from "next/image";
import BlockContent from "@components/misc/BlockContent";

import * as Styled from "./styles";

const BlogPost: React.FC<ArticleProps> = ({
  title,
  date,
  descRaw,
  slug,
  backgroundImage
}) => (
  <Link href={`/blog/${slug?.current}`}>
    <Styled.Content
      flexDirection="column"
      isAlt={backgroundImage === null}
    >
      {backgroundImage?.asset?.url && (
        <StyledBox mb="1.75rem" display="block">
          <Image
            src={backgroundImage?.asset?.url}
            width={733}
            height={400}
            layout="responsive"
          />
        </StyledBox>
      )}
      <Styled.Date date={date} />
      <Styled.Title variant="h6">{title}</Styled.Title>
      <StyledBox mb="1.75rem">
        <BlockContent content={descRaw} />
      </StyledBox>
      <Styled.ArrowIcon fill="currentColor" />
    </Styled.Content>
  </Link>
);

export default BlogPost;
