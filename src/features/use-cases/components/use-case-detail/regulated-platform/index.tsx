"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { ConsentManagementDetailImage } from "@/features/use-cases/assets";
import { Icon10, Icon8, Icon9 } from "@/features/use-cases/assets/icons";
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

export const RegulatePlatform = () => {
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
            Smart Consent Management for Regulated Platforms
          </Typography>
          <Typography variant="body1" color="grey">
            Regulated platforms such as banks, lending services, insurance
            providers, and investment apps must collect, manage, and track user
            consent with transparency and compliance. Open Banking enables these
            platforms to build a secure, user-friendly consent framework that
            respects data privacy laws while delivering a seamless user
            experience.
          </Typography>
        </Box>
      </SlideUpInView>
      <Box mx={6} my={2}>
        <Box display={"flex"} flexDirection={"column"} gap={1.5} py={5} px={2}>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Challenge
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            Navigating complex regulations like GDPR, PSD2, and UK Open Banking
            standards can slow down product growth. Manual tracking and unclear
            consent flows lead to poor UX, data misuse risks, and audit issues.
          </Typography>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Solution
          </Typography>
          <Typography fontWeight={300} fontSize={"15px"} color="grey">
            With Open Banking-enabled consent management, platforms can
            implement automated, transparent consent journeys. These allow users
            to understand what data is being shared, for what purpose, and for
            how long—while giving them the power to manage or revoke access
            anytime.
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
                  src={ConsentManagementDetailImage}
                  alt="ConsentManagement"
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
                Features, Benefits & Services
              </Typography>
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"center"}
                justifyContent={"start"}
                gap={1}
              >
                <Avatar
                  src={Icon8.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Granular Consent Controls
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
                  src={Icon9.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Dynamic Consent Dashboard
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
                  src={Icon10.src}
                  sx={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                  variant="rounded"
                />
                <Typography fontWeight={400} fontSize={"20px"}>
                  Regulatory-Compliant Audit Trail
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography fontWeight={600} fontSize={"30px"} color="black">
            Benefits for Regulated Platforms
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Boost Trust and Transparency"
                secondary="Enhance customer confidence by clearly showing how their data is handled."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Accelerate Onboarding and Renewals"
                secondary="Automate recurring consent renewals, saving time for users and compliance teams."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Reduce Legal Risk"
                secondary="Stay aligned with UK and EU compliance requirements while minimising fines and disputes."
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};
