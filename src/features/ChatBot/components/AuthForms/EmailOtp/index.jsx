import { FormProvider, RHFTextField } from "../../ReactHookForm";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { ContainerGrid } from "../../Grids/ContainerGrid";
import { ItemGrid } from "../../Grids/ItemGrid";
import { useEmailOtp } from "./useEmailOtp";

const EmailOtp = ({ params }) => {
  const { disabled, methods, onSubmit, isLoading } = useEmailOtp({ params });
  return (
    <Box display={!disabled ? "block" : "none"}>
      <FormProvider
        methods={methods}
        onSubmit={methods?.handleSubmit(onSubmit)}
      >
        <ContainerGrid
          spacing={1}
          customStyles={{
            p: 2,
            borderRadius: 4,
            bgcolor: "#F9F9F9",
            mx: 4,
            width: "80%",
            mt: 0.5,
          }}
        >
          <ItemGrid>
            <Typography
              color="#505050"
              fontSize={14}
              fontWeight={600}
              className="chat-bot-font-family"
            >
              Enter OTP received on your registered email to proceed.
            </Typography>
          </ItemGrid>
          <ItemGrid>
            <RHFTextField
              name="otpCode"
              label="Email OTP"
              disabled={disabled}
            />
          </ItemGrid>
          <ItemGrid>
            <Button
              variant="contained"
              fullWidth
              sx={{ borderRadius: "30px", bgcolor: "#3369FF" }}
              type="submit"
              className="chat-bot-font-family"
              disabled={disabled || isLoading}
            >
              {isLoading ? <CircularProgress size={27} /> : "Submit"}
            </Button>
          </ItemGrid>
        </ContainerGrid>
      </FormProvider>
    </Box>
  );
};

export default EmailOtp;
