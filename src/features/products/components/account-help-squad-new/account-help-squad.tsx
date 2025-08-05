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
  ahs1,
  ahs2,
  ahs3,
  ahs4,
  ahs5,
  ahs6,
  productBanner
} from "../../assets/images";

import { APP_ROUTES } from "@/constants/routes";
import CircleIcon from "@mui/icons-material/Circle";
import { useRouter } from "next/navigation";

function AccountHelpSquadFeature() {
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
              label="Powering Smarter Business Finance — End-to-End Operational Efficiency"
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
              Accountant Help Squad
            </Typography>
            <Box className="spdl-sub-1" mt={2}>
              <SlideSidewayInView>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 350, md: 600 },
                    backgroundImage: `url(${ahs1.src})`,
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
                  {`The Account Help Squad (AHS) is your intelligent financial operations partner — streamlining key business functions from accounts payable and receivable to cash flow forecasting and expense management. Designed for SMEs, startups, and growing enterprises, these tools automate workflows, reduce errors, and bring real-time visibility into financial health. From simplifying vendor payments to helping you plan tomorrow’s spend, AHS drives business efficiency with precision and transparency.`}
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
                      primary="Accounts Payable"
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
                      primary="Accounts Receivable"
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
                      primary="Cash Flow & Forecasting"
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
                      primary="Expense Management"
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
                      primary="Customer Assistance Hub"
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
                      backgroundImage: `url(${ahs2.src})`,
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
                    Accounts Payable{" "}
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
                    Automate Vendor Payments with Control and Confidence
                  </Typography>
                </Stack>

                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Easily manage supplier invoices, approvals, and payouts. Our
                    smart AP system integrates with your banking and accounting
                    platforms to reduce manual errors and ensure timely
                    payments.
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
                        primary="Invoice capture and auto-matching"
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
                        primary="Approval workflows with permissions"
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
                        primary="Real-time payment initiation (PIS) support"
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
                        primary="Bulk payments and batch scheduling"
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
                        primary="Integration with major accounting platforms"
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
                      backgroundImage: `url(${ahs3.src})`,
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
                    Accounts Receivable{" "}
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
                    Get Paid Faster, Smarter — No Chasing Required{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Transform how you collect payments. Our AR tools send
                    invoices, automate reminders, and reconcile incoming
                    payments, so you spend less time chasing and more time
                    scaling.
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
                        primary="Create/send digital invoices instantly"
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
                        primary="Set auto-reminders for due/overdue payments"
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
                        primary="Real-time status tracking and reconciliation"
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
                        primary="Direct bank payment links (via PIS)"
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
                        primary="Insight dashboards for cash inflow trends"
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
                      backgroundImage: `url(${ahs4.src})`,
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
                    Cash Flow & Forecasting
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
                    Predict Tomorrow’s Cash — Today{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Make confident financial decisions with real-time cash flow
                    tracking and intelligent forecasting. Whether you’re
                    planning for payroll or growth, our tools help you stay a
                    step ahead.
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
                        primary="Real-time cash position overview"
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
                        primary="Automated short and long-term forecasting"
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
                        primary="Scenario modeling (best/worst case planning)"
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
                        primary="Alerts for low balances or cash dips"
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
                        primary="Integrated with AP/AR for full financial visibility"
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
                      backgroundImage: `url(${ahs5.src})`,
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
                    Expense Management{" "}
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
                    Control Spend Without Slowing Down Your Team
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Track, approve, and categorise business expenses with ease.
                    Our intuitive platform makes it easy for employees to submit
                    and managers to approve — from anywhere.
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
                        primary="Expense submission via mobile/web"
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
                        primary="Real-time categorisation & policy checks"
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
                        primary="Approval workflows with audit trail"
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
                        primary="Receipt capture and smart OCR"
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
                        primary="Integration with payroll and accounting tools"
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
                      backgroundImage: `url(${ahs6.src})`,
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
                    Customer Assistance Hub{" "}
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
                    Give Your Customers Financial Clarity and Support{" "}
                  </Typography>
                </Stack>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontSize={20}
                    fontWeight={700}
                  >
                    Offer your users a smarter helpdesk focused on their
                    finances. Our Assistance Hub provides transaction insights,
                    budgeting tips, and financial FAQs all in one place.
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
                        primary="Self-service dashboard for financial help"
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
                        primary="Smart FAQs with AI-powered search"
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
                        primary="User-friendly access to bank data & history"
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
                        primary="Budget coaching & alerts"
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
                        primary="Integrates with your customer support system"
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

export default AccountHelpSquadFeature;
