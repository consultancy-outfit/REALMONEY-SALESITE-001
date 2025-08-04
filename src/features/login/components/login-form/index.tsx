import { CommonButton } from "@/components/buttons/common-button";
import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { Container, Divider } from "@mui/material";
import { GoogleIcon } from "../../assets";
import { useLoginForm } from "../../hooks/useLoginForm";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import TextFormFields from "@/components/form-fields/text-form-field";
import { CustomText } from "@/components/text/custom-text";
import Link from "next/link";

const LoginForm = () => {
  const { methods, onSubmit, handleSubmit } = useLoginForm();
  return (
    <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          py: { lg: 10, md: 6, xs: 2 },
        }}
      >
        <HeadingText variant="h4">Welcom back!</HeadingText>
        <BodyText variant="body2">
          Please enter your details to get started
        </BodyText>
        <CommonButton startIcon={<GoogleIcon />} variant="outlined" fullWidth>
          Sign In with Google
        </CommonButton>
        <Divider
          sx={{
            "&::before, &::after": {
              borderColor: "grey.400",
            },
          }}
        >
          Or
        </Divider>
        <TextFormFields
          name="email"
          color="common.black"
          placeholder="Username or email"
        />
        <TextFormFields
          name="password"
          color="common.black"
          placeholder="Password"
        />
        <BodyText
          variant="body2"
          color="primary.main"
          fontWeight="fontWeightSemiBold"
          customStyles={{ textAlign: "left" }}
        >
          <Link href="/contact-us">Forgot password?</Link>
        </BodyText>
        <CommonButton
          variant="contained"
          customStyles={{ borderRadius: 8 }}
          primary
          fullWidth
          type="submit"
        >
          Sign in
        </CommonButton>
        <BodyText variant="body2">
          Don&apos;t have an account?{" "}
          <CustomText
            variant="body2"
            component="span"
            color="primary.main"
            fontWeight="fontWeightSemiBold"
          >
            <Link href="/get-started">Create account</Link>
          </CustomText>
        </BodyText>
      </Container>
    </CustomFormProvider>
  );
};

export default LoginForm;
