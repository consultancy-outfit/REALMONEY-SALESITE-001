"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import {
  CardDetail1Image,
  HeroSection3Image,
} from "@/features/use-cases/assets";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";

export const PaymentWithAhs = () => {
  return (
    <>
      <SlideUpInView>
        <Box display={"flex"} flexDirection={"column"} gap={2} px={6}>
          <Typography variant="h2" color="white" fontWeight={600}>
            Streamlining Business Payments with AHS
          </Typography>
          <Typography variant="body1" color="white"
          sx={{
              color: "#C0C0C0",
              fontWeight: 500,
              fontSize: "25px",
            }}
          >
            A medium-sised enterprise needs to modernise its financial
            operations, replacing spreadsheets and manual tools with automated,
            accurate, and scalable systems.
          </Typography>
          <Image
            src={HeroSection3Image}
            alt="HeroSection3"
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
            }}
        >
          Manual accounts payable and receivable processes often lead to lost
          invoices, payment delays, and inefficient reconciliation. Cash flow
          forecasting becomes guesswork without real-time data, and expense
          tracking is difficult to audit or align with policies.
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
            }}
        >
          Accounts Payable: Digitises invoice intake, approval workflows, and
          payment scheduling to avoid late fees and manual entry errors.
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
          Accounts Receivable: Automates invoicing, tracks outstanding balances,
          and accelerates collections with smart reminders.
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
          Cash Flow & Forecasting: Uses bank transaction data to predict future
          financial positions, liquidity gaps, or surpluses.
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
          Expense Management: Captures, categorises, and enforces expense
          policies through automated review and tagging.
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
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={"center"}
              justifyContent={"start"}
              gap={1}
            >
              <Typography fontWeight={400} fontSize={"20px"} color="white">
                1.
              </Typography>
              <Typography fontWeight={400} fontSize={"20px"} color="white">
                Finance team uploads invoices or connects accounting software.
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={"center"}
              justifyContent={"start"}
              gap={1}
            >
              <Typography fontWeight={400} fontSize={"20px"} color="white">
                2.
              </Typography>
              <Typography fontWeight={400} fontSize={"20px"} color="white">
                Payables and receivables are auto-populated and scheduled.
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={"center"}
              justifyContent={"start"}
              gap={1}
            >
              <Typography fontWeight={400} fontSize={"20px"} color="white">
                3.
              </Typography>
              <Typography fontWeight={400} fontSize={"20px"} color="white">
                Real-time cash position is calculated based on actual bank
                transactions.
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={"center"}
              justifyContent={"start"}
              gap={1}
            >
              <Typography fontWeight={400} fontSize={"20px"} color="white">
                4.
              </Typography>
              <Typography fontWeight={400} fontSize={"20px"} color="white">
                Dashboards show historical and predictive financial trends.
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
                src={CardDetail1Image}
                alt="CardDetail1.1"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </ScaleInView>
          </Grid>
        </Grid>
        <Typography
          fontWeight={600}
          fontSize={"30px"}
          color="white"
          textAlign={"center"}
        >
          Key Benefits:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography
                  component="span"
                  fontWeight={300}
                  fontSize={"15px"}
                  color="white"
                >
                  <span style={{ fontSize: "15px", marginRight: "8px" }}>
                    ●
                  </span>
                  Saves 40–60% of time spent on financial operations.
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
                  color="white"
                >
                  <span style={{ fontSize: "15px", marginRight: "8px" }}>
                    ●
                  </span>
                  Reduces human error and financial risk.
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
                  color="white"
                >
                  <span style={{ fontSize: "15px", marginRight: "8px" }}>
                    ●
                  </span>
                  Provides CFOs with decision-ready, real-time data.
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
                  color="white"
                >
                  <span style={{ fontSize: "15px", marginRight: "8px" }}>
                    ●
                  </span>
                  Enhances vendor trust through prompt, predictable payments.
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
};
