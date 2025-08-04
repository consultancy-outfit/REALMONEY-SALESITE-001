"use client";
import { Box } from "@mui/material";
import {
  coreservicesimg1,
  coreservicesimg2,
  coreservicesimg3,
} from "./assets/images";
import { HeroCustomSection, SectionPanel } from "./components";

export const ServicesFeature = () => {
  const sections = [
    {
      id: "account-information",
      title: "Account Information",
      description: `Empower decisions with real-time banking data.Account Information services (AIS) provide seamless, real-time connectivity to a customer's financial tapestry, including current balances, transaction records, and account identity. This data can be retrieved across multiple banks and accounts, ensuring a 360-degree view of personal or business finances. AIS empowers customers and businesses to make informed decisions by providing real-time data for financial insights. By leveraging robust analytics and AI, we transform raw data into actionable intelligence for budgeting, spending patterns, wealth management tools, and fraud detection engines. With powerful categorization and enrichment layers, the raw data becomes actionable insights in seconds. Our AIS infrastructure supports all types of financial data, including transaction details, account balances, and personal information, allowing for comprehensive financial analysis. Businesses can benefit from enhanced credit assessments, personalized product offerings, and automated reconciliation, leading to improved cash flow forecasting and optimizing working capital. Consumers enjoy a holistic view of their finances, simplified budgeting, and personalized financial advice. AIS enables smarter financial experiences from the ground up.`,
      features: [
        "Up to the minute Account Balances",
        "Full Transaction History Retrieval",
        "Multi-Bank Data Aggregation",
        "Verified Account Ownership",
        "Smart Spending & Budget Analysis",
        "Recognition of Recurring Payments",
        "Dynamic Expense Management",
        "Full PSD2 Regulatory Alignment",
        "Broadcast & Full Banking Network",
      ],
      imageUrl: coreservicesimg1.src,
    },
    {
      id: "secure-payment-initiation",
      title: "Secure Payment Initiation",
      description: `Initiate payments instantly. No cards. No delays.
        Empower users and businesses to initiate secure, real-time payments directly from their bank accounts. Payment Initiation Services (PIS) eliminate the friction of traditional card processing, offering a faster and more cost-effective alternative. Our secure payment gateway ensures every transaction is protected, reducing the risk of fraud and chargebacks. Instant payment confirmations enhance cash flow and provide immediate proof of payment. PIS is ideal for a wide range of uses, from e-commerce checkouts and utility bill payments to peer-to-peer transfers and financial vehicle disbursements. Refunds are streamlined, and payment disputes are minimized. By directly linking to bank accounts, PIS services offer a seamless and integrated payment experience, minimizing reconciliation efforts and improving overall financial efficiency. Experience simpler, safer, and smarter payments with PIS.`,
      features: [
        "Instant Bank Transfers",
        "One-Off & Recurring Payments",
        "Strong Customer Authentication (SCA)",
        "Payment Status Tracking",
        "Refund Handling",
        "Customizable Consent Flows",
        "Compliance with PSD2 Regulations",
        "Integrated Payment UX/UI",
        "Developer-Friendly APIs",
      ],
      imageUrl: coreservicesimg2.src,
    },
    {
      id: "bank-connectivity-data-aggregation",
      title: "Bank Connectivity & Data Aggregation",
      description: `Connect Once. Scale everywhere. Built to open finance.
        Experience seamless connectivity to an extensive network of banks through our robust and high-speed API integrations. Our platform ensures seamless connectivity with both traditional and challenger banks across multiple regions, simplifying data retrieval and aggregation. Leverage our unified API to integrate with diverse financial institutions, enabling real-time access to critical financial data. The platform unifies fragmented data into a consistent format, optimizing monitoring and smart routing to ensure reliability and performance, even during high-demand periods. With advanced security and encryption protocols, we ensure the integrity and confidentiality of all data, providing a secure and reliable foundation for financial services. Designed for developers and businesses alike, our hassle-free connectivity minimizes technical efforts so you can innovate with confidence. Scale globally as we handle the infrastructure behind the scenes.`,
      features: [
        "Access to Major UK & EU Banks",
        "Uptime Monitoring & Connection Health",
        "Multi-Bank Data Aggregation Capabilities",
        "Unified Data Normalization Layer",
        "Developer-Friendly SDKs & Sandbox",
        "Smart Routing & Failover Support",
        "Instant Onboarding & Connectivity",
      ],
      imageUrl: coreservicesimg3.src,
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <HeroCustomSection
          subtitle="Centpay"
          title="Smarter Spending. Instant Transfers. Global Access."
          description="Centpay is a next-generation digital wallet designed to simplify money management for individuals, students, and businesses. It enables fast, secure transactions with real-time notifications and smart tracking. Users can manage multiple wallets, send and receive funds, and control virtual or physical cards easily from one platform. With built-in budget tools and spend categorisation, users gain deeper insights into their financial habits. Businesses can streamline payouts, assign team cards, and reconcile expenses effortlessly. Students benefit from financial literacy tools, saving goals, and discounts. Centpay also supports multi-currency use, low-cost international transfers, and automated bill splitting. It’s a powerful, flexible, and intelligent wallet built for the modern financial lifestyle."
          textColor="#FFFFFF"
        />
        <SectionPanel sections={sections} />
      </Box>
    </>
  );
};

export default ServicesFeature;
