"use client";
import { Box, Typography, SxProps, Theme } from "@mui/material";
import SlideUpInView from "../animations/animation-scroll/slide-up-in-view";

interface GradientHeadingBlockProps {
  headingStart: string;
  highlightText: string;
  headingEnd?: string;
  subheading?: string;
  gradient?: string;
  containerSx?: SxProps<Theme>;
  headingSx?: SxProps<Theme>;
  highlightSx?: SxProps<Theme>;
  subheadingSx?: SxProps<Theme>;
}

export const GradientHeadingBlock = ({
  headingStart,
  highlightText,
  headingEnd,
  subheading,
  gradient = "linear-gradient(to top,#FEECA0 25%, transparent 25%)",
  containerSx = {},
  headingSx = {},
  highlightSx = {},
  subheadingSx = {},
}: GradientHeadingBlockProps) => {
  return (
    <Box textAlign="center" px={2} sx={containerSx}>
      <SlideUpInView>
        <Typography
          variant="h3"
          fontWeight="500"
          sx={{
            display: "inline-block",
            position: "relative",
            ...headingSx,
          }}
        >
          {headingStart}{" "}
          <Box
            component="span"
            sx={{
              background: gradient,
              display: "inline",
              ...highlightSx,
            }}
          >
            {highlightText}
          </Box>{" "}
          {headingEnd}
        </Typography>
      </SlideUpInView>

      {subheading && (
        <SlideUpInView>
          <Typography
            fontSize={"18px"}
            fontWeight={400}
            color="text?.primary"
            mt={3}
            sx={{
              ...subheadingSx,
            }}
          >
            {subheading}
          </Typography>
        </SlideUpInView>
      )}
    </Box>
  );
};
