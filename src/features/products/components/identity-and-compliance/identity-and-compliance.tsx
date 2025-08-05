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
  Typography
} from "@mui/material";
import {
  ic1,
  ic2,
  ic3,
  ic4,
  ic5,
  productBanner
} from "../../assets/images";

import { APP_ROUTES } from "@/constants/routes";
import CircleIcon from "@mui/icons-material/Circle";
import { useRouter } from "next/navigation";

function IdentityAndComplianceFeature() {
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
              label="Trust. Verify. Comply Identity Solutions That Power Confident Finance"
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
              Identity & Compliance{" "}
            </Typography>
            <Box className="spdl-sub-1" mt={2}>
              <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${ic1.src})`,
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
                  {` Identity & Compliance services ensure that businesses can
                  onboard users with confidence, meet regulatory standards, and
                  manage user consent in a compliant, user-friendly way. Built
                  on direct access to verified bank data and PSD2-compliant
                  flows, this category delivers next-generation digital
                  identity, secure onboarding, and cross-border regulatory
                  coverage. Whether you're verifying ownership or managing
                  audit-proof consent, this suite simplifies and secures your
                  compliance journey.`}
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
                      primary="Bank-Based Identity Verification"
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
                      primary="Account Ownership Validation"
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
                      primary="Consent Flow Management"
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
                      primary="PSD2 & FCA Compliance"
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
                      backgroundImage: `url(${ic2.src})`,
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
                    Bank-Based Identity Verification
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
                    Instant Identity Checks, Powered by the Customer’s Own
                    Bank{" "}
                  </Typography>
                </Stack>

                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Leverage the strongest source of verified identity — the
                    user’s bank. This service pulls user details directly from
                    their financial institution, reducing onboarding friction,
                    fraud risk, and KYC costs
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
                        primary="Verified full name, address, date of birth via bank APIs"
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
                        primary="Instant identity confirmation through AIS consent"
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
                        primary="No need for documents or selfies"
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
                        primary="PSD2 and GDPR-compliant user consent"
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
                        primary="Ideal for Fintechs, lenders, and marketplaces"
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
                      backgroundImage: `url(${ic3.src})`,
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
                    Account Ownership Validation{" "}
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
                    Confirm Bank Account Ownership in Seconds{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Prevent fraud and mismatches by validating that a customer
                    is the legal owner of the bank account provided. Especially
                    critical in payments, lending, or onboarding journeys where
                    trust is essential
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
                        primary="Real-time bank account ownership verification"
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
                        primary="Cross-matching of user-entered data with bank-verified data"
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
                        primary="Supports business and personal accounts"
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
                        primary="Useful in loan payouts, refunds, and payouts"
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
                        primary="Reduces payment failure, fraud, and chargebacks"
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
                      backgroundImage: `url(${ic4.src})`,
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
                    Consent Flow Management
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
                    User Consent That’s Compliant and Conversion-Friendly
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Design elegant, transparent consent experiences that meet
                    regulatory requirements without losing users to confusion.
                    Our flows give you full audit trails while optimising
                    conversion.
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
                        primary="Branded or white-labeled consent journeys"
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
                        primary="Time-bound, purpose-bound consent policies"
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
                        primary="Real-time consent dashboard and revocation APIs"
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
                        primary="Multilingual and cross-border ready"
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
                        primary="Fully PSD2, GDPR, and FCA compliant"
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
                      backgroundImage: `url(${ic5.src})`,
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
                    PSD2 & FCA Compliance{" "}
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
                    Built-In Compliance So You Can Focus on Growth{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Navigate the complexity of PSD2, FCA, and GDPR regulations
                    with a platform that’s built to comply. Our services give
                    you plug-and-play access to regulatory-grade banking
                    features without the legal headache.
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
                        primary="Fully PSD2-ready AIS & PIS infrastructure"
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
                        primary="FCA registration support and reporting tools"
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
                        primary="Secure consent and data access logs"
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
                        primary="Ongoing compliance updates and coverage tracking"
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
                        primary="Suitable for UK, EU, and EEA region financial operations"
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

export default IdentityAndComplianceFeature;
