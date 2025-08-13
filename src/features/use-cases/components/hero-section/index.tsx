"use client";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { HeroSectionImage } from "../../assets";

export const HeroSection = () => {
  return (
    <SlideUpInView>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        px={2}
        m={2}
      >
        <Typography
          variant="h2"
          fontWeight={600}
          width={"60%"}
          textAlign={"center"}
          color="white"
        >
          Real Solutions for Real-Time Finance
        </Typography>
        <Image
          src={HeroSectionImage}
          alt="HeroSection"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "780px",
          }}
        />
      </Box>
    </SlideUpInView>
  );
};
