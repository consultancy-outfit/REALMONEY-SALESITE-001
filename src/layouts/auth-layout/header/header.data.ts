import { APP_ROUTES } from "@/constants/routes";
import React from "react";

import {
  RiskCreditScoringIcon,
  IncomeExpenseInsightsIcon,
  DataEnrichmentIcon,
  TransactionCategorisationIcon,
  BankDataAggregationIcon,
  PaymentInitiationServicesIcon,
  AccountInformationServicesIcon,
  AccountantHelpSquadIcon,
  BankBasedIdentityVerificationIcon,
  AccountOwnershipValidationIcon,
  ConsentFlowManagementIcon,
  PSDAndFCAComplianceIcon,
  MultiCurrencyWalletIcon,
  RealTimeMicroPaymentsIcon,
  CurrencyExchangeIcon,
  SavingsWithCentsIcon,
  PeerToPeerTransfersIcon,
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
        title: "Smart Bank Data Layer",
        path: APP_ROUTES.PRODUCT_1,
        children: [
          {
            title: "Account Information Services(AIS)",
            path: APP_ROUTES.PRODUCT_1,
            icon: AccountInformationServicesIcon,
          },
          {
            title: "Payment Initiation Services(PIS)",
            path: APP_ROUTES.PRODUCT_1,
            icon: PaymentInitiationServicesIcon,
          },
          {
            title: "Bank Data Aggregation",
            path: APP_ROUTES.PRODUCT_1,
            icon: BankDataAggregationIcon,
          },
          {
            title: "Transaction Categorisation",
            path: APP_ROUTES.PRODUCT_1,
            icon: TransactionCategorisationIcon,
          },
          {
            title: "Data Enrichment",
            path: APP_ROUTES.PRODUCT_1,
            icon: DataEnrichmentIcon,
          },
          {
            title: "Income & Expense Insights",
            path: APP_ROUTES.PRODUCT_1,
            icon: IncomeExpenseInsightsIcon,
          },
          {
            title: "Risk & Credit Scoring",
            path: APP_ROUTES.PRODUCT_1,
            icon: RiskCreditScoringIcon,
          },
        ],
      },
      {
        title: "Identity & Compliance",
        path: APP_ROUTES.PRODUCT_2,
        children: [
          {
            title: "Bank-Based Identity Verification",
            path: APP_ROUTES.PRODUCT_2,
            icon: BankBasedIdentityVerificationIcon,
          },
          {
            title: "Account Ownership Validation",
            path: APP_ROUTES.PRODUCT_2,
            icon: AccountOwnershipValidationIcon,
          },
          {
            title: "Consent Flow Management",
            path: APP_ROUTES.PRODUCT_2,
            icon: ConsentFlowManagementIcon,
          },
          {
            title: "PSD2 & FCA Compliance",
            path: APP_ROUTES.PRODUCT_2,
            icon: PSDAndFCAComplianceIcon,
          },
        ],
      },
      {
        title: "Centspay",
        path: APP_ROUTES.PRODUCT_3,
        children: [
          {
            title: "Multi-Currency Wallet",
            path: APP_ROUTES.PRODUCT_3,
            icon: MultiCurrencyWalletIcon,
          },
          {
            title: "Real-Time Micro-Payments",
            path: APP_ROUTES.PRODUCT_3,
            icon: RealTimeMicroPaymentsIcon,
          },
          {
            title: "Currency Exchange & Conversion",
            path: APP_ROUTES.PRODUCT_3,
            icon: CurrencyExchangeIcon,
          },
          {
            title: "Savings with Cents",
            path: APP_ROUTES.PRODUCT_3,
            icon: SavingsWithCentsIcon,
          },
          {
            title: "Peer-to-Peer Transfers",
            path: APP_ROUTES.PRODUCT_3,
            icon: PeerToPeerTransfersIcon,
          },
        ],
      },
      {
        title: "Accountant Help Squad",
        path: APP_ROUTES.PRODUCT_4,
        children: [
          {
            title: "Accounts Payable",
            path: APP_ROUTES.PRODUCT_4,
            icon: AccountantHelpSquadIcon,
          },
          {
            title: "Accounts Receivable",
            path: APP_ROUTES.PRODUCT_4,
            icon: AccountantHelpSquadIcon,
          },
          {
            title: "Cash Flow & Forecasting",
            path: APP_ROUTES.PRODUCT_4,
            icon: AccountantHelpSquadIcon,
          },
          {
            title: "Expense Management",
            path: APP_ROUTES.PRODUCT_4,
            icon: AccountantHelpSquadIcon,
          },
          {
            title: "Customer Assistance Hub",
            path: APP_ROUTES.PRODUCT_4,
            icon: AccountantHelpSquadIcon,
          },
        ],
      },

      {
        title: "View All",
        path: APP_ROUTES.PRODUCT_5,
      },
    ],
  },
  {
    title: "Use Cases",
    path: APP_ROUTES.PRICING,
  },
  {
    title: "Careers",
    path: APP_ROUTES.CAREERS,
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
  {
    title: "Contact Us",
    path: APP_ROUTES.CONTACT_US,
  },
];
