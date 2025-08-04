import { USE_CASE_DETAIL_ROUTES } from "@/constants/routes";
import {
  ConsentManagementImage,
  FrictionlessCustomerImage,
  IncomeVerificationImage,
  InstantlyKycImage,
  PersonFinanceImage,
  TimeSupportImage,
} from "../../assets";

export const cardData = [
  {
    id: 1,
    heading: "Personal Finance App Budgeting",
    description:
      "Personal finance apps can connect directly to users’ bank accounts through Core Services, enabling real-time transaction syncing and account balance access.",
    image: PersonFinanceImage.src,
    exploreUrl: USE_CASE_DETAIL_ROUTES?.APP_BUDGETING,
  },
  {
    id: 2,
    heading: "Frictionless Customer Onboarding",
    description:
      "Platforms can skip the need for uploading utility bills or ID scans by using bank-verified KYC processes. When users link their bank accounts, Identity & KYC services confirm ownership, recent activity, and even residency.",
    image: FrictionlessCustomerImage.src,
    exploreUrl: USE_CASE_DETAIL_ROUTES?.DIGITAL_PLATFORM,
  },
  {
    id: 3,
    heading: "Consent Management for Regulated Platforms",
    description:
      "Financial platforms operating under open banking must allow users to grant, review, or revoke data access at any time. Compliance & Access enables this through robust APIs for consent capture, expiry tracking, and audit trails.",
    image: ConsentManagementImage.src,
    exploreUrl: USE_CASE_DETAIL_ROUTES?.REGULATE_PLATFORM,
  },
  {
    id: 4,
    heading: "Time Support During Payment Flows",
    description:
      "During payment initiation flows (e.g., paying a bill or transferring money), users may face errors like session timeouts, incorrect details, or failed authentication.",
    image: TimeSupportImage.src,
    exploreUrl: USE_CASE_DETAIL_ROUTES?.PAYMENT_FLOWS,
  },
  {
    id: 5,
    heading: "Income Verification for Gig Economy Workers",
    description:
      "Enable platforms to verify income stability and trends for freelancers and gig economy workers by analysing transaction data directly from their bank accounts.",
    image: IncomeVerificationImage.src,
    exploreUrl: USE_CASE_DETAIL_ROUTES?.GIG_ECONOMY_WORKERS,
  },
  {
    id: 6,
    heading: "Instant KYC for Crypto Onboarding",
    description:
      "Accelerate user onboarding for crypto platforms by using bank-based identity verification that meets AML regulations without document uploads.",
    image: InstantlyKycImage.src,
    exploreUrl: USE_CASE_DETAIL_ROUTES?.SECURE_KYC,
  },
];
