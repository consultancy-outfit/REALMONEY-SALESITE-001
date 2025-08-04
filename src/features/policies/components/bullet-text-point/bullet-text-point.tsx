"use client";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { pxToRem } from "@/utils/styles";
import { Box } from "@mui/material";
import { Fragment } from "react";

export const BulletTextPoint = (props: any) => {
  const {
    heading,
    description,
    points,
    description2,
    hasListMargin = false,
    hasPointsMargin = false,
    hasListStyle = true,
  } = props;

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
          <ul
            style={{
              marginBlock: hasListMargin ? pxToRem(16) : 0,
              paddingLeft: hasListStyle ? pxToRem(18) : 0,
            }}
          >
            {points?.map((point: any) => (
              <Fragment key={point?.heading ?? point?.title ?? point}>
                <li
                  style={{
                    marginBlock: hasPointsMargin ? pxToRem(8) : 0,
                    listStyleType: hasListStyle ? "disc" : "none",
                  }}
                >
                  <b>{point?.heading}</b>
                  {point?.title ?? point}
                </li>
              </Fragment>
            ))}
          </ul>
          {description2}
        </SubHeadingText>
        <br />
      </SlideSidewayInView>
    </Box>
  );
};
