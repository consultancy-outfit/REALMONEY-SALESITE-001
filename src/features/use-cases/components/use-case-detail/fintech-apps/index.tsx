"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import {
  CardDetail3Image,
  HeroSection2Image,
} from "@/features/use-cases/assets";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

export const FinTechApps = () => {
  return (
    <>
      <SlideUpInView>
        <Box display={"flex"} flexDirection={"column"} gap={2} px={6}>
          <Typography variant="h2" color="white" fontWeight={600}>
            Frictionless Onboarding for Fintech Apps
          </Typography>
          <Typography variant="body1" color="white"  
          sx={{
              color: "#C0C0C0",
              fontWeight: 500,
              fontSize: "25px",
            }}
            >
            A growing fintech app seeks to streamline its onboarding and KYC
            process while meeting UK regulatory standards. The app aims to
            deliver a fast and user-friendly onboarding journey that builds user
            trust and meets AML compliance.
          </Typography>
        </Box>
      </SlideUpInView>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1.5}
        py={5}
        px={2}
        mx={6}
        my={2}
      >
        <Typography
          fontWeight={600}
          fontSize={"30px"}
          color="white"
          textAlign={"center"}
        >
          Problem
        </Typography>
        <Typography
          fontWeight={300}
          fontSize={"15px"}
          color="white"
          textAlign={"center"}
          sx={{
              color: "#C0C0C0",
              fontWeight: 500,
              fontSize: "25px",
            }}
        >
          Lengthy onboarding experiences requiring multiple document uploads or
          physical verification steps discourage users from completing
          registration. In competitive markets, drop-offs during KYC can lead to
          lost customers and higher acquisition costs. Manual verification also
          increases operational costs and slows down scale.
        </Typography>
        <Image
          src={HeroSection2Image}
          alt="HeroSection2"
          style={{
            width: "100%",
            height:"auto",
            maxHeight: "640px",
          }}
        />
        <Typography
          fontWeight={600}
          fontSize={"30px"}
          color="white"
          textAlign={"center"}
        >
          Solution
        </Typography>
        <Typography
          fontWeight={300}
          fontSize={"15px"}
          color="white"
          textAlign={"center"}
           sx={{
              color: "#C0C0C0",
              fontWeight: 500,
              fontSize: "25px",
            }}
        >
          With Bank-Based Identity Verification, Centspay allows customers to
          verify their identity by logging into their bank. The process is
          instant, secure, and regulated. Consent Flow Management ensures
          customers are in control of their data, and PSD2 & FCA Compliance
          guarantees that all data flows meet regulatory standards.
        </Typography>
        <Grid container my={3}>
          <Grid
            display={"flex"}
            flexDirection={"column"}
            gap={1}
            justifyContent={"center"}
            size={{ xs: 12, md: 6 }}
            p={{ xs: 0, sm: 4 }}
          >
            <Typography fontWeight={600} fontSize={"30px"} color="white" mb={1}>
              Benefits
            </Typography>
            <Typography fontWeight={400} fontSize={"20px"} color="white">
              Onboarding completed in under 2 minutes.
            </Typography>

            <Typography fontWeight={400} fontSize={"20px"} color="white">
              30% reduction in customer drop-off.
            </Typography>

            <Typography fontWeight={400} fontSize={"20px"} color="white">
              Full transparency and audit-ready records.
            </Typography>

            <Typography fontWeight={400} fontSize={"20px"} color="white">
              Elimination of manual document verification.
            </Typography>
          </Grid>
          <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            size={{ xs: 12, md: 6 }}
          >
            <ScaleInView>
              <Image
                src={CardDetail3Image}
                alt="CardDetail3"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </ScaleInView>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
