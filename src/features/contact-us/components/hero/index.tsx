import { Box, useTheme } from "@mui/material";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { DropPlainImage, DropMessageImage } from "../../assets/images";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: "center",
        pt: { md: 8, xs: 4 },
        bgcolor: `${theme?.palette?.common?.periwinkle_tint}1A`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: { lg: 600, md: 400, sm: 300, xs: 400 },
      }}
    >
      <Box
        component="img"
        src={DropMessageImage.src}
        alt="Left Decoration"
        sx={{
          position: "absolute",
          left: { lg: 400, md: 30, sm: 40, xs: 50 },
          top: { lg: 400, md: 350, sm: 290, xs: 450 },
          width: { md: 120, xs: 80 },
        }}
      />

      <Box
        component="img"
        src={DropPlainImage.src}
        alt="Right Decoration"
        sx={{
          position: "absolute",
          right: { lg: 100, md: 50, sm: 80, xs: 20 },
          top: { lg: 45, md: 40, sm: 50, xs: 40 },
          width: { md: 200, xs: 120 },
          height: { md: 220, xs: 120 },
        }}
      />

      <GradientHeadingBlock
        headingStart="Connect"
        highlightText="& Get in touch"
      />
      <SlideUpInView duration={1}>
        <SubHeadingText
          marginTop={3}
          fontWeight="fontWeightNormal"
          customStyles={{
            maxWidth: "837px",
            px: { md: 0, xs: 2 },
          }}
        >
          Looking to enhance your identity verification experience or have
          questions about our platform? Our team is here to help you make
          smarter, faster, and more secure decisions.
        </SubHeadingText>
      </SlideUpInView>
    </Box>
  );
};
export default Hero;
