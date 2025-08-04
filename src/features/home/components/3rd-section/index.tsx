import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  BuiltInSecurityImage,
  DeveloperReadyImage,
  FullyScalableImage,
} from "../../assets";
import Image from "next/image";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";

const HomeThirdSection = () => {
  const data = [
    {
      id: 1,
      image: BuiltInSecurityImage,
      title: "Built-in Security",
      heading: "Bank-Grade Protection",
      description:
        "Security is our top priority. We never store login credentials and use bank-level encryption and secure APIs to protect every data request and payment. We’re fully aligned with FCA, GDPR, and PSD2 standards, giving your customers total confidence.",
      initialX: -50,
    },
    {
      id: 2,
      image: DeveloperReadyImage,
      title: "Developer Ready",
      heading: "Easy API Integration",
      description:
        "Get started fast with clean, well-documented APIs, test environments, and responsive support—designed for startups and enterprises alike.",
      initialX: 100,
    },
    {
      id: 3,
      image: FullyScalableImage,
      title: "Fully Scalable",
      heading: "Built for Growth",
      description:
        "Whether you're processing hundreds or millions of transactions, our cloud-based infrastructure grows with your business. Scale without limits while maintaining peak performance, uptime, and access to deep financial data insights that unlock new revenue opportunities.",
      initialX: -50,
    },
  ];

  return (
    <Box px={{ xs: 2, md: 5, lg: 10 }}>
      <Grid container spacing={10}>
        {data.map((item, index) => (
          <SlideSidewayInView key={item.id} initialX={item?.initialX}>
            <Grid
              container
              spacing={4}
              direction={{
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              }}
              alignItems="center"
              sx={{ m: "auto" }}
            >
              {/* Image Section */}
              <Grid size={{ md: 6, xs: 12 }}>
                <HoverScaleUpDown scale={1.05}>
                  <Box
                    sx={{
                      width: "100%",
                      mx: "auto",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.heading}
                      style={{
                        borderRadius: 25,
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                </HoverScaleUpDown>
              </Grid>

              {/* Text Section */}
              <Grid size={{ md: 6, xs: 12 }}>
                <HoverScaleUpDown scale={1.05}>
                  <Stack spacing={3} mx="auto">
                    <Stack spacing={0.5}>
                      <Typography
                        color="#A97FFF"
                        fontFamily="Inter"
                        fontSize="1.25rem"
                        fontWeight="bold"
                        textAlign="left"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        color="#000"
                        fontFamily="Inter"
                        fontSize="2.5rem"
                        fontWeight={600}
                        textAlign="left"
                      >
                        {item.heading}
                      </Typography>
                    </Stack>
                    <Typography
                      color="#575757"
                      fontFamily="Inter"
                      fontSize="1.25rem"
                      fontWeight={400}
                      textAlign="left"
                    >
                      {item.description}
                    </Typography>
                  </Stack>
                </HoverScaleUpDown>
              </Grid>
            </Grid>
          </SlideSidewayInView>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeThirdSection;
