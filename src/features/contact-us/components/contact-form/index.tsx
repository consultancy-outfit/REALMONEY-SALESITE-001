"use client";
import { contactUsFormFields } from "./contact-form.data";
import { useContactUs } from "./use-contact-form";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { CommonCard } from "@/components/cards/common-card";
import { CommonLoadingButton } from "@/components/buttons/common-loading-button";
import { CommonCircularProgress } from "@/components/progress-bars/common-circular-progress";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";

const ContactForm = () => {
  const { methods, handleSubmit, submitContactUs, isLoading } = useContactUs();

  return (
    <CommonCard
      paddingX={{ xs: 1.5, sm: 2, md: 4 }}
      boxShadow="none"
      customStyles={{
        pt: { md: 8, sm: 4, xs: 2 },
        m: 6,
        backgroundColor: "common.bg_dull",
        borderRadius: 15,
      }}
    >
      <HeadingText
        variant="h4"
        fontWeight="fontWeightMedium"
        color="common.white"
        customStyles={{ textAlign: "center" }}
      >
        Tell us about yourself and we&apos;ll get back to you shortly.
      </HeadingText>
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
          onClick={() => handleSubmit(submitContactUs)}
          fullWidth
        >
          {isLoading ? <CommonCircularProgress /> : "Contact Sales"}
        </CommonLoadingButton>
        <SubHeadingText
          variant="subtitle1"
          marginTop={3}
          color="grey.600"
          fontWeight="fontWeightThin"
        >
          By submitting this form, you agree to FA Global Terms of Service and
          Privacy Policy.
        </SubHeadingText>
      </CustomFormProvider>
    </CommonCard>
  );
};

export default ContactForm;
