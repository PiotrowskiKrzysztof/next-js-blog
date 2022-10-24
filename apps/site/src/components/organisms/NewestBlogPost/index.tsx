import FormatedDate from "@components/atoms/Date";
import { GetAllBlogs_allBlogPost as ArticleProps } from "@components/pages/blog/operationTypes/GetAllBlogs";
import { StyledBox } from "@components/styles/styles";
import Image from "next/image";
import Link from "@components/atoms/Link";

import * as Styled from "./styles";

const NewestBlogPost: React.FC<ArticleProps> = ({
  title,
  date,
  backgroundImage,
  slug
}) => (
  <Link href={`/blog/${slug?.current}`}>
    <Styled.Container>
      {backgroundImage?.asset?.url && (
        <Image
          src={backgroundImage?.asset?.url}
          alt="background image"
          width={1440}
          height={600}
          layout="responsive"
        />
      )}
      <Styled.Content>
        <Styled.Inner variant="default">
          <StyledBox
            height="100%"
            flexDirection="column"
            py="6rem"
            justifyContent="space-between"
          >
            <FormatedDate date={date} />
            <Styled.Title variant="h1">{title}</Styled.Title>

            <Styled.LinkContent>
              Read More <Styled.ArrowIcon fill="currentColor" />
            </Styled.LinkContent>
          </StyledBox>
        </Styled.Inner>
      </Styled.Content>
    </Styled.Container>
  </Link>
);

export default NewestBlogPost;
