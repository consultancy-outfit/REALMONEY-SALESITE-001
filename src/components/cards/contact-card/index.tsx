import { Avatar, Box } from "@mui/material";
import { LinkButton } from "@/components/buttons/link-button";
import { CommonCard } from "../common-card";
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
    <CommonCard
      backgroundColor="common.lightest_purple"
      boxShadow="none"
      borderRadius={8}
      paddingX={{ xs: 1.5, md: 3 }}
      paddingY={{ xs: 1.5, md: 3 }}
    >
      <CommonCard
        backgroundColor="common.white"
        boxShadow="none"
        borderRadius={8}
        paddingX={{ xs: 1.5, md: 3 }}
        paddingY={{ xs: 1.5, md: 3 }}
        customStyles={{
          backgroundImage: `url(${ContactCardBgImage?.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "120% -100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexDirection: { xs: "column", md: "row" },
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScaleInView>
              <Avatar
                src={CommonGetStartedImage?.src}
                alt={"get started"}
                variant="square"
                sx={{
                  width: { xs: "100%", md: pxToRem(350) },
                  height: { xs: "auto", md: pxToRem(350) },
                  maxWidth: "100%",
                  margin: "auto",
                }}
              />
            </ScaleInView>
          </Box>
          <Box sx={{ maxWidth: "md", marginRight: "auto", flex: 1 }}>
            <SlideUpInView>
              <CustomText variant="extraHeading2" fontWeight="fontWeightMedium">
                {heading}
              </CustomText>
              <Box sx={{ marginY: 2 }}>
                <SubHeadingText
                  variant="subtitle1"
                  fontWeight="fontWeightNormal"
                >
                  {description}
                </SubHeadingText>
              </Box>
              {extraDescription && (
                <Box sx={{ marginY: 2 }}>
                  <SubHeadingText
                    variant="subtitle1"
                    fontWeight="fontWeightNormal"
                  >
                    {extraDescription}
                  </SubHeadingText>
                </Box>
              )}
              {hasAvatars && (
                <Avatar
                  src={CommonContactAvatarGroupsImage?.src}
                  alt={"get started"}
                  variant="square"
                  sx={{
                    width: { xs: "100%", md: pxToRem(324) },
                    height: { xs: "auto", md: pxToRem(54) },
                  }}
                />
              )}
            </SlideUpInView>
          </Box>
          <Box sx={{ marginRight: "5rem" }}>
            <LinkButton link={btnLink}>{btnText}</LinkButton>
          </Box>
        </Box>
      </CommonCard>
    </CommonCard>
  );
};
