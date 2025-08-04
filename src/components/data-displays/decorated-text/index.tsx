"use client";
import { CustomText } from "@/components/text/custom-text";
import { useTheme } from "@mui/material";

export const DecoratedText = (props: any) => {
  const {
    children,
    variant = "h3",
    fontWeight = "fontWeightSemiBold",
    textDecoration = "underline",
    letterSpacing = "normal",
  } = props;

  const theme = useTheme();

  return (
    <CustomText
      component="span"
      variant={variant}
      fontWeight={fontWeight}
      customStyles={{
        textDecoration,
        textDecorationOffset: "0rem",
        textDecorationColor: theme?.palette?.common?.text_underline,
        textDecorationThickness: "0.5rem",
        textDecorationStyle: "solid",
        letterSpacing,
      }}
    >
      {children}
    </CustomText>
  );
};
