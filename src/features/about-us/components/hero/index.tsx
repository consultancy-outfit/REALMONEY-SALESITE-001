"use client";
import { Box, Avatar } from "@mui/material";
import { AboutUsRealMoneyImage } from "../../assets";
import { pxToRem } from "@/utils/styles";
import { HeadingText } from "@/components/text/heading-text";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

const Hero = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        textAlign: "center",
      }}
    >
      <SlideUpInView>
        <HeadingText
          variant="h2"
          customStyles={{
            maxWidth: pxToRem(846),
            mx: "auto",
            mb: { xs: 4, md: 6 },
            px: { xs: 2, sm: 4 },
            background: "linear-gradient(180deg, #FFFFFF 0%, #999999 93.75%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1%",
            lineHeight: pxToRem(72),
          }}
        >
          Real-Time Finance, Built for the Modern World
        </HeadingText>
      </SlideUpInView>
      <Box>
        <ScaleInView>
          <Avatar
            src={AboutUsRealMoneyImage?.src}
            alt="Finance Illustration"
            variant="rounded"
            sx={{
              width: { xs: "100%" },
              height: { xs: "auto" },
              maxWidth: "100%",
              objectFit: "cover",
              backgroundColor: "transparent",
              margin: "auto",
              verticalAlign: "middle",
              display: "block",
              fontStyle: "italic",
              borderRadius: pxToRem(32),
            }}
          />
        </ScaleInView>
      </Box>
    </Box>
  );
};

export default Hero;
