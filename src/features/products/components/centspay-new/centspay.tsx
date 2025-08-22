"use client";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import {
  Box,
  Button,
  Chip,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  cp1,
  cp2,
  cp3,
  cp4,
  cp5,
  cp6,
  productBanner,
} from "../../assets/images";

import { APP_ROUTES } from "@/constants/routes";
import CircleIcon from "@mui/icons-material/Circle";
import { useRouter } from "next/navigation";

function CentspayFeature() {
  const router = useRouter();
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
              label="Everyday Money, Made Exceptionally Smart"
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
              Centspay{" "}
            </Typography>
            <Box className="spdl-sub-1" mt={2}>
              <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${cp1.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "32px",
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
                  {`Centspay redefines how people manage, move, and multiply their money. From real-time micro-payments and multi-currency wallets to intelligent spend analytics and peer-to-peer transfers, this suite of tools empowers users with financial agility, security, and insight. Whether saving spare change or making global payments, Centspay ensures every penny works harder and smarter — with built-in KYC and seamless compliance.`}
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
                      primary="Multi-Currency Wallet"
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
                      primary="Real-Time Micro-Payments"
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
                      primary="Currency Exchange & Conversion"
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
                      primary="Savings with Cents"
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
                      primary="Peer-to-Peer Transfers"
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
                      backgroundImage: `url(${cp2.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "32px",
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
                    Multi-Currency Wallet{" "}
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
                    One Wallet, All Your Currencies — Instantly Accessible{" "}
                  </Typography>
                </Stack>

                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Store, send, and receive funds in multiple currencies
                    through a unified digital wallet. Ideal for global users and
                    frequent travelers, the wallet eliminates conversion delays
                    and costly fees.
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
                        primary="Hold and manage GBP, EUR, USD & more"
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
                        primary="Instantly switch between currencies"
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
                        primary="Linked to bank accounts and cards"
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
                        primary="Secure encryption with biometric access"
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
                        primary="Real-time currency valuation"
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
                      backgroundImage: `url(${cp3.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "32px",
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
                    Real-Time Micro-Payments{" "}
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
                    Tiny Transactions, Big Efficiency
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Enable fast, frictionless micro-payments — perfect for
                    content platforms, gig economy apps, and pay-as-you-go
                    services. Built for volume and speed, with full
                    traceability.
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
                        primary="Sub-£1 transactions supported"
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
                        primary="Instant settlement and low fees"
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
                        primary="Seamless PIS integration"
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
                        primary="Smart billing rules for subscriptions or usage-based payments"
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
                        primary="Ideal for digital tipping, pay-per-view, and rewards"
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
                      backgroundImage: `url(${cp4.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "32px",
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
                    Currency Exchange & Conversion{" "}
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
                    Exchange Smarter — Save on Every Conversion{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Convert currencies at live market rates with minimal markup.
                    Our intelligent FX engine helps users save, especially on
                    high-volume or frequent transactions.
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
                        primary="Live mid-market exchange rates"
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
                        primary="Automated alerts for rate changes"
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
                        primary="Low-cost, transparent pricing"
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
                        primary="Batch conversions for bulk transactions"
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
                        primary="Fully compliant cross-border exchange"
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
                      backgroundImage: `url(${cp5.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "32px",
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
                    Savings with Cents{" "}
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
                    Turn Spare Change into Smart Savings{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Round up every purchase and send the spare change to your
                    savings wallet. Effortless, automatic, and customisable —
                    perfect for building habits that grow wealth.
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
                        primary="Round-up rules (to nearest £1, £5, etc.)"
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
                        primary="Set goals and saving targets"
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
                        primary="Auto-transfer to dedicated savings pots"
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
                        primary="Gamified saving milestones"
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
                        primary="Insights on saving patterns"
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
                      height: { xs: 250, sm: 350, md: 700 },
                      backgroundImage: `url(${cp6.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "32px",
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
                    Peer-to-Peer Transfers{" "}
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
                    Send and Receive Money Instantly — Anywhere, Anytime{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Send money to friends, family, or freelancers with just a
                    tap. Fast, secure, and borderless, Centspay supports P2P
                    payments that are as easy as messaging.
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
                        primary="Instant transfer to wallet or bank"
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
                        primary="QR-code and contact-based sending"
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
                        primary="Recurring payment setup"
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
                        primary="No hidden fees or delays"
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
                        primary="In-app messaging for payment notes"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Container>

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

export default CentspayFeature;
