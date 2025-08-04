import { Avatar, Box, Button } from "@mui/material";
import { LinkButton } from "@/components/buttons/link-button";
import {
  CommonContactAvatarGroupsImage,
  CommonGetStartedImage,
} from "@/assets/images/common/components";
import { pxToRem } from "@/utils/styles";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { PROJECT_NAME } from "@/configs/env";
import { CustomText } from "@/components/text/custom-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { PROJECT_WEB_APP_ROUTES } from "@/constants/routes";
import { ContactCardBgImage } from "@/assets/images/common/shapes";
import { CommonCard } from "@/components/cards/common-card";
import { ContactUsRealMoneyImage } from "../../assets/images";
import { HeadingText } from "@/components/text/heading-text";

export const ContactCard = (props: any) => {
  const {
    heading = `Get Started with ${PROJECT_NAME} Today!`,
    description = `Simplify identity verification with fast, secure, and
    AI-powered solutions. Enhance compliance, prevent fraud, and
    onboard customers seamlessly.`,
    btnText = " Get Started",
    btnLink = PROJECT_WEB_APP_ROUTES?.SIGNUP,
    extraDescription = "",
    hasAvatars = false,
  } = props;

  return (
    <Box
      sx={{
        backgroundImage: `url(${ContactUsRealMoneyImage?.src})`,
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "120% -100%",
        backgroundSize: "cover",
        height: pxToRem(500),
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: pxToRem(500),
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        <HeadingText
          color="common.white"
          fontWeight="fontWeightSemiBold"
          lineHeight={pxToRem(60)}
          letterSpacing={pxToRem(1)}
          customStyles={{ fontSize: pxToRem(48) }}
        >
          {heading}
        </HeadingText>
        <Button variant="contained">Get Started</Button>
      </Box>
    </Box>
  );
};
