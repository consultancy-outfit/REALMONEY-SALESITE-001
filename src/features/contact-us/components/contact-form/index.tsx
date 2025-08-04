"use client";
import { contactUsFormFields } from "./contact-form.data";
import { useContactUs } from "./use-contact-form";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { CommonCard } from "@/components/cards/common-card";
import { CommonLoadingButton } from "@/components/buttons/common-loading-button";
import { CommonCircularProgress } from "@/components/progress-bars/common-circular-progress";
import { HeadingText } from "@/components/text/heading-text";
import { CustomText } from "@/components/text/custom-text";

const ContactForm = () => {
  const { methods, handleSubmit, submitContactUs, isLoading } = useContactUs();

  return (
    <CommonCard
      paddingX={{ xs: 1.5, sm: 2, md: 4 }}
      boxShadow="none"
      customStyles={{
        pt: { md: 4, xs: 2 },
        m: { md: 6, xs: 1 },
        maxWidth: 750,
      }}
    >
      <HeadingText
        variant="h4"
        fontWeight="fontWeightMedium"
        color="common.white"
        customStyles={{ width: { md: "70%", xs: "100%" } }}
      >
        Get in Touch with Real Money
      </HeadingText>
      <CustomText
        variant="subtitle2"
        color="grey.400"
        customStyles={{
          width: { md: "90%", xs: "100%" },
          mt: 1,
        }}
      >
        Whether you're ready to integrate, want a demo, or just have
        questions—our team is here to help you move faster and build smarter.
        Let’s talk finance, reimagined.
      </CustomText>
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
        >
          {isLoading ? <CommonCircularProgress /> : "Submit "}
        </CommonLoadingButton>
      </CustomFormProvider>
    </CommonCard>
  );
};

export default ContactForm;
