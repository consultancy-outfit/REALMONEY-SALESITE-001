"use client";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  CardImage,
  WhatWeDoIcon,
  WhoWeAreIcon,
  WhoWeServeIcon,
  WhyItMattersIcon,
} from "../../assets";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const HomeThirdSection = () => {
  const data = [
    {
      id: 1,
      image: WhoWeAreIcon,
      heading: "Who We Are",
      description:
        "A team of fintech experts transforming banking connectivity into smarter digital experiences for all industries.",
    },
    {
      id: 2,
      image: WhatWeDoIcon,
      heading: "What We Do",
      description:
        "We offer secure APIs and smart tools for real-time data access, payments, identity checks, analytics, and compliance.",
    },
    {
      id: 3,
      image: WhyItMattersIcon,
      heading: "Why It Matters",
      description:
        "We help businesses reduce costs, improve customer onboarding, and deliver fast, personalised financial services.",
    },
    {
      id: 4,
      image: WhoWeServeIcon,
      heading: "Who We Serve",
      description:
        "From startups to enterprises — banks, lenders, insurers, and platforms rely on us to stay competitive and compliant.",
    },
  ];

  return (
    <SlideUpInView initialY={-80}>
      <Stack spacing={8} alignItems="center" px={{ lg: 0, xs: 3 }}>
        <Stack
          sx={{ width: { lg: "90%", xs: "100%" }, color: "#03020C" }}
          spacing={4}
        >
          <Typography
            color="#fff"
            fontSize={{ md: "3rem", xs: "2.5rem" }}
            fontWeight="bold"
          //  sx={{padding:"10px"}}
          >
            Empowering Financial <br /> Innovation with Open Banking
          </Typography>
          <Stack direction={{ lg: "row", xs: "column" }} sx={{paddingTop:"20px"}}>
            <Stack
              sx={{
                position: "relative",
                bottom: { xl: "3rem", xs: 0 },
                left: { xl: "10rem", xs: 0 },
                px: { md: 0, xs: 2 },
                // paddingTop:"50px"
               
              }}
               mt={4}
            >
              <Image
                src={CardImage}
                alt="Card Image"
                style={{ width: "auto" }}
              />
            </Stack>
            <Stack spacing={2}>
              <Typography
                color="#fff"
                fontSize="2rem"
                fontWeight="bold"
                textAlign="left"
              >
                Trusted. Compliant. Scalable. Secure. Reliable. Intelligent.
              </Typography>
              <Typography
                color="#fff"
                fontSize="1.125rem"
                textAlign="left"
                sx={{ opacity: "70%" }}
              >
                We provide next-generation Open Banking solutions that simplify
                access to financial data, enhance user verification, and
                accelerate digital payments — all under full regulatory
                compliance.{" "}
              </Typography>
              <Grid container spacing={4}>
                {data?.map((items) => (
                  <Grid size={{ md: 6, xs: 12 }} key={items?.id}>
                    <Stack direction="row" spacing={2}>
                      <Image src={items?.image} alt={items?.heading} />
                      <Typography
                        color="#fff"
                        fontSize="1.125rem"
                        fontWeight="bold"
                        textAlign="left"
                      >
                        {items?.heading}
                        <Typography
                          component={"p"}
                          color="#8D8D8D"
                          fontSize="1rem"
                          textAlign="left"
                        >
                          {items?.description}
                        </Typography>
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </SlideUpInView>
  );
};

export default HomeThirdSection;
