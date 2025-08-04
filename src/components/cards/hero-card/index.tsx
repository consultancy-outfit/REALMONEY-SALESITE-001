import { IconAvatar } from "@/components/avatars/icon-avatar";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { Box } from "@mui/material";
import { StackImages } from "./stack-images";
import { LinkButton } from "@/components/buttons/link-button";
import { APP_ROUTES, PROJECT_WEB_APP_ROUTES } from "@/constants/routes";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { CommonSpiralPatternHeroImage } from "@/assets/images/common/components";

export const HeroCard = (props: any) => {
  const {
    Icon = null,
    title = "",
    titleTwo = "",
    heading = "",
    description = ``,
    mainImage,
    stackImageTop,
    stackImageBottom,
    primaryButtonText,
    secondaryButtonText,
    handleLinkButtonPrimary = PROJECT_WEB_APP_ROUTES?.SIGNUP,
    handleLinkButtonSecondary = APP_ROUTES?.CONTACT_US,
    secondaryButtonEndIcon = undefined,
    imageWidth = 579,
    imageHeight = 510,
    titleMaxWidth = "sm",
    children = (
      <StackImages
        mainImage={mainImage}
        stackImageTop={stackImageTop}
        stackImageBottom={stackImageBottom}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
    ),
  } = props;

  return (
    <Box
      sx={{
        padding: { xs: "1rem", md: "3rem" },
        paddingY: { xs: "1rem", md: "2rem" },
        paddingTop: { xs: "1rem", md: "3rem" },
        backgroundImage: `url(${CommonSpiralPatternHeroImage?.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "70% 10%",
        backgroundSize: "80%",
      }}
    >
      <ContainerGridLayout customStyles={{ alignItems: "center" }}>
        <ItemGridLayout md={5} lg={6}>
          <SlideUpInView>
            <Box
              sx={{
                maxWidth: titleMaxWidth,
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                {Icon === null ? null : (
                  <IconAvatar
                    backgroundColor="common.white"
                    width={40}
                    height={40}
                  >
                    {Icon}
                  </IconAvatar>
                )}
                <BodyText component="span" color="text.secondary">
                  {title}
                  <BodyText
                    component="span"
                    color="text.secondary"
                    fontWeight="fontWeightMedium"
                  >
                    {titleTwo}
                  </BodyText>
                </BodyText>
              </Box>
              <Box sx={{ marginY: 2 }}>
                <HeadingText
                  variant="h1"
                  color="text.secondary"
                  fontWeight="fontWeightMedium"
                >
                  {heading}
                </HeadingText>
              </Box>
              <HeadingText variant="h6" fontWeight="fontWeightNormal">
                {description}
              </HeadingText>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  marginTop: 2,
                }}
              >
                {!!!primaryButtonText ? null : (
                  <LinkButton
                    link={handleLinkButtonPrimary}
                    linkProps={{
                      target: "_blank",
                    }}
                  >
                    {primaryButtonText}
                  </LinkButton>
                )}
                {!!!secondaryButtonText ? null : (
                  <LinkButton
                    primary={false}
                    endIcon={secondaryButtonEndIcon}
                    link={handleLinkButtonSecondary}
                  >
                    {secondaryButtonText}
                  </LinkButton>
                )}
              </Box>
            </Box>
          </SlideUpInView>
        </ItemGridLayout>
        <ItemGridLayout md={7} lg={6}>
          {children}
        </ItemGridLayout>
      </ContainerGridLayout>
    </Box>
  );
};
