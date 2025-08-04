import { APP_ROUTES } from "@/constants/routes";
import React from "react";

import {
  AccountInformationIcon,
  PaymentInitiationIcon,
  BankConnectivityIcon,
  DataExplorersIcon,
  DataInsightsIcon,
  DebitCorpIcon,
  IdentityVerificationIcon,
  EnterpriseConfirmationIcon,
  FraudConfirmationIcon,
  KycAmlRegulatorsIcon,
  WideNormalCoverageIcon,
  FinancialInclusionIcon,
  DigitalWalletsIcon,
  DebitNotificationsIcon,
  VirtualMeasureIcon,
  AccountExpertsIcon,
} from "@/assets/icons/common";

type IconComponentType = React.FC<any>;

export interface NavLinkItem {
  title: string;
  path: string;
  icon?: string | IconComponentType;
  children?: NavLinkItem[];
}

export const navLinksData: NavLinkItem[] = [
  {
    title: "Home",
    path: APP_ROUTES.HOME,
  },
  {
    title: "About Us",
    path: APP_ROUTES.ABOUT_US,
  },
  {
    title: "Products",
    path: "", // Changed to empty string to disable navigation
    children: [
      {
        title: "Core Services",
        path: APP_ROUTES.PRODUCT_1,
        children: [
          {
            title: "Account Activation",
            path: APP_ROUTES.PRODUCT_1,
            icon: AccountInformationIcon,
          },
          {
            title: "Approval Walters",
            path: APP_ROUTES.PRODUCT_1,
            icon: PaymentInitiationIcon,
          },
          {
            title: "Bank Connectivity & Data Aggregation",
            path: APP_ROUTES.PRODUCT_1,
            icon: BankConnectivityIcon,
          },
        ],
      },
      {
        title: "Data Intelligence & Enrichment",
        path: APP_ROUTES.PRODUCT_2,
        children: [
          {
            title: "Bancana Data Explorers",
            path: APP_ROUTES.PRODUCT_2,
            icon: DataExplorersIcon,
          },
          {
            title: "Normal Data Insights",
            path: APP_ROUTES.PRODUCT_2,
            icon: DataInsightsIcon,
          },
          {
            title: "Debit & Corp with Affinity Score",
            path: APP_ROUTES.PRODUCT_2,
            icon: DebitCorpIcon,
          },
        ],
      },
      {
        title: "Identity & KYC",
        path: APP_ROUTES.PRODUCT_3,
        children: [
          {
            title: "Bancana Identity Verification",
            path: APP_ROUTES.PRODUCT_3,
            icon: IdentityVerificationIcon,
          },
          {
            title: "Normal Enterprise Confirmation",
            path: APP_ROUTES.PRODUCT_3,
            icon: EnterpriseConfirmationIcon,
          },
          {
            title: "Normal Fraud Confirmation",
            path: APP_ROUTES.PRODUCT_3,
            icon: FraudConfirmationIcon,
          },
        ],
      },
      {
        title: "Compliance & Access",
        path: APP_ROUTES.PRODUCT_4,
        children: [
          {
            title: "KYC & AML Regulators",
            path: APP_ROUTES.PRODUCT_4,
            icon: KycAmlRegulatorsIcon,
          },
          {
            title: "Wide Normal Coverage",
            path: APP_ROUTES.PRODUCT_4,
            icon: WideNormalCoverageIcon,
          },
          {
            title: "Financial Inclusion for Identity",
            path: APP_ROUTES.PRODUCT_4,
            icon: FinancialInclusionIcon,
          },
        ],
      },
      {
        title: "Centspay",
        path: APP_ROUTES.PRODUCT_5,
        children: [
          {
            title: "Digital Wallets",
            path: APP_ROUTES.PRODUCT_5,
            icon: DigitalWalletsIcon,
          },
          {
            title: "Debit Notifications",
            path: APP_ROUTES.PRODUCT_5,
            icon: DebitNotificationsIcon,
          },
          {
            title: "Virtual Measure",
            path: APP_ROUTES.PRODUCT_5,
            icon: VirtualMeasureIcon,
          },
        ],
      },
      {
        title: "Accountant Help Squad",
        path: APP_ROUTES.PRODUCT_6,
        children: [
          {
            title: "Account Experts",
            path: APP_ROUTES.PRODUCT_6,
            icon: AccountExpertsIcon,
          },
          {
            title: "Account Analysts",
            path: APP_ROUTES.PRODUCT_6,
            icon: AccountExpertsIcon,
          },
          {
            title: "Account Profilers",
            path: APP_ROUTES.PRODUCT_6,
            icon: AccountExpertsIcon,
          },
        ],
      },
      {
        title: "View All",
        path: APP_ROUTES.PRODUCT_7,
      },
    ],
  },
  {
    title: "Use Cases",
    path: APP_ROUTES.PRICING,
  },
  // {
  //   title: "Developers",
  //   path: "",
  //   children: [
  //     {
  //       title: "Documentations",
  //       path: APP_ROUTES.Comming_Soon,
  //     },
  //     {
  //       title: "API References",
  //       path: APP_ROUTES.Comming_Soon,
  //     },
  //     {
  //       title: "Product Demos",
  //       path: APP_ROUTES.Comming_Soon,
  //     },
  //   ],
  // },
  // {
  //   title: "Careers",
  //   path: APP_ROUTES.CAREERS,
  // },
  {
    title: "Contact Us",
    path: APP_ROUTES.CONTACT_US,
  },
];
