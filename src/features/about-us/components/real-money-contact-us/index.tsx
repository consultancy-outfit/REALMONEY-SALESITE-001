import { Box } from "@mui/material";
import { pxToRem } from "@/utils/styles";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { PROJECT_NAME } from "@/configs/env";
import { ContactUsRealMoneyImage } from "../../assets/images";
import { HeadingText } from "@/components/text/heading-text";
import { LinkButton } from "@/components/buttons/link-button";

export const RealMoneyContactCard = (props: any) => {
  const { heading = `Get Started with ${PROJECT_NAME} Today!` } = props;

  return (
    <ScaleInView>
      <Box
        sx={{
          backgroundImage: `url(${ContactUsRealMoneyImage?.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: pxToRem(500),
          width: "100%",
          backgroundPosition: "center",
          boxShadow: "none",
          borderRadius: { md: "35px", xs: "12px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, xl: 4 },
          maxWidth: { xs: pxToRem(1280), xl: "none" },
          marginInline: "auto",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Box
            sx={{
              maxWidth: pxToRem(588),
              marginInline: "auto",
            }}
          >
            <HeadingText
              variant="h3"
              color="common.white"
              fontWeight="fontWeightSemiBold"
              lineHeight={pxToRem(60)}
              letterSpacing={pxToRem(1)}
            >
              {heading}
            </HeadingText>
            <br />
            <br />
            <LinkButton link={"/get-started"} primary>
              Get Started
            </LinkButton>
          </Box>
        </Box>
      </Box>
    </ScaleInView>
  );
};
