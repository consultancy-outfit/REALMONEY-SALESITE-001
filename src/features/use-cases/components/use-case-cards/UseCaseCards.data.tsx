import { USE_CASE_DETAIL_ROUTES } from "@/constants/routes";
import {
  Card1Image,
  Card2Image,
  Card3Image,
  Card4Image,
  Card5Image,
} from "../../assets";

export const cardData = [
  {
    id: 1,
    heading: "Smarter Lending with Real-Time Bank Insights",
    description:
      "A digital lending platform wants to enhance its underwriting model to serve customers with limited credit histories.",
    image: Card1Image.src,
    readMoreUrl: USE_CASE_DETAIL_ROUTES?.REAL_TIME_BANK_INSIGHTS,
  },
  {
    id: 2,
    heading: "Frictionless Onboarding for Fintech Apps",
    description:
      "A growing fintech app seeks to streamline its onboarding and KYC process while meeting UK regulatory standards.",
    image: Card2Image.src,
    readMoreUrl: USE_CASE_DETAIL_ROUTES?.FINTECH_APPS,
  },
  {
    id: 3,
    heading: "Streamlining Business Payments with AHS",
    description:
      "A medium-sized enterprise needs to modernize its financial operations, replacing spreadsheets and manual tools with automated, accurate, and scalable systems.",
    image: Card3Image.src,
    readMoreUrl: USE_CASE_DETAIL_ROUTES?.PAYMENTS_WITH_AHS,
  },
  {
    id: 4,
    heading: "Cross-Border P2P Transfers for Remote Teams",
    description:
      "A globally distributed startup requires a flexible, instant, and affordable way to pay freelancers and contractors across multiple countries and currencies.",
    image: Card4Image.src,
    readMoreUrl: USE_CASE_DETAIL_ROUTES?.REMOTE_TEAMS,
  },
  {
    id: 5,
    heading: "Regulated Payments with Consent Control",
    description:
      "A corporate payment platform needs to enable its users to make direct bank payments while managing compliance, permissions, and audit trails.",
    image: Card5Image.src,
    readMoreUrl: USE_CASE_DETAIL_ROUTES?.PRECISION_CONSENT,
  },
];
