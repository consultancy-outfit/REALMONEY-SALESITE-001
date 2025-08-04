"use client";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { Box } from "@mui/material";

export const SimpleTextPoint = (props: any) => {
  const { heading, description } = props;
  return (
    <Box>
      <SlideSidewayInView duration={0.5}>
        <HeadingText variant="h4" fontWeight={"fontWeightSemiBold"}>
          {heading}
        </HeadingText>
        <br />
        <SubHeadingText
          component={"div"}
          variant="subtitle1"
          fontWeight="fontWeightNormal"
        >
          {description}
        </SubHeadingText>
        <br />
      </SlideSidewayInView>
    </Box>
  );
};
