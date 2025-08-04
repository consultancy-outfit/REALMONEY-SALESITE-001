"use client";
import { Typography } from "@mui/material";
import { CustomTextPropsI } from "../text.interface";

export const CustomText = (props: CustomTextPropsI) => {
  const {
    variant = "pageTitled",
    color = "text.primary",
    fontWeight = "fontWeightNormal",
    component = "div",
    isCapital = false,
    children,
    letterSpacing = "normal",
    customStyles = {},
  } = props;

  return (
    <Typography
      variant={variant}
      sx={{
        color,
        fontWeight,
        textTransform: isCapital ? "capitalize" : "none",
        wordBreak: "break-word",
        letterSpacing,
        ...customStyles,
      }}
      component={component}
    >
      {children}
    </Typography>
  );
};
