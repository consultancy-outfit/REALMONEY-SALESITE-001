"use client";
import { Avatar } from "@mui/material";
import { IconAvatarPropsI } from "../avatars.interface";
import { AVATAR_VARIANTS } from "@/constants/ui";

export const IconAvatar = (props: IconAvatarPropsI) => {
  const {
    alt,
    backgroundColor = "transparent",
    customStyles,
    padding,
    children,
    width = 25,
    height = 25,
    variant = AVATAR_VARIANTS?.CIRCULAR,
    borderColor = "primary.main",
  } = props;

  return (
    <Avatar
      sx={{
        backgroundColor,
        width: width ?? 25,
        height: height ?? 25,
        padding,
        border: "1px solid",
        borderColor,
        ...customStyles,
      }}
      variant={variant ?? AVATAR_VARIANTS?.CIRCULAR}
      alt={alt}
    >
      {children}
    </Avatar>
  );
};
