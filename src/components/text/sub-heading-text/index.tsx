"use client";
import { Typography } from "@mui/material";
import { SubHeadingTextPropsI } from "../text.interface";

export const SubHeadingText = (props: SubHeadingTextPropsI) => {
  const {
    variant = "subtitle1",
    color = "text.primary",
    fontWeight = "fontWeightSemiBold",
    component = "div",
    isCapital = false,
    children,
    marginTop = 0,
    marginBottom = 0,
    lineHeight = 1.5,
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
        marginTop,
        marginBottom,
        lineHeight,
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
