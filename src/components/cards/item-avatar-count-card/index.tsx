"use client";
import { RecordCountChip } from "@/components/chips/record-count-chip";
import { CommonCard } from "../common-card";
import { ItemAvatarCountCardPropsI } from "../cards.interface";
import { DynamicAvatar } from "@/components/avatars/dynamic-avatar";
import { Box } from "@mui/material";
import { AVATAR_VARIANTS } from "@/constants/ui";
import { StaticImage } from "@/components/avatars/static-image";

const ItemAvatarCountCard = (props: ItemAvatarCountCardPropsI) => {
  const { name, avatarSrc, count, hasCount = false, isStatic = false } = props;
  return (
    <CommonCard height="100%">
      <RecordCountChip name={name} totalCount={count} hasCount={hasCount} />
      <br />
      <Box sx={{ my: 1, width: "100%" }}>
        {isStatic ? (
          <StaticImage
            avatarSrc={avatarSrc}
            variant={AVATAR_VARIANTS?.ROUNDED}
            width="100%"
            height="auto"
            aspectRatio="4.2"
          />
        ) : (
          <DynamicAvatar
            avatarSrc={avatarSrc}
            variant={AVATAR_VARIANTS?.ROUNDED}
            width="100%"
          />
        )}
      </Box>
    </CommonCard>
  );
};

export default ItemAvatarCountCard;
