"use client";
import { Typography } from "@mui/material";
import { HeadingTextPropsI } from "../text.interface";

export const HeadingText = (props: HeadingTextPropsI) => {
  const {
    variant = "h3",
    color = "text.primary",
    fontWeight = "fontWeightBold",
    component = "div",
    isCapital = false,
    children,
    customStyles = {},
    letterSpacing = "normal",
    lineHeight = 1.5,
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
        lineHeight,
        ...customStyles,
      }}
      component={component}
    >
      {children}
    </Typography>
  );
};
