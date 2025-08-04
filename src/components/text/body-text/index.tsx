"use client";
import { Typography } from "@mui/material";
import { BodyTextPropsI } from "../text.interface";

export const BodyText = (props: BodyTextPropsI) => {
  const {
    variant = "body2",
    color = "text.primary",
    fontWeight = "fontWeightNormal",
    component = "p",
    isCapital = false,
    children,
    marginTop = 0,
    marginBottom = 0,
    fontStyle = "normal",
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
        fontStyle,
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
