"use client";
import { Grid } from "@mui/material";
import { LoginForm } from "./components";

export const Login = () => {
  return (
    <Grid
      container
      spacing={2}
      height={"90dvh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid size={{ md: 6, xs: 12 }}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};
