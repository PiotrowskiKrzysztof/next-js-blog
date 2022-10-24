import { Typography } from "@components/styles/Typography";
import styled from "styled-components";
import { ArrowLong } from "public/assets/svg";
import { Field } from "formik";

import { StyledNewsletterProps } from "./types";

export const Wrapper = styled.div`
  margin-top: 6rem;
  display: flex;
`;

export const NewsletterPart = styled.div<StyledNewsletterProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.LightGrey2};
  display: ${({ isForm }) => (isForm ? "flex" : "initial")};
`;

export const LeftInner = styled.div`
  margin-left: auto;
  max-width: calc(
    ${({ theme }) => theme.innerStyles.default.maxWidth} / 2
  );
  width: 100%;
  padding: 0 1em;
`;

export const Newsletter = styled.div<StyledNewsletterProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ isSuccess }) => (isSuccess ? "2rem" : "0")};
`;

export const NewsletterMain = styled.div`
  margin-top: 0.9rem;
`;

export const NewsletterTitle = styled(Typography)``;

export const NewsletterTitleEnd = styled.span`
  color: ${({ theme }) => theme.colors.Orange};
`;

export const NewsletterDiscription = styled(Typography)`
  margin-top: 0.9rem;
  color: ${({ theme }) => theme.colors.LightGrey};
`;

export const Form = styled.form`
  width: 100%;
  max-width: 25rem;
  margin-top: 0.9rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FormMessage = styled(Field).withConfig({
  shouldForwardProp: (prop) => {
    if (typeof prop === "string") {
      return !["isError"].includes(prop);
    }

    return true;
  }
})<StyledNewsletterProps>`
  padding: 1rem 0.8rem;
  margin-top: 0.9rem;
  height: 5rem;
  resize: none;
  outline: 0;
  width: 100%;
  border: ${({ isError, theme }) =>
    isError ? `1px solid ${theme.colors.Red}` : "none"};
  color: ${({ isError, theme }) =>
    isError ? theme.colors.Red : theme.colors.Black};
`;

export const FormEmail = styled(Field).withConfig({
  shouldForwardProp: (prop) => {
    if (typeof prop === "string") {
      return !["isError"].includes(prop);
    }

    return true;
  }
})<StyledNewsletterProps>`
  padding: 1rem 0.8rem;
  margin-top: 0.9rem;
  height: 1rem;
  outline: 0;
  width: 100%;
  border: ${({ isError, theme }) =>
    isError ? `1px solid ${theme.colors.Red}` : "none"};
  color: ${({ isError, theme }) =>
    isError ? theme.colors.Red : theme.colors.Black};
`;

export const ErrorMessage = styled(Typography)`
  color: ${({ theme }) => theme.colors.Red};
`;

export const FormSubmit = styled.button<StyledNewsletterProps>`
  margin-top: 0.9rem;
  border: none;
  color: ${({ theme }) => theme.colors.White};
  background-color: ${({ theme, isError }) =>
    isError ? theme.colors.LightGrey : theme.colors.Orange};
  cursor: pointer;

  display: inline-flex;
  padding: 0.9rem;
  gap: 0.5rem;
`;

export const ArrowIcon = styled(ArrowLong)`
  fill: currentColor;
  font-size: 0.5em;
`;

export const SuccessTitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.Lime};
`;

export const SuccessDescription = styled(Typography)`
  color: ${({ theme }) => theme.colors.MediumGrey};
`;

export const WrapperLoader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
