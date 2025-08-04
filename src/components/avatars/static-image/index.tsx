"use client";
import { AVATAR_VARIANTS } from "@/constants/ui";
import { StaticImagePropsI } from "../avatars.interface";
import Image from "next/image";
import { pxToRem } from "@/utils/styles";
import { STATIC_BLUR_DATA_URL } from "@/constants/avatars";
import { AVATAR_VARIANTS_BORDER_RADIUS } from "@/constants/styles";
import { DATA_TYPES } from "@/constants/data-types";

export const StaticImage = (props: StaticImagePropsI) => {
  const {
    avatarSrc,
    alt = "",
    backgroundColor = "transparent",
    width = 25,
    height = 25,
    variant = AVATAR_VARIANTS?.CIRCULAR,
    aspectRatio = "1",
    sizes = "100vw",
    isCenter = false,
  } = props;

  const borderRadius = AVATAR_VARIANTS_BORDER_RADIUS?.[variant];

  const imageWidth =
    typeof width === DATA_TYPES?.STRING ? width : pxToRem(width);
  const imageHeight =
    typeof height === DATA_TYPES?.STRING ? height : pxToRem(height);

  return (
    <div
      style={{
        position: "relative",
        width: imageWidth,
        height: imageHeight,
        aspectRatio,
        backgroundColor,
        borderRadius,
        overflow: "hidden",
        margin: isCenter ? "auto" : "",
      }}
    >
      <Image
        alt={alt}
        fill
        src={avatarSrc}
        priority
        sizes={sizes}
        placeholder="blur"
        blurDataURL={STATIC_BLUR_DATA_URL}
        style={{
          objectFit: "cover",
          borderRadius,
          aspectRatio,
        }}
      />
    </div>
  );
};
