"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import {
  CardDetail5Image,
  HeroSection5Image,
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

export const PrecisionConsent = () => {
  return (
    <>
      <SlideUpInView>
        <Box display={"flex"} flexDirection={"column"} gap={2} px={6}>
          <Typography variant="h2" color="white" fontWeight={600}>
            Empower Every Payment with Precision Consent
          </Typography>
          <Typography variant="body1" color="white"
               sx={{
              color: "#C0C0C0",
              fontWeight: 500,
              fontSize: "25px",
            }}
          >
            In regulated financial environments, control over user consent is
            not just a feature—its a legal requirement. Centspay offers a fully
            compliant, consent-first infrastructure for initiating payments,
            ensuring transparency, traceability, and trust at every stage of the
            payment flow.
          </Typography>
          <Image
            src={HeroSection5Image}
            alt="HeroSection5"
            style={{
              width: "100%",
              height:" auto",
              maxHeight: "524px",
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
          Built for Regulated Platforms—Designed for Humans
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
          Whether you're building a fintech app, payroll service, or digital
          wallet, managing user consent for payments and data access is
          essential. Centspay provides embedded consent workflows that are
          user-friendly, audit-ready, and aligned with UK and EU regulations.
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
          Every transaction is backed by explicit user permissions—granular,
          time-bound, and revocable. This ensures your operations remain
          compliant with regulations like PSD2, GDPR, and FCA guidelines,
          without sacrificing user experience.
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Box width={"fit-content"}>
            <Typography
              fontWeight={600}
              fontSize={"30px"}
              color="white"
              textAlign={"center"}
            >
              Dynamic Consent Control in Real Time
            </Typography>
            <Typography fontWeight={300} fontSize={"15px"} color="white"
                 sx={{
              color: "#C0C0C0",
              fontWeight: 500,
              fontSize: "25px",
            }}
            >
              Centspays Consent Engine allows platforms to configure, monitor,
              and manage consent at a transactional or session level. Users can
              grant permissions for:
            </Typography>
            <Box ml={4}>
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
                        Initiating single or recurring payments
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
                        Accessing account information (AIS)
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
                        Sharing transaction history or balance snapshots
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
                        Linking multiple bank accounts
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
            <Typography fontWeight={300} fontSize={"15px"} color="white">
              Our UI kits and APIs allow easy integration of consent
              screens—ensuring frictionless journeys without regulatory
              shortcuts.
            </Typography>
          </Box>
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
              Key Capabilities
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
                      Multi-Layered Consent Management
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      Capture user permissions with different scopes (e.g.,
                      read-only, initiate payments, duration-based).
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
                      Transparent Audit Trails
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      Log every consent interaction, including IP, timestamp,
                      user agent, and exact permission granted.
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
                      Revocation & Expiry Handling
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      Auto-expire access tokens and refresh tokens upon
                      revocation or scheduled expiry, with alerting workflows.
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
                      FCA & PSD2-Compliant Flows
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      Out-of-the-box support for consent-based AISP and PISP
                      journeys.
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
                src={CardDetail5Image}
                alt="CardDetail5"
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
          A Trust Layer That Scales
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
          Consent does not need to slow you down. Centspays infrastructure is
          scalable, flexible, and secure—enabling you to move funds while
          proving user permission at every step. As open banking evolves into
          open finance, we ensure you are always audit-ready.
        </Typography>
      </Box>
    </>
  );
};
