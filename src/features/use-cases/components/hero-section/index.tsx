"use client";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { Box, Typography } from "@mui/material";

export const HeroSection = () => {
  return (
    <SlideUpInView>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        py={10}
        px={2}
        m={2}
      >
        <Typography variant="h2" color="black" fontWeight={600}>
          Use Cases
        </Typography>
        <Typography variant="body1" color="grey">
          Explore how our technology enables smarter payments, faster
          onboarding, and better financial decisions across industries.
        </Typography>
      </Box>
    </SlideUpInView>
  );
};
