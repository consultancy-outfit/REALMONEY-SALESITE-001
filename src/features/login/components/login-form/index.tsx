import { CommonButton } from "@/components/buttons/common-button";
import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { Box, Container, Divider } from "@mui/material";
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
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeadingText variant="h4" color="common.white" customStyles={{ py: 2 }}>
          Welcome Back to Real Money
        </HeadingText>
        <BodyText
          variant="body2"
          color="grey.400"
          customStyles={{ lineHeight: 2.5 }}
        >
          Your gateway to powerful tools, personalised services, and secure
          management. Enter your credentials below to continue.
        </BodyText>
        <CommonButton
          startIcon={<GoogleIcon />}
          variant="outlined"
          fullWidth
          customStyles={{
            borderRadius: 8,
            my: 2,
            backgroundColor: "grey.900",
            opacity: 0.8,
            color: "common.white",
          }}
        >
          Sign In with Google
        </CommonButton>
        <Divider
          sx={{
            "&::before, &::after": {
              borderColor: "grey.400",
            },
            "& .MuiDivider-wrapper": {
              color: "grey.400",
            },
            mb: 2,
          }}
        >
          Or
        </Divider>
        <TextFormFields
          name="email"
          label="Email"
          required
          placeholder="Username or email"
        />
        <Box sx={{ mt: 2 }}>
          <TextFormFields
            name="password"
            label="Password"
            placeholder="Password"
            required
            sx={{ mt: 2 }}
          />
        </Box>
        <BodyText
          variant="body2"
          color="primary.main"
          fontWeight="fontWeightSemiBold"
          customStyles={{ textAlign: "left", mt: 2 }}
        >
          <Link href="/contact-us">Forgot password?</Link>
        </BodyText>
        <CommonButton
          variant="contained"
          customStyles={{ borderRadius: 8, my: 2 }}
          primary
          fullWidth
          type="submit"
        >
          Sign in
        </CommonButton>
        <BodyText
          variant="body2"
          color="grey.500"
          customStyles={{ textAlign: "center" }}
        >
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
