"use client";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  AccountantHelpSquadIcon,
  AlwaysCompliantIcon,
  CentsPayIcon,
  PayInstantlyImage,
  SaferPaymentsIcon,
  VerifiedDataImage,
} from "../../assets";
import Image from "next/image";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

const RealTimeAccess = () => {
  const data = [
    {
      id: 1,
      icon: SaferPaymentsIcon,
      heading: "Safer Payments",
      description:
        "All data is encrypted and flows through trusted banks - reducing fraud and improving customer confidence.",
    },
    {
      id: 2,
      icon: AlwaysCompliantIcon,
      heading: "Always Compliant",
      description:
        "We meet UK and EU Open Banking standards -so you can grow with confidence and peace of mind.",
    },
    {
      id: 3,
      icon: AccountantHelpSquadIcon,
      heading: "Accountant Help Squad",
      description:
        "AHS helps users connect and manage their accounts effortlessly.",
    },
    {
      id: 4,
      icon: CentsPayIcon,
      heading: "Centspay",
      description:
        "Enable users to pay directly from their bank accounts - securely and without cards.",
    },
  ];
  return (
    <ScaleInView initialScale={0.5}>
      <Card
        sx={{
          width: "95%",
          backgroundColor: "#272835",
          m: "auto",
          borderRadius: 8,
          px: { lg: 20, xs: 2 },
          py: 5,
        }}
      >
        <Stack spacing={5}>
          <Stack sx={{ width: { lg: "50%", xs: "100%" } }} spacing={4}>
            <Stack spacing={1}>
              <Typography
                color="#A97FFF"
                fontFamily="Inter"
                fontSize="1rem"
                fontWeight={600}
              >
                Real-Time Access
              </Typography>
              <Typography
                color="#F6F7FF"
                fontFamily="Inter"
                fontSize="2.5rem"
                fontWeight={500}
              >
                Fast, Secure, Open Data
              </Typography>
            </Stack>
            <Typography
              color="#D2D3DF"
              fontFamily="Inter"
              fontSize="1.25rem"
              fontWeight={500}
            >
              Empower your customers with instant bank data access—perfect for
              KYC, budgeting, and financial planning—all through safe, compliant
              connections.{" "}
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            <Grid size={{ lg: 7, xs: 12 }}>
              <Card
                sx={{
                  px: { md: 5, xs: 2.5 },
                  py: { md: 10, xs: 5 },
                  borderRadius: 5,
                  background: `radial-gradient(circle at 70% 50%, rgba(172, 121, 255, 0.4), rgba(52, 15, 101, 1))`,
                  height: { md: "28rem" },
                }}
              >
                <Stack
                  direction={{ md: "row", xs: "column" }}
                  justifyContent={{ md: "space-between", xs: "center" }}
                  alignItems="center"
                >
                  <Typography
                    color="#A97FFF"
                    fontFamily="Inter"
                    fontSize="1.25rem"
                    fontWeight={500}
                  >
                    Pay Instantly
                    <Typography
                      component="p"
                      color="#F6F7FF"
                      fontFamily="Inter"
                      fontSize={"1.5rem"}
                      fontWeight={500}
                    >
                      Let users pay directly from their bank - fast, secure, and
                      with fewer drop-offs than card payments.
                    </Typography>
                  </Typography>
                  <HoverScaleUpDown scale={1.05}>
                    <Box sx={{ m: "auto" }}>
                      <Image src={PayInstantlyImage} alt="" />
                    </Box>
                  </HoverScaleUpDown>
                </Stack>
              </Card>
            </Grid>
            <Grid size={{ lg: 5, xs: 12 }}>
              <Card
                sx={{
                  px: 2,
                  py: 5,
                  borderRadius: 5,
                  background: `radial-gradient(circle at center, rgba(71, 50, 110, 0.9) 0%, rgba(30, 25, 50, 1) 100%)`,

                  height: "28rem",
                }}
              >
                <Stack alignItems="center" textAlign="center">
                  <HoverScaleUpDown scale={1.05}>
                    <Box>
                      <Image src={VerifiedDataImage} alt="" />
                    </Box>
                  </HoverScaleUpDown>
                  <Typography
                    color="#A97FFF"
                    fontFamily="Inter"
                    fontSize="1.25rem"
                    fontWeight={500}
                  >
                    Verified Data
                    <Typography
                      component="p"
                      color="#F6F7FF"
                      fontFamily="Inter"
                      fontSize={"1.5rem"}
                      fontWeight={500}
                    >
                      Access accurate, up-to-date bank details for identity
                      checks, income proof, and smarter financial decisions.
                    </Typography>
                  </Typography>
                </Stack>
              </Card>
            </Grid>
            {data?.map((items) => (
              <Grid size={{ lg: 6, xs: 12 }} key={items?.id}>
                <HoverScaleUpDown scale={1.05}>
                  <Card
                    sx={{
                      p: { lg: 5, xs: 2.5 },
                      borderRadius: 8,
                      backgroundColor: "#2E2E3E",
                    }}
                  >
                    <Stack>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={{ lg: "none", xs: "center" }}
                        spacing={1}
                      >
                        <Box>
                          <Image src={items?.icon} alt={items?.heading} />
                        </Box>
                        <Typography
                          color="#A97FFF"
                          fontFamily="Inter"
                          fontSize="1.25rem"
                          fontWeight={500}
                        >
                          {items?.heading}
                        </Typography>
                      </Stack>
                      <Typography
                        component="p"
                        color="#F6F7FF"
                        fontFamily="Inter"
                        fontSize={"1.5rem"}
                        fontWeight={500}
                      >
                        {items?.description}
                      </Typography>
                    </Stack>
                  </Card>
                </HoverScaleUpDown>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Card>
    </ScaleInView>
  );
};

export default RealTimeAccess;
