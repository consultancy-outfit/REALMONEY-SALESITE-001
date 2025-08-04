"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { InstantlyKycDetailImage } from "@/features/use-cases/assets";
import {
  Icon16,
  Icon18,
  Icon19,
  Icon20,
} from "@/features/use-cases/assets/icons";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";

export const SecureKyc = () => {
  const theme = useTheme();
  return (
    <>
      <SlideUpInView>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          p={6}
          bgcolor={theme?.palette?.grey?.[100]}
        >
          <Typography variant="h2" color="black" fontWeight={600}>
            Accelerate Crypto Access with Seamless, Secure KYC
          </Typography>
          <Typography variant="body1" color="grey">
            Instant identity verification for crypto users—onboard users in
            seconds while staying compliant with global AML laws.
          </Typography>
        </Box>
      </SlideUpInView>
      <Box mx={6} my={2}>
        <Box display={"flex"} flexDirection={"column"} gap={1.5} py={5} px={2}>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Overview
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            The crypto ecosystem thrives on speed, privacy, and decentralised
            innovation—but regulatory compliance remains non-negotiable.
            Traditional KYC processes are slow, inconsistent, and often cause
            user drop-offs during onboarding.
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            This use case offers a real-time KYC solution tailored for crypto
            platforms, wallets, and exchanges. With biometric verification,
            document scanning, and AML screening powered by AI, crypto platforms
            can onboard users instantly—without sacrificing compliance.
          </Typography>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Key Features
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Typography component="span">
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Document + Biometric Verification
                  </Typography>
                }
                secondary="Users upload ID documents and selfies for instant, automated validation using OCR and liveness checks."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography component="span">
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Sanction & PEP Screening
                  </Typography>
                }
                secondary="Cross-reference user data against global sanctions lists, PEP databases, and crypto fraud registries."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography component="span">
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Device & Behavioural Fingerprinting
                  </Typography>
                }
                secondary="Detect fraud attempts using device intelligence and login behaviour analytics."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography component="span">
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Modular Integration
                  </Typography>
                }
                secondary="Flexible APIs or SDKs for web, mobile, or dApp environments. Easily scale across jurisdictions."
              />
            </ListItem>
          </List>
          <Grid container my={3}>
            <Grid
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              size={{ xs: 12, md: 6 }}
            >
              <ScaleInView>
                <Image
                  src={InstantlyKycDetailImage}
                  alt="InstantlyKyc"
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
              gap={2}
              justifyContent={"center"}
              size={{ xs: 12, md: 6 }}
              p={{ xs: 0, sm: 4 }}
            >
              <Typography fontWeight={600} fontSize={"30px"} color="black">
                Business Impact
              </Typography>
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"center"}
                justifyContent={"start"}
                gap={1}
              >
                <Avatar
                  src={Icon16.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Faster Conversion = Higher Retention
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"center"}
                justifyContent={"start"}
                gap={1}
              >
                <Avatar
                  src={Icon18.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Strengthen Compliance in a High-Risk Sector
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"center"}
                justifyContent={"start"}
                gap={1}
              >
                <Avatar
                  src={Icon19.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Minimise Fraud & Regulatory Fines
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"center"}
                justifyContent={"start"}
                gap={1}
              >
                <Avatar
                  src={Icon20.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Global Coverage
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Which of My Services This Belongs To:
          </Typography>
          <List>
            <Typography fontWeight={300} fontSize={"15px"} color="grey">
              This use case can be grouped under:
            </Typography>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={300}
                    fontSize={"15px"}
                    color="grey"
                  >
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Identity Verification & Biometric KYC
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={300}
                    fontSize={"15px"}
                    color="grey"
                  >
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    AML Screening & Sanctions Checks
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={300}
                    fontSize={"15px"}
                    color="grey"
                  >
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Crypto Compliance Suite
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={300}
                    fontSize={"15px"}
                    color="grey"
                  >
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Web3 Risk Prevention Tools
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};
