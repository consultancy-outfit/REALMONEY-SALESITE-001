import { Box } from "@mui/material";
import Footer from "./footer";
import { Header } from "./header";

export const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Box sx={{ height: 110 }} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
