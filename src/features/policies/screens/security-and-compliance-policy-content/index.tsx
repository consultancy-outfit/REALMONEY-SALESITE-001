import { Box } from "@mui/material";
import { SimpleTextPoint } from "../../components/simple-text-point/simple-text-point";
import { SubHeadingTextPoint } from "../../components/sub-heading-text-point/sub-heading-text-point";
import { COMPANY_EMAIL_ADDRESS, PROJECT_NAME } from "@/configs/env";

export const SecurityAndCompliancePolicyContentFeature = () => {
  return (
    <Box>
      <SimpleTextPoint
        heading="1. Introduction"
        description={`This Security and Compliance Policy outlines the principles and practices that ${PROJECT_NAME} follows to ensure the security of its operations, data, and compliance with relevant laws and regulations. The policy highlights our commitment to protecting the confidentiality, integrity, and availability of sensitive information.`}
      />
      <SubHeadingTextPoint
        heading="2. Information Security"
        points={[
          {
            heading: "2.1 Data Classification ",
            title: `All data processed and stored by ${PROJECT_NAME} is classified based on sensitivity, and appropriate security controls are applied accordingly.`,
          },
          {
            heading: "2.2 Access Control  ",
            title: `Access to systems, applications, and data is granted on a need-to-know basis. Role-based access controls are implemented to limit unauthorised access.`,
          },
          {
            heading: "2.3 Authentication and Authorisation",
            title: `Strong authentication mechanisms and multi-factor authentication (MA) are used to ensure proper user identification and authorisation.`,
          },
          {
            heading: "2.4 Encryption",
            title: `Data in transit and at rest is encrypted using industry-standard encryption protocols to protect against unauthorised access.`,
          },
        ]}
      />
      <SubHeadingTextPoint
        heading="3. Data Protection and Privacy"
        points={[
          {
            heading: "3.1 Data Processing ",
            title: `${PROJECT_NAME} processes personal data in accordance with applicable data protection laws and regulations. We collect, store, and process data only for legitimate and specified purposes.`,
          },
          {
            heading: "3.2 Data Retention  ",
            title: `Data is retained only for the duration required by law or for legitimate business purposes. After the retention period, data is securely disposed of.`,
          },
          {
            heading: "3.3 Consent and User Rights",
            title: `We respect user privacy and rights. User consent is obtained for data processing, and individuals are provided with access to their data and the ability to request corrections or deletions.`,
          },
        ]}
      />
      <SubHeadingTextPoint
        heading="4. Compliance with Regulations"
        points={[
          {
            heading: "4.1. GDPR Compliance ",
            title: `${PROJECT_NAME} complies with the General Data Protection Regulation (GDPR) requirements when processing personal data of EU citisens.`,
          },
          {
            heading: "4.2. AML and KYC Regulations  ",
            title: `We adhere to Anti-Money Laundering (AML) and Know Your Customer (KY) regulations, where applicable, to ensure proper identification and verification of users.`,
          },
          {
            heading: "4.3. Regulatory Reporting",
            title: `${PROJECT_NAME} maintains records and provides necessary reports to comply with relevant industry and regulatory standards.`,
          },
        ]}
      />

      <SubHeadingTextPoint
        heading="5. Incident Management"
        points={[
          {
            heading: "5.1. Security Incident Response ",
            title: `We maintain an incident response plan to detect, respond to, and mitigate security incidents. Incidents are reported, investigated, and resolved promptly.`,
          },
          {
            heading: "5.2. Data Breach Notification  ",
            title: `In case of a data breach, ${PROJECT_NAME} follows a predefined process to assess the situation, notify affected parties, and take appropriate remedial actions.`,
          },
        ]}
      />

      <SubHeadingTextPoint
        heading="6. Employee Training and Awareness"
        points={[
          {
            heading: "6.1. Security Training ",
            title: `All employees receive regular security training to understand security best practices, data handling guidelines, and their roles in ensuring security.`,
          },
          {
            heading: "6.2. Awareness Programs:  ",
            title: `We conduct awareness programs to educate employees about data protection, privacy, and compliance obligations.`,
          },
        ]}
      />
      <SimpleTextPoint
        heading="7. Continuous Improvement"
        description={`${PROJECT_NAME} is committed to continuous improvement of its security and compliance practices. We regularly review and update our policies, procedures, and security measures to adapt to changing threats and regulations.`}
      />

      <SimpleTextPoint
        heading="8. Contact Information"
        description={
          <>
            For questions or concerns related to this Security and Compliance
            Policy, please contact our Security and Compliance team at{" "}
            <b>{COMPANY_EMAIL_ADDRESS}</b>
          </>
        }
      />
    </Box>
  );
};
