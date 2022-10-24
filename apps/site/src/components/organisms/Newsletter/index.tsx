import { GetPageQuery_allPage_sections_NewsletterSection as NewsletterProps } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import React, { useState } from "react";
import { Typography } from "@components/styles/Typography";
import Image from "next/image";
import { Formik } from "formik";
import * as Yup from "yup";
import Loader from "@components/atoms/Loader";
import theme from "@setup/theme";

import * as Styled from "./styles";

const Newsletter: React.FC<NewsletterProps> = ({
  backgroundImage,
  emailPlaceholder,
  messagePlaceholder
}) => {
  // if form was submitted
  const [success, setSuccess] = useState(false);

  return (
    <Formik
      initialValues={{
        message: "",
        email: ""
      }}
      onSubmit={async (event) => {
        const { message, email } = event;

        await fetch("/api/send-email", {
          method: "POST",
          body: JSON.stringify({
            message,
            email
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });

        setSuccess(true);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is not valid")
          .required("Email is required"),
        message: Yup.string()
          .max(
            200,
            "We have a limitation of 200 characters for the message."
          )
          .required("Message is required")
      })}
    >
      {({ errors, handleChange, handleSubmit, isSubmitting }) => (
        <Styled.Wrapper>
          <Styled.NewsletterPart isForm>
            {isSubmitting ? (
              <Styled.WrapperLoader>
                <Loader
                  borderColor={`${theme.colors.Black} transparent`}
                />
              </Styled.WrapperLoader>
            ) : (
              <Styled.LeftInner>
                {success ? (
                  <Styled.Newsletter isSuccess>
                    <Styled.SuccessTitle variant="newsletterTitle">
                      Success!
                    </Styled.SuccessTitle>
                    <Styled.SuccessDescription variant="formText">
                      You have been successfully added to the
                      newsletter.
                      <br />
                      Check your email for more information
                    </Styled.SuccessDescription>
                  </Styled.Newsletter>
                ) : (
                  <Styled.Newsletter>
                    <Styled.NewsletterMain>
                      <Styled.NewsletterTitle variant="newsletterTitle">
                        Want to stay in{" "}
                        <Styled.NewsletterTitleEnd>
                          touch?
                        </Styled.NewsletterTitleEnd>
                      </Styled.NewsletterTitle>
                      <Styled.NewsletterDiscription variant="smallText">
                        Do you have some questions? Feel free to
                        contact us.
                      </Styled.NewsletterDiscription>
                    </Styled.NewsletterMain>

                    <Styled.Form onSubmit={handleSubmit}>
                      <Styled.FormMessage
                        component="textarea"
                        name="message"
                        placeholder={
                          messagePlaceholder || "Your message"
                        }
                        onChange={handleChange}
                        isError={!!errors.message}
                      />
                      {errors.message && (
                        <Styled.ErrorMessage variant="newsletterError">
                          {errors.message}
                        </Styled.ErrorMessage>
                      )}
                      <Styled.FormEmail
                        name="email"
                        placeholder={emailPlaceholder || "Your email"}
                        onChange={handleChange}
                        isError={!!errors.email}
                      />
                      {errors.email && (
                        <Styled.ErrorMessage variant="newsletterError">
                          {errors.email}
                        </Styled.ErrorMessage>
                      )}
                      <Styled.FormSubmit
                        type="submit"
                        disabled={isSubmitting}
                        isError={!!errors.email || !!errors.message}
                      >
                        <Typography variant="smallText" as="span">
                          SIGN ME IN
                        </Typography>
                        <Styled.ArrowIcon />
                      </Styled.FormSubmit>
                    </Styled.Form>
                  </Styled.Newsletter>
                )}
              </Styled.LeftInner>
            )}
          </Styled.NewsletterPart>
          <Styled.NewsletterPart>
            {backgroundImage?.asset?.url && (
              <Image
                src={backgroundImage?.asset?.url}
                alt="newsletter"
                width={
                  backgroundImage?.asset?.metadata?.dimensions
                    ?.width || "0"
                }
                height={
                  backgroundImage?.asset?.metadata?.dimensions
                    ?.height || "0"
                }
                layout="responsive"
              />
            )}
          </Styled.NewsletterPart>
        </Styled.Wrapper>
      )}
    </Formik>
  );
};

export default Newsletter;
