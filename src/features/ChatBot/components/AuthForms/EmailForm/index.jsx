import { FormProvider, RHFTextField } from "../../ReactHookForm";
import { Box, Button, CircularProgress } from "@mui/material";
import { ContainerGrid } from "../../Grids/ContainerGrid";
import { ItemGrid } from "../../Grids/ItemGrid";
import { useEmailForm } from "./useEmailForm";

const EmailForm = ({ params }) => {
  const { disabled, methods, onSubmit, isLoading } = useEmailForm({ params });
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
            my: 1,
          }}
        >
          <ItemGrid>
            <RHFTextField name="email" label="Email" disabled={disabled} />
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

export default EmailForm;
