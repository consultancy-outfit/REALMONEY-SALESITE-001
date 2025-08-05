"use client";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  productBanner,
  spdl1,
  spdl2,
  spdl3,
  spdl4,
  spdl5,
  spdl6,
  spdl7,
  spdl8,
  spdl9,
  spdlSub1,
  spdlSub2,
  spdlSub3,
  spdlSub4,
  spdlSub5,
} from "../../assets/images";

import CircleIcon from "@mui/icons-material/Circle";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/routes";

function SmartBackDataLayerFeatures() {
  const router =useRouter()
  return (
    <>
      <Box
        sx={{
          bgcolor: "#010101",
          height: "100%",
          py: { xs: 4 },
        }}
      >
        <Container maxWidth="xl">
          <Stack alignItems={"center"} justifyContent={"center"} gap={2}>
            <Chip
              sx={{
                height: "auto",
                "& .MuiChip-label": {
                  display: "block",
                  whiteSpace: "normal",
                  color: "#FFFFFF",
                  p: 1,
                },
              }}
              label="Powering Smarter Financial Data"
              variant="outlined"
            />
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 48,
                textAlign: { xs: "center", md: "left" },
                mb: 2,
              }}
            >
              Smart Bank Data Layer
            </Typography>
            <Box className="spdl-sub-1" mt={2}>
              <SlideSidewayInView>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 350, md: 600 },
                  backgroundImage: `url(${spdl1.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 2,
                  boxShadow: 3,
                  display: "block",
                  margin: { xs: "auto", md: "unset" },
                  py: 2,
                }}
              />
              </SlideSidewayInView>
              <Box mt={2}>
                <Typography
                  variant="body1"
                  color="#C0C0C0"
                  fontSize={20}
                  fontWeight={700}
                >
                  The Smart Bank Data Layer is the backbone of your Open Banking
                  ecosystem. It provides secure, consent-driven access to user
                  bank accounts and transforms that data into actionable
                  intelligence. With seamless integrations to thousands of UK
                  and EU banks, businesses can deliver more personalised,
                  compliant, and intelligent financial services. From accessing
                  accounts to predicting risk, this layer fuels fintech
                  innovation, lending automation, and budgeting excellence.
                  Services Included: Account Information Services Payment
                  Initiation Services Bank Data Aggregation Transaction
                  Categorisation Data Enrichment Income & Expense Insights Risk
                  & Credit Scoring
                </Typography>

                <Typography variant="h6" mt={4} gutterBottom color="#C0C0C0">
                  Services Included:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon
                        sx={{
                          fontSize: 12,
                          color: "#C0C0C0",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#C0C0C0", fontSize: 20 },
                      }}
                      primary="Account Information Services"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon
                        sx={{
                          fontSize: 12,
                          color: "#C0C0C0",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#C0C0C0", fontSize: 20 },
                      }}
                      primary="Payment Initiation Services"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon
                        sx={{
                          fontSize: 12,
                          color: "#C0C0C0",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#C0C0C0", fontSize: 20 },
                      }}
                      primary="Bank Data Aggregation"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon
                        sx={{
                          fontSize: 12,
                          color: "#C0C0C0",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#C0C0C0", fontSize: 20 },
                      }}
                      primary="Transaction Categorisation"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon
                        sx={{
                          fontSize: 12,
                          color: "#C0C0C0",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#C0C0C0", fontSize: 20 },
                      }}
                      primary="Data Enrichment"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon
                        sx={{
                          fontSize: 12,
                          color: "#C0C0C0",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#C0C0C0", fontSize: 20 },
                      }}
                      primary="Income & Expense Insights"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon
                        sx={{
                          fontSize: 12,
                          color: "#C0C0C0",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { color: "#C0C0C0", fontSize: 20 },
                      }}
                      primary="Risk & Credit Scoring"
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Container maxWidth="lg">
              <Box className="spdl-sub-2" mt={2}>
                <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${spdl2.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                  }}
                />

                </SlideSidewayInView>
                <Stack alignItems={"center"} justifyContent={"center"}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 48,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Account Information Services (AIS){" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 24,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Real-Time Financial Visibility
                  </Typography>
                </Stack>

                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    AIS provides seamless access to real-time customer bank
                    account data—balances, transactions, and account
                    details—using open banking APIs. Ideal for personal finance,
                    lending, and credit scoring, AIS empowers businesses to make
                    smarter, data-backed decisions.
                  </Typography>

                  <Typography variant="h6" mt={4} gutterBottom color="#C0C0C0">
                    Key Features:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Real-time balance and transaction history access"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Supports multiple UK & EU banks"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Consent-based and secure data sharing"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Ideal for affordability, budgeting, and reconciliation"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Easy integration with developer-ready API"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box className="spdl-sub-3" mt={2}>
                <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${spdl3.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                  }}
                />

                </SlideSidewayInView>
                <Stack alignItems={"center"} justifyContent={"center"}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 48,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Payment Initiation Services (PIS)
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 24,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Seamless, Instant Payments – Without the Cards
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Enable users to make direct payments from their bank
                    accounts, bypassing cards and reducing fees. PIS supports
                    one-time or recurring payments with instant confirmation,
                    offering a modern payment alternative built on trust and
                    speed.
                  </Typography>

                  <Typography variant="h6" mt={4} gutterBottom color="#C0C0C0">
                    Key Features:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Instant bank-to-bank payments"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Strong Customer Authentication (SCA) built-in"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Lower fees and reduced fraud risk"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Ideal for e-commerce, subscriptions, and bill pay"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Compliant with PSD2 standards"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box className="spdl-sub-4" mt={2}>
                <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${spdl4.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                  }}
                />

                </SlideSidewayInView>
                <Stack alignItems={"center"} justifyContent={"center"}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 48,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Bank Data Aggregation{" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 24,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Unified Financial Access Across Banks{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Aggregate data from multiple bank accounts and institutions
                    into one cohesive feed. This eliminates fragmentation and
                    gives platforms a complete view of a user’s financial life
                    in a single integration.
                  </Typography>

                  <Typography variant="h6" mt={4} gutterBottom color="#C0C0C0">
                    Key Features:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Multi-bank and multi-account aggregation"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Normalised data for faster processing"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Unified feed for personal and business accounts"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Simplifies user onboarding and analysis"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Secure, consent-driven connections"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box className="spdl-sub-5" mt={2}>
                <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${spdl5.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                  }}
                />

                </SlideSidewayInView>
                <Stack alignItems={"center"} justifyContent={"center"}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 48,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Transaction Categorisation{" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 24,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Make Sense of Every Spend{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Turn raw transaction data into meaningful insights by
                    automatically tagging and classifying transactions by type,
                    merchant, or behaviour. Perfect for budgeting, lending, and
                    financial wellness tools
                  </Typography>

                  <Typography variant="h6" mt={4} gutterBottom color="#C0C0C0">
                    Key Features:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Auto-tagging of income and expenses"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Merchant recognition and mapping"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Support for custom categories"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Accurate classification for credit scoring"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Works across multiple currencies and banks"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box className="spdl-sub-6" mt={2}>
                <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${spdl6.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                  }}
                />

                </SlideSidewayInView>
                <Stack alignItems={"center"} justifyContent={"center"}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 48,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Data Enrichment
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 24,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Add Intelligence to Every Data Point{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Go beyond the basics with enriched financial data that
                    includes geolocation, merchant logos, categorisation, and
                    recurring pattern recognition. This makes data cleaner,
                    smarter, and more actionable.
                  </Typography>

                  <Typography variant="h6" mt={4} gutterBottom color="#C0C0C0">
                    Key Features:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Enhanced transaction metadata"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Clean, structured datasets for analytics"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Recognise subscriptions, bills, and income"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Better UX with enriched banking visuals"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Improves fraud detection and spend analysis"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box className="spdl-sub-7" mt={2}>
                <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${spdl7.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                  }}
                />

                </SlideSidewayInView>
                <Stack alignItems={"center"} justifyContent={"center"}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 48,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Income & Expense Insights
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 24,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Predict Financial Health with Confidence{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Understand income flows, spending habits, and recurring
                    commitments to assess affordability or build personalised
                    financial tools. Ideal for lenders, employers, and budgeting
                    apps.
                  </Typography>

                  <Typography variant="h6" mt={4} gutterBottom color="#C0C0C0">
                    Key Features:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Detect salary payments and employer info"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Identify fixed vs discretionary expenses"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Recognise irregular and gig economy income"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Supports affordability and cash flow modelling"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Flexible APIs for custom dashboards"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box className="spdl-sub-8" mt={2}>
                <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${spdl8.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                  }}
                />

                </SlideSidewayInView>
                <Stack alignItems={"center"} justifyContent={"center"}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 48,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Risk & Credit Scoring{" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 24,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Data-Powered Credit Decisions
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Leverage enriched transaction data to assess financial risk,
                    score applicants, and determine creditworthiness without
                    relying on traditional credit bureaus.
                  </Typography>

                  <Typography variant="h6" mt={4} gutterBottom color="#C0C0C0">
                    Key Features:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Alternative credit scoring models"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Real-time financial behaviour analysis"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Income and stability evaluation"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Early warning risk indicators"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Supports BNPL, loans, and underwriting platforms"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box className="spdl-sub-9" mt={2}>
                <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${spdl9.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: { xs: "auto", md: "unset" },
                    py: 2,
                  }}
                />

                </SlideSidewayInView>
                <Stack alignItems={"center"} justifyContent={"center"}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 48,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Payment Initiation Services (PIS){" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 24,
                      textAlign: { xs: "center", md: "left" },
                      mt: 2,
                    }}
                  >
                    Seamless, Instant Payments – Without the Cards{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Enable users to make direct payments from their bank
                    accounts, bypassing cards and reducing fees. PIS supports
                    one-time or recurring payments with instant confirmation,
                    offering a modern payment alternative built on trust and
                    speed.
                  </Typography>

                  <Typography variant="h6" mt={4} gutterBottom color="#C0C0C0">
                    Key Features:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Instant bank-to-bank payments"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Strong Customer Authentication (SCA) built-in"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Lower fees and reduced fraud risk"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Ideal for e-commerce, subscriptions, and bill pay"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: "#C0C0C0",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          sx: { color: "#C0C0C0", fontSize: 20 },
                        }}
                        primary="Compliant with PSD2 standards"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Container>

            <Grid container mt={4} spacing={2}>
              <Grid size={{ xs: 12 }}>
                <Stack flexDirection={"row"} gap={2}>
                  <Typography
                    variant="body1"
                    color="white"
                    fontSize={35}
                    fontWeight={400}
                  >
                    Benefits
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#F0F0F0"
                    fontSize={16}
                    fontWeight={100}
                    px={10}
                  >
                    The Smart Bank Data Layer gives your platform the
                    intelligence, speed, and flexibility to build better
                    financial products—from budgeting tools to instant loans—by
                    turning raw bank data into valuable, actionable insights.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 380 },
                      backgroundImage: `url(${spdlSub1.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 2,
                      boxShadow: 3,
                      display: "block",
                      margin: { xs: "auto", md: "unset" },
                      py: 2,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="white"
                    fontSize={20}
                    fontWeight={400}
                  >
                    Real-Time Financial Access
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#F0F0F0"
                    fontSize={16}
                    fontWeight={400}
                  >
                    Instantly connect to accounts across banks and retrieve
                    up-to-date financial data. Power your apps with live
                    information for smarter decisions.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 380 },
                      backgroundImage: `url(${spdlSub2.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 2,
                      boxShadow: 3,
                      display: "block",
                      margin: { xs: "auto", md: "unset" },
                      py: 2,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="white"
                    fontSize={20}
                    fontWeight={400}
                  >
                    Actionable Data Intelligence{" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#F0F0F0"
                    fontSize={16}
                    fontWeight={100}
                  >
                    Turn raw transaction data into insights with categorisation
                    and enrichment.Gain visibility into spending, income trends,
                    and user behaviors.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 380 },
                      backgroundImage: `url(${spdlSub3.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 2,
                      boxShadow: 3,
                      display: "block",
                      margin: { xs: "auto", md: "unset" },
                      py: 2,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="white"
                    fontSize={20}
                    fontWeight={400}
                  >
                    Frictionless Payment Flows{" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#F0F0F0"
                    fontSize={16}
                    fontWeight={100}
                  >
                    Initiate seamless bank payments with full PSD2-compliant
                    flows. Reduce drop-offs and delays in money movement.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 380 },
                      backgroundImage: `url(${spdlSub4.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 2,
                      boxShadow: 3,
                      display: "block",
                      margin: { xs: "auto", md: "unset" },
                      py: 2,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="white"
                    fontSize={20}
                    fontWeight={400}
                  >
                    Developer-First Integrations{" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#F0F0F0"
                    fontSize={16}
                    fontWeight={100}
                  >
                    Use powerful APIs, SDKs, and sandbox tools to build quickly.
                    Launch smarter products with reliable, scalable
                    connectivity.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 380 },
                      backgroundImage: `url(${spdlSub5.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 2,
                      boxShadow: 3,
                      display: "block",
                      margin: { xs: "auto", md: "unset" },
                      py: 2,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="white"
                    fontSize={20}
                    fontWeight={400}
                  >
                    Better Credit & Risk Profiling
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#F0F0F0"
                    fontSize={16}
                    fontWeight={100}
                  >
                    Analyse affordability and assess financial risk in real
                    time. Enable lenders and platforms to offer faster, fairer
                    decisions.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Box
              sx={{
                width: "100%",
                height: { xs: 500 },
                backgroundImage: `url(${productBanner.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 2,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                px: { xl: 30, md: 10, sm: 5, xs: 2 },
              }}
            >
              <Stack gap={2} alignItems={"center"} mt={5}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: 28,
                    textAlign: { xs: "center" },
                  }}
                >
                  Get Started with Digital and Smart Open Banking Today!
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#47D3FF",
                    color: "#010101",
                    mt: 3,
                    borderRadius: 18,
                  }}
                  disableRipple
                  disableTouchRipple
                  disableFocusRipple
                  onClick={() => router.push(APP_ROUTES?.Get_STARTED)}
                >
                  Get Started
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default SmartBackDataLayerFeatures;
