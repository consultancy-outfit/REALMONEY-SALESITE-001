import React from "react";
import FormProvider from "../../ReactHookForm/FormProvider";
import { useRegisterForm } from "./useRegisterForm";
import { Box, Button, CircularProgress } from "@mui/material";
import { registerFields } from "./RegisterForm.data";
import { ContainerGrid } from "../../Grids/ContainerGrid";
import { ItemGrid } from "../../Grids/ItemGrid";

const RegisterForm = ({ params }) => {
  const { methods, onSubmit, disabled, role, isLoading } = useRegisterForm({
    params,
  });
  return (
    <Box display={!disabled ? "block" : "none"}>
      <FormProvider
        methods={methods}
        onSubmit={methods?.handleSubmit(onSubmit)}
      >
        <ContainerGrid
          customStyles={{
            p: 2,
            borderRadius: 4,
            bgcolor: "#F9F9F9",
            mx: 4,
            mt: 1,
            width: "80%",
          }}
          spacing={1}
        >
          {registerFields(role)?.map((item) => (
            <ItemGrid key={item?.id}>
              <item.component
                {...item.componentProps}
                size="small"
                disabled={disabled}
              />
            </ItemGrid>
          ))}
          <ItemGrid customStyles={{ mt: 1 }}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{ borderRadius: "30px", bgcolor: "#3369FF" }}
              disabled={disabled || isLoading}
              className="chat-bot-font-family"
            >
              {isLoading ? <CircularProgress size={27} /> : "Submit"}
            </Button>
          </ItemGrid>
        </ContainerGrid>
      </FormProvider>
    </Box>
  );
};

export default RegisterForm;
