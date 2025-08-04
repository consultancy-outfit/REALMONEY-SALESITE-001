import { IconAvatar } from "@/components/avatars/icon-avatar";
import { CustomText } from "@/components/text/custom-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { AVATAR_VARIANTS } from "@/constants/ui";
import { Box } from "@mui/material";

export const AvatarInfoCard = (props: any) => {
  const {
    Icon = null,
    heading,
    description,
    headingVariant = "extraHeading2",
    descriptionVariant = "subtitle1",
    textAlign = "left",
    avatarVariant = AVATAR_VARIANTS?.CIRCULAR,
    avatarWidth = 78,
    avatarHeight = 78,
    hoverStyles = {},
    borderColor = "transparent",
    backgroundColor,
    avatarBgColor = "common.white",
    avatarBorderColor = "transparent",
    descriptionFontWeight = "fontWeightNormal",
  } = props;

  return (
    <Box
      sx={{
        borderRadius: 2,
        padding: 2,
        textAlign,
        border: "1px solid",
        borderColor,
        backgroundColor,
        height: "100%",
        flexWrap: "wrap",
        "&:hover": {
          ...hoverStyles,
        },
      }}
    >
      {Icon !== null && (
        <IconAvatar
          variant={avatarVariant}
          width={avatarWidth}
          height={avatarHeight}
          backgroundColor={avatarBgColor}
          borderColor={avatarBorderColor}
        >
          {Icon}
        </IconAvatar>
      )}
      <Box sx={{ mt: { xs: 1, md: 4 }, mb: { xs: 1, md: 3 } }}>
        <CustomText variant={headingVariant} fontWeight="fontWeightMedium">
          {heading}
        </CustomText>
      </Box>
      <SubHeadingText
        variant={descriptionVariant}
        fontWeight={descriptionFontWeight}
      >
        {description}
      </SubHeadingText>
    </Box>
  );
};
