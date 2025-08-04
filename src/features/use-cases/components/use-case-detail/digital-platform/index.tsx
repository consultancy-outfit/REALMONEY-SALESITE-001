"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { FrictionlessCustomerDetailImage } from "@/features/use-cases/assets";
import { Icon4, Icon6, Icon7, Icon5 } from "@/features/use-cases/assets/icons";
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

export const DigitalPlatform = () => {
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
            Simplified and Secure Customer Onboarding for Digital Platforms
          </Typography>
          <Typography variant="body1" color="grey">
            In the age of digital transformation, user onboarding can no longer
            be a slow, paper-heavy process. Businesses across banking, fintech,
            insurance, and lending sectors need fast, seamless onboarding that
            does not compromise on compliance. This use case demonstrates how
            leveraging Open Banking-based Identity & KYC services can transform
            user acquisition into a frictionless experience.
          </Typography>
        </Box>
      </SlideUpInView>
      <Box mx={6} my={2}>
        <Box display={"flex"} flexDirection={"column"} gap={1.5} py={5} px={2}>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            User Scenario
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            User: A customer signs up on a digital lending app.
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Traditional flow: The customer is asked to upload ID documents,
            utility bills, and a selfie. This adds delays, causes drop-offs, and
            invites fraud risk.
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            With Open Banking: The app asks the customer to securely connect
            their bank account. Identity and ownership are instantly verified,
            streamlining onboarding to under 60 seconds—while meeting regulatory
            checks like AML and KYC.
          </Typography>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Key Benefits
          </Typography>
          <List>
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
                    Faster Onboarding: Reduce sign-up friction with real-time
                    verification.
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
                    Enhanced Security: Verify identity through secure bank data,
                    reducing fraud risks.
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
                    Reduced Drop-offs: Minimise form fatigue and delays that
                    hurt conversion.
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
                    Regulatory Compliance: Automatically fulfil KYC, AML, and
                    PSD2 requirements.
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
                    Improved UX: Seamless, mobile-first experience with no
                    document uploads.
                  </Typography>
                }
              />
            </ListItem>
          </List>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Implementation Tools
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            AIS connection APIs
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Identity Match endpoint
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Consent Management UI
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Audit Trail & Logging
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Developer sandbox and SDK
          </Typography>
          <Grid container my={3}>
            <Grid
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              justifyContent={"center"}
              size={{ xs: 12, md: 6 }}
              p={{ xs: 0, sm: 4 }}
            >
              <Typography fontWeight={600} fontSize={"30px"} color="black">
                Key Features of Streamlined Onboarding
              </Typography>
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"center"}
                justifyContent={"start"}
                gap={1}
              >
                <Avatar
                  src={Icon4.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  How Open Banking Simplifies Onboarding
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
                  src={Icon5.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Smart Tools for Faster Customer Signup
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
                  src={Icon6.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Unlock Seamless Entry with These Features
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
                  src={Icon7.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Powering a Smoother Start for Every User
                </Typography>
              </Box>
            </Grid>
            <Grid
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              size={{ xs: 12, md: 6 }}
            >
              <ScaleInView>
                <Image
                  src={FrictionlessCustomerDetailImage}
                  alt="FrictionlessCustomer"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </ScaleInView>
            </Grid>
          </Grid>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Real-World Example
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            A digital wealth management app saw a 35% increase in user
            completion rates after switching from manual onboarding to Open
            Banking-based KYC. Average verification time dropped from 3 days to
            under 90 seconds, and customer support queries decreased by 40%.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
