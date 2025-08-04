"use client";
import { RectangleBgImage } from "@/assets/images/common/shapes";
import { CustomText } from "@/components/text/custom-text";

export const DecoratedImageText = (props: any) => {
  const {
    children,
    variant = "inherit",
    fontWeight = "inherit",
    letterSpacing = "normal",
    backgroundPositionY = "75%",
  } = props;

  return (
    <CustomText
      component="span"
      variant={variant}
      fontWeight={fontWeight}
      customStyles={{
        backgroundImage: `url(${RectangleBgImage?.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY,
        letterSpacing,
      }}
    >
      {children}
    </CustomText>
  );
};
