"use client";
import { Box } from "@mui/material";

export const CommonCard = (props: any) => {
  const {
    backgroundColor = "common.white",
    children,
    borderRadius = 2,
    paddingX = 2,
    paddingY = 2,
    paddingBottom = 2,
    height = "auto",
    boxShadow = 25,
    customStyles = {},
  } = props;

  return (
    <Box
      sx={{
        backgroundColor,
        borderRadius,
        paddingX,
        paddingY,
        boxShadow,
        height,
        paddingBottom,
        ...customStyles,
      }}
    >
      {children}
    </Box>
  );
};
