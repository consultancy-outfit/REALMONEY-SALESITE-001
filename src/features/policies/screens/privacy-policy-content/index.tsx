import { Box } from "@mui/material";
import { SimpleTextPoint } from "../../components/simple-text-point/simple-text-point";
import { COMPANY_EMAIL_ADDRESS, PROJECT_NAME } from "@/configs/env";
import { SubHeadingTextPoint } from "../../components/sub-heading-text-point/sub-heading-text-point";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";

export const PrivacyPolicyContentFeature = () => {
  return (
    <Box>
      <SlideSidewayInView duration={0.5}>
        <SubHeadingText fontWeight="fontWeightNormal">
          {`Thank you for choosing ${PROJECT_NAME}.`}
        </SubHeadingText>
      </SlideSidewayInView>
      <SlideSidewayInView duration={0.5}>
        <Box sx={{ marginY: { xs: 2, md: 4 } }}>
          <SubHeadingText fontWeight="fontWeightNormal">
            This Privacy Policy outlines how we collect, use, disclose, and
            protect your personal information when you use our services. Please
            review this policy carefully to understand how we handle your data.
          </SubHeadingText>
        </Box>
      </SlideSidewayInView>
      <SubHeadingTextPoint
        heading="1. Information We Collect"
        description={`When you use ${PROJECT_NAME}, we may collect the following types of personal information:`}
        points={[
          {
            heading: "1.1 User Information ",
            title: `Includes your name, email address, contact details, and any data provided during registration or account setup.`,
          },
          {
            heading: "1.2 Verification Data ",
            title: `Covers identity verification details such as government-issued identification documents, facial images, and other relevant information.`,
          },
          {
            heading: "1.3 Usage Information",
            title: `Involves data on how you interact with our platform, including the features used, actions taken, and session durations.`,
          },
          {
            heading: "1.4 Device Information",
            title: `Encompasses device-specific data like device type, operating system, browser type, IP address, and mobile network details.`,
          },
        ]}
      />
      <SubHeadingTextPoint
        heading="2. How We Use Your Information"
        description={`We process your personal information for the following purposes:`}
        points={[
          {
            heading: "2.1 Identity Verification ",
            title: `Ensuring accuracy and security in verifying identities.`,
          },
          {
            heading: "2.2 Service Enhancement ",
            title: `Analysing user data to improve functionality, user experience, and develop new features.`,
          },
          {
            heading: "2.3 Communication",
            title: `Providing updates, service notifications, and promotional offers.`,
          },
          {
            heading: "2.4 Legal Compliance",
            title: `Fulfilling legal obligations, resolving disputes, and enforcing terms and conditions.`,
          },
        ]}
      />
      <SubHeadingTextPoint
        heading="3. Information Sharing & Disclosure"
        description={`We may share your information with:`}
        points={[
          {
            heading: "3.1 Service Providers ",
            title: `Trusted third-party partners who assist in delivering our services while maintaining confidentiality.`,
          },
          {
            heading: "3.2 Legal Authorities ",
            title: `When required by law or to protect our rights, safety, or comply with legal requests.`,
          },
          {
            heading: "3.3 Business Transfers",
            title: `In cases of mergers, acquisitions, or asset sales, where your data may be transferred to the new entity.`,
          },
        ]}
      />
      <SimpleTextPoint
        heading="4. Data Security"
        description={`We implement security measures to safeguard your personal information from unauthorised access, alteration, disclosure, or destruction. However, no online transmission or storage method is entirely secure, and we cannot guarantee absolute security.`}
      />
      <SimpleTextPoint
        heading="5. Your Rights & Choices"
        description={
          "You have the right to access, correct, or delete your personal data. You may also opt out of receiving promotional communications from us."
        }
      />
      <SimpleTextPoint
        heading="6. Children's Privacy"
        description={`${PROJECT_NAME} is not intended for individuals under 13 years of age. We do not knowingly collect or store information from children.`}
      />
      <SimpleTextPoint
        heading="7. Updates to This Privacy Policy"
        description={`We may update this Privacy Policy periodically. Any changes will be posted here, with the latest revision date indicated.`}
      />
      <SimpleTextPoint
        heading="8. Contact Us"
        description={
          <>
            For any questions, concerns, or requests regarding this Privacy
            Policy, please contact us at <b>{COMPANY_EMAIL_ADDRESS}.</b>
          </>
        }
      />
    </Box>
  );
};
