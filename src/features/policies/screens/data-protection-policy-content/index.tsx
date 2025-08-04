import { Box } from "@mui/material";
import { SimpleTextPoint } from "../../components/simple-text-point/simple-text-point";
import { BulletTextPoint } from "../../components/bullet-text-point/bullet-text-point";
import { COMPANY_EMAIL_ADDRESS, PROJECT_NAME } from "@/configs/env";

export const DataProtectionContentFeature = () => {
  return (
    <Box>
      <SimpleTextPoint
        heading="1. Introduction"
        description={`This Data Protection Policy outlines the principles and measures adopted by ${PROJECT_NAME} to ensure the security, privacy, and lawful processing of personal data. We are committed to protecting the rights of individuals whose data we collect and process.`}
      />

      <SimpleTextPoint
        heading="2. Scope"
        description={`This policy applies to all personal data collected, stored, processed, and shared by ${PROJECT_NAME} through our platform, services, and interactions with users, clients, and partners.`}
      />
      <BulletTextPoint
        heading="3. Data Collection and Processing"
        description={`We collect and process personal data for identity verification and service improvement. All data collected is:`}
        hasListMargin
        points={[
          {
            title: `Obtained lawfully and fairly.`,
          },
          {
            title: `Collected for specific, explicit, and legitimate purposes.`,
          },
          {
            title: `Adequate, relevant, and limited to what is necessary.`,
          },
          {
            title: `Accurate and kept up to date.`,
          },
          {
            title: `Retained only for as long as necessary.`,
          },
        ]}
      />

      <SimpleTextPoint
        heading="4. Data Security"
        description={`We implement technical and organisational measures to protect personal data from unauthorised access, disclosure, alteration, or destruction. These include encryption, access controls, regular security assessments, and staff training.`}
      />

      <SimpleTextPoint
        heading="5. Data Sharing and Transfers"
        description={
          "We may share personal data with carefully selected third-party service providers who are contractually bound to maintain data confidentiality and security. Any data transfers outside of your jurisdiction comply with applicable data protection laws."
        }
      />
      <BulletTextPoint
        heading="6. User Rights"
        description={`Individuals have the following rights regarding their personal data:`}
        hasListMargin
        points={[
          {
            heading: `Right to Access `,
            title: `- Request details of the personal data we hold`,
          },
          {
            heading: `Right to Rectification `,
            title: `- Request corrections to inaccurate or incomplete data.`,
          },
          {
            heading: `Right to Erasure `,
            title: `- Request deletion of personal data.`,
          },
          {
            heading: `Right to Restriction `,
            title: `- Request limitation of processing under certain conditions`,
          },
          {
            heading: `Right to Data Portability `,
            title: `- Request personal data in a structured, machine-readable format.`,
          },
          {
            heading: `Right to Object `,
            title: `- Object to processing for specific purposes`,
          },
        ]}
      />
      <SimpleTextPoint
        heading="7. Data Breach Management"
        description={`In the event of a data breach, we will promptly assess the impact, mitigate risks, and notify affected individuals and authorities as required by law.`}
      />
      <SimpleTextPoint
        heading="8. Compliance and Accountability"
        description={`We comply with applicable data protection laws and regulations. Our staff undergo training on data protection principles and their responsibilities under this policy.`}
      />

      <SimpleTextPoint
        heading="9. Updates to This Policy"
        description={`We may update this policy periodically to reflect changes in our practices, legal requirements, or industry standards. The latest version will always be available on our website.`}
      />
      <SimpleTextPoint
        heading="10. Contact Information"
        description={
          <>
            For any questions, concerns, or requests related to data protection,
            please contact our Data Protection Officer at{" "}
            <b>{COMPANY_EMAIL_ADDRESS}</b>
          </>
        }
      />
    </Box>
  );
};
