"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";
import { Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  AccountHelpSquadIcon,
  CentsPayIcon,
  IdentityAndComplianceIcon,
  SmartBankIcon,
} from "../../assets";

const RealTimeAccess = () => {
  const data = [
    {
      id: 1,
      icon: SmartBankIcon,
      heading: "SmartBank Data Layer",
      description:
        "Unified access to real-time financial data, enriched insights, and seamless payments.",
    },
    {
      id: 2,
      icon: IdentityAndComplianceIcon,
      heading: "Identity & Compliance",
      description:
        "Bank-grade identity verification and data-sharing flows aligned with regulatory standards.",
    },
    {
      id: 3,
      icon: AccountHelpSquadIcon,
      heading: "Account Help Squad",
      description:
        "End-to-end automation for payables, receivables, cash flow, and customer support.",
    },
    {
      id: 4,
      icon: CentsPayIcon,
      heading: "Centspay",
      description:
        "A secure multi-currency wallet enabling micro-payments, savings, transfers, and real-time analytics.",
    },
  ];
  return (
    <ScaleInView initialScale={0.5}>
      <Stack spacing={8} alignItems="center" px={{ md: 0, xs: 3 }}>
        <Stack sx={{ width: { lg: "50%", xs: "100%" } }} spacing={1}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize="3rem"
            fontWeight={"bold"}
          >
            Our services
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Inter"
            fontSize="1.25rem"
            fontWeight={500}
            sx={{ opacity: "70%" }}
          >
            Explore our suite of secure, compliant, and intelligent Open Banking
            solutions tailored for modern businesses.
          </Typography>
        </Stack>
        <Grid container spacing={3} sx={{ width: { xs: "100%", sm: "70%" } }}>
          {data?.map((items) => (
            <Grid size={{ lg: 6, xs: 12 }} key={items?.id}>
              <HoverScaleUpDown scale={1.05}>
                <Card
                  sx={{
                    p: { lg: 2, xs: 2 },
                    borderRadius: 8,
                    backgroundImage:
                      "linear-gradient(to bottom, #2d2d2d, #171717)",
                    outline: "#FFFFFF",
                  }}
                >
                  <Stack direction="row">
                    <Stack>
                      <Typography
                        color="#fff"
                        fontFamily={"Red Hat Display"}
                        fontSize={"1.5rem"}
                        fontWeight={"bold"}
                        textAlign="left"
                      >
                        {items?.heading}
                      </Typography>
                      <Typography
                        color="#FFFFFF"
                        fontFamily={"Red Hat Display"}
                        fontSize={"1.125rem"}
                        textAlign="left"
                        sx={{ opacity: "70%" }}
                      >
                        {items?.description}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Image src={items?.icon} alt={items?.heading} />
                    </Stack>
                  </Stack>
                </Card>
              </HoverScaleUpDown>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ScaleInView>
  );
};

export default RealTimeAccess;
