"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import {
  CardDetail1Image,
  CardDetail2Image,
  HeroSection1Image,
} from "@/features/use-cases/assets";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const RealTimeBankInsights = () => {
  return (
    <>
      <SlideUpInView>
        <Box display={"flex"} flexDirection={"column"} gap={2} px={6}>
          <Typography variant="h2" color="white" fontWeight={600}>
            Smarter Lending with Real-Time Bank Insights
          </Typography>
          <Typography
            variant="body1"
            color="white"
            sx={{
              color: "#C0C0C0",
              fontWeight: 500,
              fontSize: "25px",
              letterSpacing: "1px",
            }}
          >
            Centspay enables lenders to assess borrower creditworthiness using
            real-time bank data instead of relying solely on traditional credit
            scores. This empowers more inclusive lending, particularly for the
            gig economy and underbanked populations.
          </Typography>
          <Image
            src={HeroSection1Image}
            alt="HeroSection1"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "640px",
            }}
          />
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
            letterSpacing: "1px",
          }}
        >
          Many potential borrowers, such as freelancers or first-time
          applicants, lack traditional credit histories. Financial institutions
          face risks when relying on outdated or static scoring models.
        </Typography>
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
            letterSpacing: "1px",
          }}
        >
          By integrating Centspays Account Information Services (AIS), lenders
          securely access bank transactions across institutions. The system
          automatically applies Transaction Categorisation and Data Enrichment,
          delivering a clean financial picture. Then, Income & Expense Insights
          and Risk & Credit Scoring algorithms assess spending patterns, income
          regularity, overdraft frequency, and more.
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
              Implementation Flow
            </Typography>
            <Typography fontWeight={400} fontSize={"20px"} color="white">
              Customer consents via secure interface.
            </Typography>

            <Typography fontWeight={400} fontSize={"20px"} color="white">
              Bank data is fetched using AIS.
            </Typography>

            <Typography fontWeight={400} fontSize={"20px"} color="white">
              Transaction data is categorised and enriched.
            </Typography>

            <Typography fontWeight={400} fontSize={"20px"} color="white">
              Insights are generated and used in credit models.
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
                src={CardDetail1Image}
                alt="CardDetail1"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </ScaleInView>
          </Grid>
        </Grid>
        <Grid container my={3}>
          <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            size={{ xs: 12, md: 6 }}
          >
            <ScaleInView>
              <Image
                src={CardDetail2Image}
                alt="CardDetail2"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </ScaleInView>
          </Grid>
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
              Broader financial inclusion for thin-file applicants.
            </Typography>

            <Typography fontWeight={400} fontSize={"20px"} color="white">
              Reduced loan default risk with verified behavioural data.
            </Typography>

            <Typography fontWeight={400} fontSize={"20px"} color="white">
              Faster loan approvals with automated scoring.
            </Typography>

            <Typography fontWeight={400} fontSize={"20px"} color="white">
              Enhanced regulatory compliance with traceable insights.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
