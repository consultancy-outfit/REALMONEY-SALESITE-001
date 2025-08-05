"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import { APP_ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  productBanner,
  productC1,
  productC2,
  productC3,
  productC4,
  productC5,
  productC6,
} from "../../assets/images";
import Image from "next/image";
// import HeroCustomSection from "../hero/hero";

interface SectionData {
  id: string;
  mainTitle: string;
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  imageUrl: string;
  imageAlt: string;
  imageOnRight: boolean;
  backgroundColor: string;
  textColor: string;
  link: string;
}

const sectionsData: SectionData[] = [
  {
    id: "Smarter Finance",
    mainTitle: "Smarter Finance",
    title: "Smarter Banking. Stronger Insights. Real-Time Results.",
    subtitle: "",
    description:
      "At Real Money, we bring the future of finance to your fingertips with intelligent banking services designed for modern businesses and fintechs. From secure identity verification to real-time payments, data enrichment, and automated cash management everything is built for agility, compliance, and innovation. Explore a suite of open banking-powered tools tailored to simplify operations and accelerate growth.",
    // buttonText: "Explore",
    imageUrl: product1.src,
    imageAlt: "Core Services",
    imageOnRight: true,
    backgroundColor: "#010101",
    textColor: "#D9D9D9",
    link: APP_ROUTES.PRODUCT_1,
  },
];

const Section = ({
  mainTitle,
  title,
  subtitle,
  description,
  buttonText,
  imageUrl,
  imageAlt,
  imageOnRight,
  backgroundColor,
  textColor,
  link,
}: SectionData) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  const gridDirection = isMdUp
    ? imageOnRight
      ? "row"
      : "row-reverse"
    : "column";

  return (
    <Box
      sx={{
        py: { xs: 6 },
        bgcolor: backgroundColor,
        borderRadius: "32px",
        color: textColor,
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          direction={gridDirection}
        >
          <Grid size={{ xs: 12, lg: 6 }}>
            {imageUrl && (
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 350, md: 400 },
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 2,
                  boxShadow: 3,
                  display: "block",
                  margin: { xs: "auto", md: "unset" },
                  py: 2,
                }}
                aria-label={imageAlt}
              />
            )}
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                pr: { xs: 0, md: imageOnRight ? 4 : 0 },
                pl: { xs: 0, md: imageOnRight ? 0 : 4 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="body1"
                fontSize={16}
                gutterBottom
                sx={{ fontWeight: 200 }}
                color="#FFFFFF"
              >
                {mainTitle}
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: 48,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{
                  fontWeight: 500,
                  opacity: 0.8,
                  fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                }}
              >
                {subtitle}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  mt: 2,
                  lineHeight: 1.8,
                  opacity: 0.9,
                  fontSize: 18,
                  fontWeight: 100,
                  color: "#D9D9D9",
                }}
              >
                {description}
              </Typography>
              {buttonText && (
                <SlideSidewayInView>
                  <Button
                    variant="contained"
                    onClick={() => router.push(link)}
                    sx={{
                      mt: 3,
                      px: { xs: 3, md: 4 },
                      py: { xs: 1, md: 1.5 },

                      borderRadius: "25px",
                      bgcolor: "#9747FF",
                      "&:hover": {
                        bgcolor: "#9747FF",
                      },
                      fontSize: { xs: "0.875rem", md: "1.25rem" },
                    }}
                  >
                    {buttonText}
                  </Button>
                </SlideSidewayInView>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const ViewAllFeature = () => {
   const router =useRouter()
  return (
    <>
      <Box sx={{ bgcolor: "#010101" }}>
        {sectionsData.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </Box>
      {/* grid section */}
      <Box
        sx={{
          bgcolor: "#010101",
          height: "100%",
          py: { xs: 4 },
        }}
      >
        <Container maxWidth="xl">
          <Stack gap={1}>
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 48,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Trusted Connectivity
            </Typography>
            <SlideSidewayInView>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 350, md: 600 },
                  backgroundImage: `url(${product2.src})`,
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

            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 500,
                fontSize: 20,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Smart Bank Data Layer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#C0C0C0",
                fontWeight: 200,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Powering Intelligent Finance with Real-Time Bank Data
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              The SmartBank Data Layer forms the foundation of smarter financial
              services by offering real-time access to customer bank data. It
              aggregates account information from multiple banks and
              institutions into a single, standardised format. This unified view
              enables businesses to offer better insights, drive efficiency, and
              reduce operational costs.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Through secure APIs, users can connect to their bank accounts
              without compromising on privacy or control. Transaction
              Categorisation helps identify recurring patterns and classify
              income and spending automatically. Data Enrichment enhances this
              raw data with intuitive labels and financial context, making the
              insights clearer and more actionable.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              This enriched view helps financial platforms, fintechs, and
              lending businesses better understand users' financial behaviours.
              Income and Expense Insights drive deeper analytics on spending
              habits, saving potential, and financial wellness. For lenders,
              Risk & Credit Scoring leverages verified banking data to offer
              accurate creditworthiness assessments.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              With predictive analytics, businesses can detect early signs of
              financial stress or opportunities for upselling. This data-driven
              foundation supports customer retention, better financial planning,
              and innovative service offerings. Whether you're building a PFM
              app or a lending tool, the SmartBank Data Layer is essential for
              delivering precision at scale.
            </Typography>
          </Stack>
        </Container>
      </Box>
      {/* grid section */}
      {/* grid section2 */}
      <Box
        sx={{
          bgcolor: "#010101",
          height: "100%",
          py: { xs: 4 },
        }}
      >
        <Container maxWidth="xl">
          <Stack gap={1}>
            <SlideSidewayInView>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 350, md: 600 },
                  backgroundImage: `url(${product3.src})`,
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
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 500,
                fontSize: 20,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Identity & Compliance
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#C0C0C0",
                fontWeight: 200,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Security That Builds Trust—Compliance That Powers Growth
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              This suite ensures that identity verification and regulatory
              compliance are seamlessly integrated into your digital financial
              journeys. With Bank-Based Identity Verification, users confirm
              their identities using their existing and secure banking
              credentials. This removes friction from the onboarding process and
              enhances security through strong customer authentication.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Account Ownership Validation confirms that customers truly control
              the accounts they link, reducing the risk of fraud or unauthorised
              access. The Consent Flow Management tool is fully customisable and
              ensures user-friendly experiences while maintaining rigorous
              control over data sharing permissions.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              This system is built for full compliance with PSD2, FCA
              regulations, and the UK’s Open Banking framework. It reduces legal
              and security exposure for platforms offering payment or
              banking-related services. By offering robust KYC solutions
              directly integrated into user journeys, businesses can reduce
              drop-off rates and streamline compliance processes.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Audit-ready reports, event logs, and compliance trails offer peace
              of mind to both internal teams and regulators. It supports AML
              checks, customer due diligence, and identity verification—all
              within a single, consistent user flow.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
                py: 2,
              }}
            >
              With digital transformation accelerating across sectors,
              integrating bank-verified identity and compliance into your
              services is not just a luxury—it's a necessity. These tools give
              your platform the competitive edge while ensuring legal and
              ethical handling of sensitive customer data.
            </Typography>
          </Stack>
        </Container>
      </Box>
      {/* grid section2 */}
      {/* grid section3 */}
      <Box
        sx={{
          bgcolor: "#010101",
          height: "100%",
          py: { xs: 4 },
        }}
      >
        <Container maxWidth="xl">
          <Stack gap={1}>
            <SlideSidewayInView>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 350, md: 600 },
                  backgroundImage: `url(${product4.src})`,
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
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 500,
                fontSize: 20,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Account Help Squad (AHS)
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#C0C0C0",
                fontWeight: 200,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Financial Operations Made Effortless for Growing Businesses
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Account Help Squad offers a full-stack financial management
              toolkit tailored for businesses of all sises. Automate Accounts
              Payable to simplify invoice intake, approval, and vendor payment
              processing. Say goodbye to manual data entry and hello to faster
              vendor reconciliations.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              With Accounts Receivable, companies can streamline billing, issue
              smart invoices, and accelerate cash inflows. Improve collection
              cycles and reduce outstanding balances with clear workflows and
              client visibility. Cash Flow & Forecasting tools provide real-time
              insights into liquidity, helping companies make proactive
              financial decisions.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Businesses can visualise future financial positions using
              AI-backed predictive analytics. Expense Management ensures
              compliance with internal policies, captures all receipts, and
              offers audit-friendly tracking. From travel reimbursements to
              department budgets, all spending is centrally monitored.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              The Customer Assistance Hub powers seamless onboarding of business
              clients, providing support for data connectivity, billing
              questions, and service management. This team-driven interface
              ensures B2B clients feel supported and guided from the first
              interaction onward.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Together, these features reduce financial inefficiencies, cut down
              on errors, and enhance overall business agility. AHS is the
              back-office assistant every company needs to scale sustainably
              without adding headcount or complexity.
            </Typography>
          </Stack>
        </Container>
      </Box>
      {/* grid section3 */}
      {/* grid section4 */}
      <Box
        sx={{
          bgcolor: "#010101",
          height: "100%",
          py: { xs: 4 },
        }}
      >
        <Container maxWidth="xl">
          <Stack gap={1}>
            <SlideSidewayInView>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 350, md: 600 },
                  backgroundImage: `url(${product5.src})`,
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
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 500,
                fontSize: 20,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Centspay
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#C0C0C0",
                fontWeight: 200,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Micro Meets Macro—A Smarter Way to Save, Spend & Send
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Centspay is designed to support modern financial behaviour through
              micro-level control and macro-level visibility. The Multi-Currency
              Wallet enables businesses and individuals to manage various
              currencies—including digital and fiat—in one secure environment.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Real-Time Micro-Payments allow for small, traceable transactions
              ideal for pay-as-you-go services, subscriptions, and freelance
              ecosystems. With built-in automation and instant settlement,
              payments become frictionless and reliable. Currency Exchange &
              Conversion offers fast, transparent rate conversions with minimal
              fees, giving users confidence in cross-border transactions.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Savings with Cents introduces automation into personal and
              business savings. Users can round up everyday purchases and move
              the difference into smart savings pockets—perfect for goals like
              emergency funds or travel. Peer-to-Peer Transfers provide direct,
              secure, and instant money transfer between users, cutting out
              intermediaries.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Expense & Spend Analytics gives individuals and businesses
              real-time visibility into where money is going, helping to improve
              financial decisions. With easy-to-read dashboards and pattern
              recognition, users can control overspending and plan smarter.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F0F0F0",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Centspay also integrates KYC and secure identity verification to
              ensure safety and compliance across all payment-related features.
              It’s a powerful tool for building inclusive, data-driven financial
              ecosystems that are as secure as they are efficient.
            </Typography>
          </Stack>
        </Container>
      </Box>
      {/* grid section4 */}
      {/* grid section5 */}
      <Box
        sx={{
          bgcolor: "#010101",
          height: "100%",
          py: { xs: 4 },
        }}
      >
        <Container maxWidth="xl">
          <Stack gap={2} alignItems={"center"}>
            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 48,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Why Choose RealMoney Services?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 28,
                textAlign: { xs: "center" },
              }}
            >
              Built for smarter money movement and management
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 100,
                fontSize: 16,
                textAlign: { xs: "center" },
              }}
            >
              Empowering fintech innovators, enterprises, and startups with
              reliable financial solutions that deliver performance, build
              trust, and drive growth. Whether you're looking to launch, scale,
              or optimise, our tailored offerings have you covered.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    bgcolor: "#151515",
                    borderRadius: 4,
                    p: { xs: 2 },
                    width: "100%",
                    minWidth: 300,
                  }}
                >
                  <Stack flexDirection={"row"} gap={1}>
                    <Image
                      src={productC1}
                      alt="productC1"
                      width={50}
                      height={50}
                    />
                    <Stack gap={0.5}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 600,
                          fontSize: 14,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Financial
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 500,
                          fontSize: 12,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Financial Get access to reliable tools for seamless
                        financial planning and real-time transaction monitoring.
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    bgcolor: "#151515",
                    borderRadius: 4,
                    p: { xs: 2 },
                    width: "100%",
                    minWidth: 300,
                  }}
                >
                  <Stack flexDirection={"row"} gap={1}>
                    <Image
                      src={productC2}
                      alt="productC1"
                      width={50}
                      height={50}
                    />
                    <Stack gap={0.5}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 600,
                          fontSize: 14,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Investment
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 500,
                          fontSize: 12,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Make confident decisions with portfolio tracking,
                        forecasting tools, and advisory integrations.
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    bgcolor: "#151515",
                    borderRadius: 4,
                    p: { xs: 2 },
                    width: "100%",
                    minWidth: 300,
                  }}
                >
                  <Stack flexDirection={"row"} gap={1}>
                    <Image
                      src={productC4}
                      alt="productC1"
                      width={50}
                      height={50}
                    />
                    <Stack gap={0.5}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 600,
                          fontSize: 14,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Saving
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 500,
                          fontSize: 12,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Encourage smart savings habits with personalised goals,
                        recurring plans, and performance insights.
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    bgcolor: "#151515",
                    borderRadius: 4,
                    p: { xs: 2 },
                    width: "100%",
                    minWidth: 300,
                  }}
                >
                  <Stack flexDirection={"row"} gap={1}>
                    <Image
                      src={productC3}
                      alt="productC1"
                      width={50}
                      height={50}
                    />
                    <Stack gap={0.5}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 600,
                          fontSize: 14,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Crypto
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 500,
                          fontSize: 12,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Manage digital assets securely with integrated wallet
                        tracking and crypto analytics.
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    bgcolor: "#151515",
                    borderRadius: 4,
                    p: { xs: 2 },
                    width: "100%",
                    minWidth: 300,
                  }}
                >
                  <Stack flexDirection={"row"} gap={1}>
                    <Image
                      src={productC5}
                      alt="productC1"
                      width={50}
                      height={50}
                    />
                    <Stack gap={0.5}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 600,
                          fontSize: 14,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Credit
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 500,
                          fontSize: 12,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Streamline lending workflows with automated checks,
                        eligibility insights, and smart approvals.
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    bgcolor: "#151515",
                    borderRadius: 4,
                    p: { xs: 2 },
                    width: "100%",
                    minWidth: 300,
                  }}
                >
                  <Stack flexDirection={"row"} gap={1}>
                    <Image
                      src={productC6}
                      alt="productC1"
                      width={50}
                      height={50}
                    />
                    <Stack gap={0.5}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 600,
                          fontSize: 14,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Gold
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 500,
                          fontSize: 12,
                          textAlign: { xs: "left" },
                        }}
                      >
                        Digitally invest in gold with live pricing, instant
                        transactions, and secure storage options.
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
      {/* grid section5 */}
      <Box
        sx={{
          bgcolor: "#010101",
          height: "100%",
          py: { xs: 4 },
        }}
      >
        <Container maxWidth={"lg"}>
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
              px:{xl:30,md:10,sm:5,xs:2},
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
        </Container>
      </Box>
    </>
  );
};

export default ViewAllFeature;
