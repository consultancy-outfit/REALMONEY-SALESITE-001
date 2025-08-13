"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import {
  CardDetail4Image,
  HeroSection4Image,
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

export const RemoteTeams = () => {
  return (
    <>
      <SlideUpInView>
        <Box display={"flex"} flexDirection={"column"} gap={2} px={6}>
          <Typography variant="h2" color="white" fontWeight={600}>
            Cross-Border P2P Transfers for Remote Teams
          </Typography>
          <Typography variant="body1" color="white"
            sx={{
              color: "#C0C0C0",
              fontWeight: 500,
              fontSize: "25px",
            }}
          >
            In a global workforce, remote teams are the norm—not the exception.
            Whether you're paying freelancers in Brasil, developers in India, or
            consultants across Europe, Centspay ensures seamless and secure
            peer-to-peer (P2P) payments across borders.
          </Typography>
          <Typography variant="body1" color="white" 
               sx={{
              color: "#C0C0C0",
              fontWeight: 500,
              fontSize: "25px",
            }}
          >
            With multi-currency wallet support and real-time processing,
            businesses can pay remote team members instantly—without delays,
            hidden fees, or third-party complexities.
          </Typography>
          <Image
            src={HeroSection4Image}
            alt="HeroSection4"
            style={{
              width: "100%",
              height:" auto",
              maxHeight: "560px",
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
          Key Features
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <List>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography color="white" fontWeight={500}>
                    ● Multi-Currency Wallets
                  </Typography>
                }
                secondary={
                  <Typography color="white"
                  
                  >
                    Empower your team with digital wallets that support multiple
                    fiat currencies. Manage local payouts in their native
                    currency while maintaining full control from a single
                    dashboard.
                  </Typography>
                }
              />
            </ListItem>

            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography color="white" fontWeight={500}>
                    ● Real-Time Micro & Bulk Transfers
                  </Typography>
                }
                secondary={
                  <Typography color="white">
                    Process instant, traceable transfers—whether you're sending a one-off payment or distributing funds to an entire team at once.
                  </Typography>
                }
              />
            </ListItem>

            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography color="white" fontWeight={500}>
                    ● Competitive Currency Exchange
                  </Typography>
                }
                secondary={
                  <Typography color="white">
                    Benefit from transparent, real-time FX conversion rates to
                    minimise costs and provide value to global team members.
                  </Typography>
                }
              />
            </ListItem>

            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography color="white" fontWeight={500}>
                    ● Integrated KYC & Verification
                  </Typography>
                }
                secondary={
                  <Typography color="white">
                    Ensure compliance and protect against fraud with embedded
                    identity verification and account ownership checks for each
                    recipient.
                  </Typography>
                }
              />
            </ListItem>

            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography color="white" fontWeight={500}>
                    ● Scheduled & Recurring Payments
                  </Typography>
                }
                secondary={
                  <Typography color="white">
                    Automate payroll or project-based transfers with built-in
                    scheduling, reducing admin time and improving reliability.
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
        <Grid container my={3}>
          <Grid
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            size={{ xs: 12, md: 6 }}
            p={{ xs: 0, sm: 4 }}
          >
            <Typography fontWeight={600} fontSize={"30px"} color="white">
              Benefits
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  sx={{ color: "white" }}
                  primary={
                    <Typography
                      component="span"
                      fontWeight={"bold"}
                      fontSize={"14px"}
                    >
                      Instant Global Reach
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      Expand your operations confidently across borders without
                      the need for local banking infrastructure.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  sx={{ color: "white" }}
                  primary={
                    <Typography
                      component="span"
                      fontWeight={"bold"}
                      fontSize={"14px"}
                    >
                      Reduced Transfer Costs
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      Avoid expensive SWIFT and wire fees by using Centspays
                      internal rails and FX conversion capabilities.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  sx={{ color: "white" }}
                  primary={
                    <Typography
                      component="span"
                      fontWeight={"bold"}
                      fontSize={"14px"}
                    >
                      Improved Team Trust & Satisfaction
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      Fast, reliable payments build confidence with your
                      distributed workforce—ensuring happier, more productive
                      collaborators.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  sx={{ color: "white" }}
                  primary={
                    <Typography
                      component="span"
                      fontWeight={"bold"}
                      fontSize={"14px"}
                    >
                      Regulatory Peace of Mind
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      Stay compliant with local and international transfer
                      regulations, backed by secure data sharing and transaction
                      monitoring.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            size={{ xs: 12, md: 6 }}
          >
            <ScaleInView>
              <Image
                src={CardDetail4Image}
                alt="CardDetail4"
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
