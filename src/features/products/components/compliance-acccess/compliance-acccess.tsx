"use client";
import { Box } from "@mui/material";
import {
  complianceAcccessimg1,
  complianceAcccessimg2,
  complianceAcccessimg3,
} from "../../assets/images";
import SectionPanel from "../proudct-card/proudct-card";
import HeroCustomSection from "../hero/hero";

interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl?: string;
  featuresHeading?: string;
}

export const ComplianceacccessFeature = () => {
  const sections: SectionData[] = [
    {
      id: "fca-psd2-regulatory-alignment",
      title: "FCA & PSD2 Regulatory Alignment",
      subtitle:
        "Meet the highest standards of Open Banking and PSD2 compliance with confidence.",
      description: `Our comprehensive Open Banking solutions are built to exceed the stringent requirements of PSD2 and FCA regulations. We provide robust frameworks for Strong Customer Authentication (SCA), secure API access, and granular consent management, ensuring your operations are fully compliant. Our platform handles complex regulatory nuances, allowing you to focus on innovation while we manage compliance intricacies. By leveraging our compliant infrastructure, you can confidently navigate the regulatory landscape, minimize legal risks, and build trust with your customers. We provide detailed audit trails and reporting to simplify your regulatory obligations, giving you peace of mind that your business is always aligned with the latest standards.`,
      features: [
        "Strong Customer Authentication (SCA) support",
        "Non-disruptive, frictionless integrations for seamless Open Banking",
        "Full PSD2 regulatory alignment",
        "Built-in fraud detection and prevention",
        "Real-time audit reporting for compliance",
        "GDPR-compliant data handling",
        "Secure API access and management",
        "Minimised operational and legal risk",
        "Robust consent management tools",
      ],
      imageUrl: complianceAcccessimg1.src,
      featuresHeading: "Key Regulatory Features:",
    },
    {
      id: "wide-market-coverage",
      title: "Wide Market Coverage",
      subtitle:
        "Access 98% of UK and EU banks with consistent, secure, and always-on connectivity.",
      description: `Expand your reach across the UK and EU with our extensive network of bank connections. Our robust infrastructure ensures consistent, secure, and reliable data access across thousands of financial institutions. We simplify the complexities of multi-bank integrations, offering a unified API that provides real-time access to account information and payment initiation services. This broad coverage allows you to serve a wider customer base and expand your business operations seamlessly into new markets. Our smart routing capabilities ensure high uptime and performance, even during peak periods. By offering unparalleled access to financial data, we empower businesses to innovate and deliver superior customer experiences globally.`,
      features: [
        "Extensive UK & EU Bank Coverage",
        "Secure, high-speed API connections",
        "Consistent Data Formatting",
        "Always-on Connectivity & Monitoring",
        "Multi-currency & International Payments Support",
        "Centralized API Management",
        "Smart Routing & Failover for reliability",
        "Seamless Onboarding for new banks",
        "Future-proof access to financial innovations",
      ],
      imageUrl: complianceAcccessimg2.src,
      featuresHeading: "Wide Market Coverage Features:",
    },
    {
      id: "freemium-access-for-startups",
      title: "Freemium Access for Startups",
      subtitle:
        "Open Banking for everyone: empowering innovation for all, big and small.",
      description: `Accelerate your fintech innovation with our freemium model, providing essential Open Banking functionalities at no upfront cost. This tiered access allows startups to experiment, build, and scale their financial products without significant initial investment. Our platform offers robust API documentation, sandbox environments, and dedicated support to help you get started quickly and seamlessly. As your business grows, you can easily upgrade to premium tiers for advanced features and increased capacity. This approach fosters a vibrant ecosystem of innovation, making Open Banking accessible to a broader range of entrepreneurs and businesses.`,
      features: [
        "Free-tier access for initial development",
        "Scalable pricing for growth",
        "Dedicated sandbox environment",
        "Comprehensive API documentation",
        "Community support and resources",
        "Seamless upgrade path to premium",
        "Early access to new features",
        "Partnership opportunities",
        "Developer-friendly tools",
      ],
      imageUrl: complianceAcccessimg3.src,
      featuresHeading: "Freemium Access Benefits:",
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <HeroCustomSection
          subtitle="Compliance & Access"
          title="Trusted financial access 
with regulatory compliance"
          description="Our compliance & access services ensure that your business adheres to all major financial data regulations, such as PSD2 and GDPR, with our comprehensive framework built for security, consent, and data aggregation. We provide the right frameworks to securely access and manage financial data with full consent. With bank-grade security protocols, we ensure that your data is always protected and compliant with the highest standards. Build your future-proof an access to financial innovations without worrying about breaches or industry risks. Our platform supports bank-based access, seamless user multi-bank data aggregation, and robust consent management to give you the tools you need to build the future-proof an access to financial innovations."
          textColor="#FFFFFF"
          buttonText=""
        />
        <SectionPanel sections={sections} />
      </Box>
    </>
  );
};

export default ComplianceacccessFeature;
