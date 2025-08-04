"use client";
import { contactUsFormFields } from "./get-started-form.data";
import { useGetStarted } from "./use-get-started-form";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { CommonCard } from "@/components/cards/common-card";
import { CommonLoadingButton } from "@/components/buttons/common-loading-button";
import { CommonCircularProgress } from "@/components/progress-bars/common-circular-progress";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";

const GetStartedForm = () => {
  const { methods, handleSubmit, submitContactUs, isLoading } = useGetStarted();

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
        Get Started with FA Global Today&quot;
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
          fullWidth
        >
          {isLoading ? <CommonCircularProgress /> : "Submit"}
        </CommonLoadingButton>
        <SubHeadingText
          variant="subtitle1"
          marginTop={3}
          color="grey.600"
          fontWeight="fontWeightThin"
        >
          By submitting this form, Your journey with FA Global begins now. We’ll
          reach out soon to support your success
        </SubHeadingText>
      </CustomFormProvider>
    </CommonCard>
  );
};

export default GetStartedForm;
