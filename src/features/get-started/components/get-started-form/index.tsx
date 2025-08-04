"use client";
import { contactUsFormFields } from "./get-started-form.data";
import { useGetStarted } from "./use-get-started-form";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { CommonLoadingButton } from "@/components/buttons/common-loading-button";
import { CommonCircularProgress } from "@/components/progress-bars/common-circular-progress";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { Box, Container } from "@mui/material";
import { CustomText } from "@/components/text/custom-text";

const GetStartedForm = () => {
  const { methods, handleSubmit, submitContactUs, isLoading } = useGetStarted();

  return (
    <Container>
      <HeadingText
        variant="h4"
        fontWeight="fontWeightMedium"
        color="common.white"
      >
        Create Your Account
      </HeadingText>
      <SubHeadingText
        variant="subtitle2"
        color="grey.600"
        fontWeight="fontWeightThin"
        customStyles={{ py: 2 }}
      >
        Join us and unlock full access to our platform.
      </SubHeadingText>
      <Box>
        <SubHeadingText variant="subtitle2" color="grey.600">
          Fast & Secure
        </SubHeadingText>
        <SubHeadingText
          variant="subtitle2"
          color="grey.600"
          fontWeight="fontWeightThin"
        >
          Register now to explore powerful features, manage your profile, and
          get started in just a few clicks.
        </SubHeadingText>
      </Box>
      <br />
      <CustomFormProvider
        methods={methods}
        onSubmit={handleSubmit(submitContactUs)}
      >
        <FormGrid formFieldsList={contactUsFormFields} size="large" />
        <br />
        <CommonLoadingButton
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          loading={isLoading}
          disabled={isLoading}
          customStyles={{ p: "1rem 1.5rem", fontSize: 20, borderRadius: 12 }}
        >
          {isLoading ? <CommonCircularProgress /> : "Submit"}
        </CommonLoadingButton>
        <CustomText
          variant="body1"
          color="grey.600"
          fontWeight="fontWeightThin"
          customStyles={{ textAlign: "center", marginTop: 2 }}
        >
          By submitting this form, Your journey with Real Money begins now.
          We’ll reach out soon to support your success
        </CustomText>
      </CustomFormProvider>
    </Container>
  );
};

export default GetStartedForm;
