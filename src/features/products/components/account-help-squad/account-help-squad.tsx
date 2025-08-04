"use client";
import { Box } from "@mui/material";
import {
  Centspayimg1, // Assuming this will be the image for Digital Wallet Accounts
  Centspayimg2, // Assuming this will be the image for Card Solutions
  Centspayimg3, // Assuming this will be the image for Money Movement
} from "../../assets/images"; // Make sure these paths are correct relative to this file
import HeroCustomSection from "../hero/hero";
import SectionPanel from "../proudct-card/proudct-card";

interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl?: string;
  featuresHeading?: string;
}

export const CentspayFeature = () => {
  // Or PaymentsFeature
  const sections: SectionData[] = [
    {
      id: "digital-wallet-accounts",
      title: "Digital Wallet Accounts",
      subtitle:
        "Simplify payment management for individuals, students, and businesses.",
      description: `Our easy-to-use and secure digital wallet accounts allow for flexible money management. Create multiple wallets, send and receive funds, and control spending with ease. Ideal for individuals, students, and businesses, our digital wallets simplify financial transactions. They support a wide range of uses, from everyday purchases to managing specific budgets. With real-time transaction tracking and instant notifications, you'll always stay on top of your finances. Our API-first approach allows for seamless integration with your existing platforms, enabling you to offer a robust and user-friendly digital wallet experience to your customers.`,
      features: [
        "Flexible digital wallets for various uses",
        "Multi-currency support for global transactions",
        "Real-time fund transfers and payments",
        "Secure API for seamless integration",
        "Granular control over spending limits",
        "Instant notifications for all transactions",
        "Integration with mobile payment systems",
        "Customizable user roles and permissions",
        "Detailed transaction history and reporting",
      ],
      imageUrl: Centspayimg1.src, //
      featuresHeading: "Digital Wallet Account Features:",
    },
    {
      id: "card-solutions",
      title: "Card Solutions",
      subtitle: "Customize, issue, and manage your card program.",
      description: `Take control of your payment infrastructure with our customizable card solutions. Issue physical and virtual cards, manage spending limits, and automate expense categorization with ease. Our platform allows you to design and launch your own branded card programs, tailored to your specific needs, whether for expense management, loyalty programs, or payroll. With robust security features and real-time transaction monitoring, you can prevent fraud and ensure compliance. Streamline operations and enhance the payment experience for your customers with a fully integrated card solution.`,
      features: [
        "Physical and virtual card issuance",
        "Customizable card designs and branding",
        "Real-time spending controls and limits",
        "Automated expense categorization",
        "Fraud detection and prevention tools",
        "Integration with existing payment systems",
        "Multi-currency transaction support",
        "Secure API for seamless integration",
        "Detailed transaction reporting",
      ],
      imageUrl: Centspayimg2.src, //
      featuresHeading: "Card Solutions Features:",
    },
    {
      id: "money-movement",
      title: "Money Movement",
      subtitle: "Transfer funds effortlessly, anywhere, instantly.",
      description: `Our robust money movement solutions enable instant, secure, and cost-effective transfers across various channels. Whether it's peer-to-peer payments, business disbursements, or international remittances, our platform ensures seamless fund flow. We support multiple payment rails, including faster payments, SEPA, and international wires, giving you flexibility and broad reach. With real-time status tracking and transparent fees, you can manage your money transfers with confidence, ensuring they reach their destination quickly and securely. Streamline your operations and improve financial efficiency with our comprehensive money movement capabilities.`,
      features: [
        "Instant Peer-to-Peer Transfers",
        "Automated business disbursements",
        "Multi-currency international payments",
        "Real-time transaction tracking",
        "Low-cost payment processing",
        "Secure API for seamless integration",
        "Compliance with AML and KYC regulations",
        "Flexible payment rails (Faster Payments, SEPA, SWIFT)",
        "Detailed reporting and audit trails",
      ],
      imageUrl: Centspayimg3.src, //
      featuresHeading: "Money Movement Features:",
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <HeroCustomSection
          subtitle="Accountant Help Squad"
          title="Transform raw data into 
powerful financial insights."
          description="Accountant Help Squad (AHS) is your dedicated back-office finance partner, combining automation with professional support to simplify financial operations. Designed for SMEs, startups, and growing businesses, AHS ensures timely and compliant bookkeeping, smooth reconciliation, and proactive financial insights. Our services are modular, allowing you to pick what suits your current operations—be it managing supplier payments, collecting dues, tracking cashflow, or full-spectrum accounting. By integrating with your existing ERP or banking system, AHS reduces human error, improves reporting quality, and frees your team to focus on growth. All services come with expert oversight, making it a powerful tool for strategic financial control."
          textColor="#FFFFFF"
        />
        <SectionPanel sections={sections} />
      </Box>
    </>
  );
};

export default CentspayFeature;
