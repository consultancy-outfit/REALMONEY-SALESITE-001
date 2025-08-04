"use client";

import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import {
  AccountantHelpSquadImg,
  ComplianceAccessImg,
  CoreServicesImgy,
  DataIntelligenceImg,
  GenspayImg,
  IdentityKycImg,
} from "../../assets/images";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import { APP_ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";
import ContactSection from "../contect-section/contect-section";
import HeroCustomSection from "../hero/hero";

interface SectionData {
  id: string;
  mainTitle: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
  imageOnRight: boolean;
  backgroundColor: string;
  textColor: string;
  link: string;
}

const sectionsData: SectionData[] = [
  {
    id: "core-services",
    mainTitle: "Open Banking Solutions",
    title: "Core Services",
    subtitle: "Power your platform with real-time financial connectivity",
    description:
      "Core Services are the foundation of Open Banking integrations, enabling secure access to user bank accounts and transaction history. These services support Account Information Services  and Payment Initiation, which are crucial for personal finance tools, lending platforms, and digital banking solutions. With seamless API-based connections to UK and EU banks, these services ensure real-time data synchronisation and smooth customer experiences. Businesses can use these capabilities to build robust financial journeys that are accurate, compliant, and scalable. Whether it’s balance checks or payment flows, Core Services drive the heartbeat of financial apps.",
    buttonText: "Explore",
    imageUrl: CoreServicesImgy.src,
    imageAlt: "Core Services",
    imageOnRight: true,
    backgroundColor: "#ffffff",
    textColor: "#333",
    link: APP_ROUTES.PRODUCT_1,
  },
  {
    id: "data-intelligence",
    mainTitle: "Transactions",
    title: "Data Intelligence & Enrichment",
    subtitle:
      "Institutional-Grade Make data meaningful with smart enrichment tools. Management",
    description:
      "This service turns raw banking transactions into structured, insightful data through enrichment, categorisation, and merchant recognition. It adds intelligence to every financial interaction by tagging and analysing user behaviour across accounts. Lenders, accountants, and fintech platforms benefit from enriched insights that help assess spending patterns, income trends, and financial health. These insights are vital for building accurate credit models, budgeting tools, and personalised user experiences. Ultimately, it helps businesses make informed decisions using clean, enriched data that tells a story beyond numbers.",
    buttonText: "Explore",
    imageUrl: DataIntelligenceImg.src,
    imageAlt: "Person looking at data on a laptop",
    imageOnRight: false,
    backgroundColor: "#33334d",
    textColor: "#fff",
    link: APP_ROUTES.PRODUCT_2,
  },
  {
    id: "identity-kyc",
    mainTitle: "Verifications",
    title: "Identity & KYC",
    subtitle: "Instantly verify users through secure bank data.",
    description:
      "Identity & KYC services leverage users’ bank accounts to validate identities, ownership, and activity in a secure, frictionless way. By bypassing manual uploads and outdated verification methods, platforms can onboard users in seconds with confidence. This reduces fraud, speeds up compliance checks, and improves trust in digital transactions. Financial institutions and fintechs can meet AML and regulatory obligations while offering users a seamless experience. Whether it’s for account setup or ongoing monitoring, this solution streamlines identity management with open banking precision.",
    buttonText: "Explore",
    imageUrl: IdentityKycImg.src,
    imageAlt: "Profile icon and security padlock",
    imageOnRight: true,
    backgroundColor: "#ffffff",
    textColor: "#333",
    link: APP_ROUTES.PRODUCT_3,
  },
  {
    id: "compliance-access",
    mainTitle: "Compliance & Monitoring",
    title: "Compliance & Access",
    subtitle: "Stay ahead with secure, scalable, and compliant access.",
    description:
      "Built with regulators in mind, this service ensures full alignment with PSD2, FCA guidelines, and open banking technical standards. It includes tools such as consent management, audit trails, regulatory reporting, and access controls. Businesses can confidently operate across UK and EU markets while maintaining secure user journeys. Sandbox environments and developer portals make it easy to test integrations, while SDKs and APIs simplify deployment. With consistent uptime and extensive bank coverage, this service forms the trusted bridge between compliance and innovation.",
    buttonText: "Explore",
    imageUrl: ComplianceAccessImg.src,
    imageAlt: "Hand holding a device with a checkmark",
    imageOnRight: false,
    backgroundColor: "#33334d",
    textColor: "#fff",
    link: APP_ROUTES.PRODUCT_4,
  },
  {
    id: "accountant-help-squad",
    mainTitle: "Manage Payments",
    title: "Accountant Help Squad",
    subtitle: "Empower users with guided account support and automation.",
    description:
      "AHS acts as a smart support layer for all banking journeys—whether users are linking accounts, resetting consent, or facing errors. It delivers real-time assistance via embedded widgets, chat support, or self-service automation to reduce drop-offs and frustration. Especially useful in lending, PFM, and onboarding workflows, AHS helps users complete sensitive financial tasks smoothly. Businesses benefit from higher conversion rates, reduced support costs, and increased customer satisfaction. It ensures no user is left behind during critical open banking moments.",
    buttonText: "Explore",
    imageUrl: AccountantHelpSquadImg.src,
    imageAlt: "Person working on financial reports",
    imageOnRight: true,
    backgroundColor: "#ffffff",
    textColor: "#333",
    link: APP_ROUTES.PRODUCT_5,
  },
  {
    id: "genspay",
    mainTitle: "Fintech",
    title: "Genspay",
    subtitle: "Bank-powered payments. Secure, instant, and cost-effective.",
    description:
      "Centspay empowers users to make direct payments straight from their bank accounts—no cards, no intermediaries. This approach cuts down transaction fees and eliminates chargebacks, making it ideal for digital commerce, utility bills, and subscription models. It supports both one-time and recurring payments, with real-time confirmation and rapid settlements that optimise cash flow. Designed with modern banking in mind, it includes Strong Customer Authentication (SCA) for top-tier security and full compliance. Centspay redefines the payment experience—seamless, direct, and future-ready.",
    buttonText: "Explore",
    imageUrl: GenspayImg.src,
    imageAlt: "Cityscape with financial data overlay",
    imageOnRight: false,
    backgroundColor: "#33334d",
    textColor: "#fff",
    link: APP_ROUTES.PRODUCT_6,
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
        py: { xs: 6, md: 10 },
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
            <Box
              sx={{
                pr: { xs: 0, md: imageOnRight ? 4 : 0 },
                pl: { xs: 0, md: imageOnRight ? 0 : 4 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="body1" gutterBottom color="primary.main">
                {mainTitle}
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
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
                  fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
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
                }}
                aria-label={imageAlt}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const ViewAllFeature = () => {
  return (
    <>
      <HeroCustomSection
        subtitle=""
        title="Powering Modern Financial Services with Open Banking Technology"
        description="We provide a suite of powerful, secure, and regulatory-compliant products designed to modernise how financial data is accessed, used, and monetised. Whether you're a fintech startup, lender, business platform, or a bank, our products are built to help you launch faster, grow smarter, and scale securely."
        textColor="#FFFFFF"
        buttonText="Get Started"
      />
      <Box sx={{ bgcolor: "#ffffff" }}>
        {sectionsData.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </Box>
      <Box sx={{ mb: 2, p: { xs: 2, lg: 4 } }}>
        <ContactSection
          title="Empowering Financial Innovation Through Open Banking"
          description={
            "Have a question, need a demo, or want to partner with us? We’d love to hear from you."
          }
          buttonText={"Contact us"}
          height={500}
          borderRadius={8}
        />
      </Box>
    </>
  );
};

export default ViewAllFeature;
