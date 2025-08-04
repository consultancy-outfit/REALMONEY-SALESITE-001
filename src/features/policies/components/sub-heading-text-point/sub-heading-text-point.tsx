"use client";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { Box } from "@mui/material";

export const SubHeadingTextPoint = (props: any) => {
  const { heading, points, description } = props;
  return (
    <Box>
      <SlideSidewayInView duration={0.5}>
        <HeadingText variant="h4" fontWeight={"fontWeightSemiBold"}>
          {heading}
        </HeadingText>
        <br />
        {!!description && (
          <>
            <SubHeadingText
              component={"div"}
              variant="subtitle1"
              fontWeight="fontWeightNormal"
            >
              {description}
            </SubHeadingText>
          </>
        )}
        {points?.map((point: any) => (
          <Box sx={{ marginY: 1 }} key={point?.heading}>
            <Box sx={{ marginY: 1 }}>
              <SubHeadingText
                variant="subtitle1"
                fontWeight="fontWeightSemiBold"
                lineHeight={"normal"}
              >
                {point?.heading}
              </SubHeadingText>
            </Box>
            <SubHeadingText
              variant="subtitle1"
              fontWeight="fontWeightNormal"
              lineHeight={"normal"}
            >
              {point?.title}
            </SubHeadingText>
          </Box>
        ))}
        <br />
      </SlideSidewayInView>
    </Box>
  );
};
