"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { PersonFinanceDetailImage } from "@/features/use-cases/assets";
import { Icon1, Icon2, Icon3 } from "@/features/use-cases/assets/icons";
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

export const AppBudgeting = () => {
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
            Personal Finance App Budgeting
          </Typography>
          <Typography variant="body1" color="grey">
            Empower users to take control of their financial lives by
            integrating bank account data into a personal finance app. Enable
            automated transaction categorisation, budget tracking, savings
            insights, and spending alerts for a truly personalised financial
            experience.
          </Typography>
        </Box>
      </SlideUpInView>
      <Box mx={6} my={2}>
        <Box display={"flex"} flexDirection={"column"} gap={1.5} py={5} px={2}>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Problem Statement:
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Users often struggle to manage their finances effectively due to
            fragmented bank data and manual tracking. Traditional budgeting
            methods lack real-time updates and require too much effort.
          </Typography>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Solution:
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Leverage Open Banking APIs to access real-time bank account and
            transaction data. Use data enrichment and intelligent categorisation
            to deliver tailored financial insights, allowing users to:
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Set spending limits across categories (e.g., food, travel, shopping)
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Receive real-time alerts on overspending
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Track monthly cash flow and financial goals
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Identify recurring payments and optimise subscriptions
          </Typography>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Who Benefits?
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            End-users who want control over their budgeting
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Fintech startups offering budget solutions
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Neobanks enhancing customer retention
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Wealth & financial advisors offering app-based services
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
                  src={PersonFinanceDetailImage}
                  alt="PersonFinance"
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
                Security & Compliance:
              </Typography>
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"center"}
                justifyContent={"start"}
                gap={1}
              >
                <Avatar
                  src={Icon1.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  PSD2 & GDPR-compliant user consent flows
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
                  src={Icon2.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  AES-256 encryption for data at rest and TLS for data in
                  transit
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
                  src={Icon3.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Payment cards takes the hassle-free of using ATMs abroad.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Functional & Technical Details
          </Typography>
          <List>
            <Typography fontWeight={"bold"} fontSize={"18px"}>
              How It Works:
            </Typography>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={"18px"}
                  >
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    User Consent & Connection
                  </Typography>
                }
                secondary="Users connect one or more bank accounts via secure APIs and provide explicit consent for data sharing."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={"18px"}
                  >
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Data Retrieval
                  </Typography>
                }
                secondary="Account and transaction data is pulled in real-time via Open Banking APIs."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={"18px"}
                  >
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Data Enrichment
                  </Typography>
                }
                secondary="Transactions are cleaned, categorised (e.g., groceries, entertainment), and tagged with merchant names and logos."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={"18px"}
                  >
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Budget Engine
                  </Typography>
                }
                secondary="Users can define monthly budgets per category. The system dynamically tracks their progress and triggers alerts as thresholds are crossed."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={"18px"}
                  >
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Visual Insights & Dashboard
                  </Typography>
                }
                secondary="Interactive graphs and dashboards show cash flow trends, spending comparisons, and suggestions for saving."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={"18px"}
                  >
                    <span style={{ fontSize: "15px", marginRight: "8px" }}>
                      ●
                    </span>
                    Behavioural Analytics
                  </Typography>
                }
                secondary="Spending patterns are analysed over time to suggest habits, flag risky behaviours, or promote saving challenges."
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};
