"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { TimeSupportDetailImage } from "@/features/use-cases/assets";
import { Icon11, Icon12, Icon13 } from "@/features/use-cases/assets/icons";
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

export const PaymentFlows = () => {
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
            Real-Time Support During Payment Flows
          </Typography>
          <Typography variant="body1" color="grey">
            In moments where users are making time-sensitive payments—such as
            bill settlements, international transfers, or deadline-driven
            fees—any confusion or delay can result in frustration, failed
            transactions, or abandoned processes.
          </Typography>
        </Box>
      </SlideUpInView>
      <Box mx={6} my={2}>
        <Box display={"flex"} flexDirection={"column"} gap={1.5} py={5} px={2}>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Context
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            In moments where users are making time-sensitive payments—such as
            bill settlements, international transfers, or deadline-driven
            fees—any confusion or delay can result in frustration, failed
            transactions, or abandoned processes.
          </Typography>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Industry Pain Point
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Static support models, such as FAQ pages or post-transaction emails,
            are too late to retain the user. The gap between issue and
            resolution causes user drop-off and increased customer complaints.
          </Typography>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Strategic Approach
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Embed live help triggers directly within payment flows. Whether its
            via contextual chat, smart alerts, or embedded guidance, empowering
            users at the exact moment of hesitation results in smoother
            completion rates and higher satisfaction.
          </Typography>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Capabilities & Outcomes
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={"14px"}
                  >
                    Smart Intervention Points
                  </Typography>
                }
                secondary="Support prompts appear dynamically based on factors like transaction amount, geo-location, device type, or user history."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={"14px"}
                  >
                    Real-Time Issue Diagnosis
                  </Typography>
                }
                secondary="Use backend logs and error codes to interpret the issue and display a friendly explanation with a guided path forward."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={"14px"}
                  >
                    Dynamic FAQs and Tooltips
                  </Typography>
                }
                secondary="Present brief, tailored help content as the user fills in payment fields—reducing errors and uncertainty"
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
                  src={TimeSupportDetailImage}
                  alt="TimeSupportDetail"
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
                Real-Time Support During Payment Flows
              </Typography>
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"center"}
                justifyContent={"start"}
                gap={1}
              >
                <Avatar
                  src={Icon11.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Instant Issue Resolution in Checkout Journeys
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
                  src={Icon12.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Proactive Help to Boost Conversions
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
                  src={Icon13.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  24/7 Multi-Channel Payment Support
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Proactive Support Inside Checkout Journeys
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Empower users during critical checkout stages by integrating
            predictive support within the payment experience. Whether a card is
            declined or a user pauses too long, a proactive prompt can guide
            them instantly. This reduces failed transactions and enhances trust,
            especially in high-stakes payments like international transfers or
            subscriptions.
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Key Highlights:
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Detect hesitation or errors in real-time and surface relevant
            guidance
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Preempt user frustration with friendly in-flow assistance
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Reduce reliance on post-transaction support teams
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Best For Services Like:
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Smart Behaviour Tracking
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            UX Optimisation for Payments
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Automated Support Triggers
          </Typography>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Assisted Payments for Sensitive Transactions
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Not all payments are created equal. For large amounts,
            compliance-sensitive payments, or first-time users, offer embedded
            human or AI support directly in the transaction flow. This can be in
            the form of a Need help? CTA, voice-assisted navigation, or
            auto-fill checks.
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Key Highlights:
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Personalised help for high-risk or large-value payments
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Build trust by offering optional reassurance during payment
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Improve conversion rates in complex or regulated flows
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Best For Services Like:
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Customer Journey Mapping
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Compliance UX Integration
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            High-Touch Digital Transactions
          </Typography>
        </Box>
      </Box>
    </>
  );
};
