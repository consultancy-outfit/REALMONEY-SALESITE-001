import { pxToRem } from "@/utils/styles";
import { Box } from "@mui/material";

export const HeroContainer = (props: any) => {
  const {
    children,
    customStyles,
    paddingYMd = "4rem",
    maxWidth = 1000,
  } = props;
  return (
    <Box
      sx={{
        maxWidth: pxToRem(maxWidth),
        margin: "auto",
        textAlign: "center",
        paddingY: { xs: "2rem", md: paddingYMd },
        ...customStyles,
      }}
    >
      {children}
    </Box>
  );
};
