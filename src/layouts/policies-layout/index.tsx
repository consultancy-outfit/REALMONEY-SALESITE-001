import { Box } from "@mui/material";
import { Header } from "./header";
import { MainContainer } from "@/components/containers/main-container";

export const PoliciesLayout = (props: any) => {
  const { children } = props;

  return (
    <MainContainer>
      <Header />
      <Box
        sx={{
          paddingTop: { xs: "1rem", md: "1rem" },
        }}
      >
        {children}
      </Box>
    </MainContainer>
  );
};
