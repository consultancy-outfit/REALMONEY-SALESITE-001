import { Box } from "@mui/material";

export const SecondaryContainer = (props: any) => {
  const { children, customStyles } = props;
  return (
    <Box
      sx={{
        padding: { xs: "1rem", md: "2rem 3rem" },
        ...customStyles,
      }}
    >
      {children}
    </Box>
  );
};
