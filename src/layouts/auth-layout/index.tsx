import { Box } from "@mui/material";
import { Header } from "./header";

export const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <Box minHeight="100dvh">
      <Header />
      <Box sx={{ height: 110 }} />
      <main>{children}</main>
    </Box>
  );
};
