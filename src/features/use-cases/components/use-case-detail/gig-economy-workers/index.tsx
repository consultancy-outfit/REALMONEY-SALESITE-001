"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { IncomeVerificationDetailImage } from "@/features/use-cases/assets";
import { Icon14, Icon15, Icon16 } from "@/features/use-cases/assets/icons";
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

export const GigEconomyWorkers = () => {
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
            Income Verification for Gig Economy Workers
          </Typography>
          <Typography variant="body1" color="grey">
            Secure and real-time income validation tailored to freelancers,
            contractors, and gig professionals.
          </Typography>
        </Box>
      </SlideUpInView>
      <Box mx={6} my={2}>
        <Box display={"flex"} flexDirection={"column"} gap={1.5} py={5} px={2}>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Overview
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            In today’s dynamic economy, a growing segment of the workforce earns
            income from multiple gig platforms—such as ride-sharing, delivery
            apps, freelance portals, or consulting gigs. Traditional income
            verification processes fail to capture this complexity, leading to
            delays or outright rejections in financial services like loans,
            mortgages, or account approvals.
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            This use case empowers financial institutions and fintech platforms
            to verify gig workers income in a fast, accurate, and user-consented
            way—driving inclusion while maintaining compliance.
          </Typography>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Key Features
          </Typography>
          <List>
            <ListItem disableGutters>
              <ListItemText
                primary="Multi-Source Aggregation"
                secondary="Collect income data across platforms like Uber, Upwork, Fiverr, or DoorDash with the users consent."
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary="Real-Time Data Syncing"
                secondary="Fetch updated income records using secure APIs to provide the latest earning history."
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary="Income Pattern Analysis"
                secondary="Understand weekly/monthly trends, frequency of jobs, and payment consistency to make better risk decisions."
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary="PDF or Digital Proof Generation"
                secondary=" Generate downloadable, verified income reports that users can attach to applications (e.g., rental, credit, or government aid)."
              />
            </ListItem>
          </List>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Ideal Use Scenarios
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Loan and credit applications for gig workers
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Renting or leasing services needing income proof
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Buy Now Pay Later (BNPL) platforms
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Personal finance apps that offer tax and budgeting tools
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Neobanks or challenger banks onboarding self-employed users
          </Typography>
          <Grid container my={3}>
            <Grid
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              size={{ xs: 12, md: 6 }}
            >
              <ScaleInView>
                <Image
                  src={IncomeVerificationDetailImage}
                  alt="IncomeVerification"
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
                Income Verification for Gig Economy Workers
              </Typography>
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"center"}
                justifyContent={"start"}
                gap={1}
              >
                <Avatar
                  src={Icon14.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Real-Time Income Data from Multiple Platforms
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
                  src={Icon15.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Reduce Risk in Lending & Credit Decisions
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
                  src={Icon16.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Self-Employed Friendly Verification Flow
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Business Impact
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
                    Reduce Manual Documentation Time
                  </Typography>
                }
                secondary="Eliminate the back-and-forth of requesting screenshots or paper payslips."
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
                    Stay Compliant with Affordability Checks
                  </Typography>
                }
                secondary="Meet local lending regulations by proving affordability with up-to-date digital income data."
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
                    Offer Personalised Financial Products
                  </Typography>
                }
                secondary="Use insights from income patterns to build custom offers, like credit limits or savings suggestions."
              />
            </ListItem>
          </List>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Which of My Services This Belongs To:
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
                    KYC / KYB Verification Services
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
                    Open Banking Integrations
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
                    Income Insights & Analytics
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
                    Lending & Credit Risk Scoring Modules
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
