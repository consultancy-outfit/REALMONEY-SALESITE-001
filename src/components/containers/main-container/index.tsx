import { Box } from "@mui/material";

export const MainContainer = (props: any) => {
  const { children, customStyles } = props;
  return (
    <Box
      sx={{
        padding: { xs: "1rem", sm: "6rem 3rem", md: "6rem 7rem" },
        ...customStyles,
      }}
    >
      {children}
    </Box>
  );
};
