"use client";
import { Grid } from "@mui/material";
import { LoginForm } from "./components";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

export const Login = () => {
  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid size={{ md: 4, xs: 12 }}>
        <ScaleInView>
          <LoginForm />
        </ScaleInView>
      </Grid>
    </Grid>
  );
};
