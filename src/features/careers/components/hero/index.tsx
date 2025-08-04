import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { DecoratedImageText } from "@/components/data-displays/decorated-image-text";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { pxToRem } from "@/utils/styles";
import { Box } from "@mui/material";

export const Hero = () => {
  return (
    <Box
      sx={{
        maxWidth: pxToRem(1100),
        margin: "auto",
        textAlign: "center",
        paddingY: { xs: "2rem", md: "7rem" },
      }}
    >
      <SlideUpInView>
        <HeadingText
          component="span"
          variant="h3"
          fontWeight="fontWeightSemiBold"
        >
          Car
          <DecoratedImageText>eers</DecoratedImageText>
        </HeadingText>
        <Box sx={{ marginY: 2 }}>
          <SubHeadingText variant="subtitle1" fontWeight="fontWeightNormal">
            {`Discover fulfilling career opportunities and unlock your potential by joining our team.`}
          </SubHeadingText>
        </Box>
      </SlideUpInView>
    </Box>
  );
};
