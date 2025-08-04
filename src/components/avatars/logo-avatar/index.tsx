"use client";
import { Avatar, Box, Typography } from "@mui/material";
import { LogoAvatarPropsI } from "../avatars.interface";
import { PROJECT_NAME } from "@/configs/env";
import { AVATAR_VARIANTS } from "@/constants/ui";
import {
  CommonDarkLogoImage,
  CommonLightLogoImage,
} from "@/assets/images/logo";
import Link from "next/link";

export const LogoAvatar = (props: LogoAvatarPropsI) => {
  const {
    productName,
    isLight = true,
    width = "100%",
    height = 28,
    variant = AVATAR_VARIANTS?.SQUARE,
    link = "/",
    isCenter = false,
  } = props;

  // Ensure Logo is a valid string URL
  const Logo = isLight ? CommonLightLogoImage?.src : CommonDarkLogoImage?.src;
  if (!Logo) {
    // console.warn("Logo image source is undefined. Using fallback.");
    return null; // Prevent rendering if Logo is invalid
  }

  return (
    <Box>
      <Link href={link} passHref>
        <Avatar
          src={Logo}
          alt={PROJECT_NAME || "Project Logo"}
          sx={{
            width,
            height,
            objectFit: "cover",
            maxWidth: "100%",
            margin: isCenter ? "auto" : "",
          }}
          variant={variant}
        />
        {!!productName && (
          <Typography
            component="p"
            sx={{
              color: "primary.main",
              textAlign: "right",
              fontWeight: "fontWeightBold",
            }}
          >
            {productName}
          </Typography>
        )}
      </Link>
    </Box>
  );
};
