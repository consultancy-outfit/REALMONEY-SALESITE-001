"use client";
import { Box } from "@mui/material";
import { IdentityKyc1, IdentityKyc2, IdentityKyc3 } from "../../assets/images";
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

export const IdentityKycFeature = () => {
  const sections: SectionData[] = [
    {
      id: "bank-based-identity-verification",
      title: "Bank-Based Identity Verification",
      subtitle:
        "Verify real identities using trusted banking credentials for seamless onboarding and fraud prevention.",
      description: `Leverage bank-grade security and real-time data to verify customer identities with unparalleled accuracy and efficiency. Our Bank-Based Identity Verification service streamlines the onboarding process, reduces manual effort, and significantly mitigates fraud risks. By cross-referencing user-provided data with authenticated bank information, we provide a robust and reliable verification method that builds trust and ensures compliance with KYC (Know Your Customer) and AML (Anti-Money Laundering) regulations. This service offers a non-intrusive yet highly secure way to confirm identity, making it ideal for financial institutions, fintechs, and any business requiring strong identity assurance.`,
      features: [
        "Real-time Identity Verification",
        "Seamless User Onboarding",
        "Enhanced Fraud Prevention",
        "Automated KYC/AML Compliance",
        "Reduced Manual Checks",
        "Improved User Experience",
        "Data Accuracy & Reliability",
        "Secure Data Handling & Encryption",
        "Scalable API Support",
      ],
      imageUrl: IdentityKyc1.src,
      featuresHeading: "Bank-Based Identity Verification Features:",
    },
    {
      id: "account-ownership-confirmation",
      title: "Account Ownership Confirmation",
      subtitle:
        "Ensure the user truly owns the bank account used for payments or verification.",
      description: `Confirming account ownership is crucial for secure transactions and compliance. Our service provides real-time verification that a user is the legitimate owner of a bank account, preventing unauthorized access and fraudulent activities. This is particularly vital for payment initiation, direct debits, and Know Your Customer (KYC) processes. By securely linking to the user's bank, we confirm account holder details, ensuring that payments are directed to the correct recipient and mitigating risks associated with misdirected funds or identity theft. This service adds an essential layer of security and trust to your financial operations.`,
      features: [
        "Real-time Account Holder Verification",
        "Fraud Prevention & Risk Mitigation",
        "Secure Payment Processing",
        "Direct Debit Mandate Confirmation",
        "KYC/AML Compliance Support",
        "Reduced Payment Errors",
        "Enhanced Trust & Security",
        "Streamlined Onboarding",
        "Audit Trail for Compliance",
      ],
      imageUrl: IdentityKyc2.src,
      featuresHeading: "Account Ownership Confirmation Features:",
    },
    {
      id: "consent-flow-customisation",
      title: "Consent Flow Customisation",
      subtitle:
        "Design trusted, branded consent journeys that drive user confidence and increase conversion.",
      description: `Tailor the Open Banking consent experience to seamlessly integrate with your brand identity and user interface. Our Consent Flow Customization allows you to create intuitive, transparent, and legally compliant consent journeys, ensuring users clearly understand what data they are sharing and why. This flexibility enhances user trust, reduces friction, and boosts conversion rates by providing a consistent and reassuring experience. From branding to message wording and data permissions, every aspect of the consent process can be customized to align with your business needs and regulatory requirements.`,
      features: [
        "Branded Consent Experience",
        "Customizable Consent Screens & Text",
        "Granular Data Permission Control",
        "Multi-language Support",
        "A/B Testing for Optimization",
        "Real-time Consent Status Tracking",
        "Compliance with PSD2 & GDPR",
        "Audit Logging for Consent Activity",
        "Developer-Friendly APIs for Integration",
      ],
      imageUrl: IdentityKyc3.src,
      featuresHeading: "Consent Flow Customisation Features:",
    },
  ];

  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <HeroCustomSection
          subtitle="Identity & KYC"
          title="Secure, verify, and onboard users with confidence"
          description="Our identity & KYC services simplify user verification and regulatory checks in banking directly with a secure connection. We offer robust and flexible tools for seamless identity verification, account ownership confirmation, account information fetching, and custom consent-orchestration—all while enhancing user experience and maintaining full PSD2 & GDPR compliance. Each component is designed to simplify and accelerate your onboarding, strengthen fraud prevention, and provide verifiable audit trails. By leveraging real-time data and advanced analytics, we empower you to make more informed decisions, ensure regulatory compliance, efficiency, and a truly frictionless user journey for your customers."
          textColor="#FFFFFF"
        />
        <SectionPanel sections={sections} />
      </Box>
    </>
  );
};

export default IdentityKycFeature;
