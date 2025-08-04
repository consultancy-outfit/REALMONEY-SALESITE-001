"use client";
import { Grid } from "@mui/material";
import { LoginForm, LoginInfo } from "./components";

export const Login = () => {
  return (
    <Grid container spacing={2} height={"90dvh"}>
      <Grid size={{ md: 6, xs: 12 }}>
        <LoginForm />
      </Grid>
      <Grid size={{ md: 6, xs: 12 }}>
        <LoginInfo />
      </Grid>
    </Grid>
  );
};
