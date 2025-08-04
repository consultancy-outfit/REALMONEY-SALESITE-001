import { Box } from "@mui/material";
import { SimpleTextPoint } from "../../components/simple-text-point/simple-text-point";
import { SubHeadingTextPoint } from "../../components/sub-heading-text-point/sub-heading-text-point";
import { COMPANY_EMAIL_ADDRESS, PROJECT_NAME } from "@/configs/env";

export const CookiesPolicyContentFeature = () => {
  return (
    <Box>
      <SimpleTextPoint
        heading="1. Introduction"
        description={
          <>
            This Cookie Policy (`&quot;Policy`&quot;) explains how cookies and
            similar tracking technologies are used when you visit or interact
            with our online platform, <b>{PROJECT_NAME}</b>. It provides details
            on the types of cookies we use, their purposes, and your options for
            managing them.
          </>
        }
      />

      <SimpleTextPoint
        heading="2. What Are Cookies?"
        description={`Cookies are small text files stored on your device (computer, smartphone, tablet, etc.) when you visit our platform. They help websites function efficiently, enhance user experience, and provide insights to website owners.`}
      />
      <SubHeadingTextPoint
        heading="3. Types of Cookies We Use"
        points={[
          {
            heading: "3.1 Essential Cookies: ",
            title: `These cookies are necessary for the platform to function correctly. They enable navigation, form submissions, and preference settings. Without these, some platform features may not work properly`,
          },
          {
            heading: "3.2 Analytical/Performance Cookies ",
            title: `These cookies collect data on how users interact with the platform, such as frequently visited pages or error messages. This information helps us improve performance and user experience.`,
          },
          {
            heading: "3.3 Functionality Cookies",
            title: `Functionality cookies remember user preferences, such as language settings, region, or font choices. They enhance personalisation and usability by retaining your custom selections.`,
          },
          {
            heading: "3.4 Advertising/Targeting Cookies",
            title: `These cookies deliver ads tailored to your interests and limit how often you see the same advertisement. They also help measure the effectiveness of advertising campaigns. Typically, third-party advertising networks place these cookies with our permission.`,
          },
        ]}
      />

      <SimpleTextPoint
        heading="4. Third-Party Cookies"
        description={`We may allow third-party partners, such as advertisers, to place cookies on our platform. These cookies track browsing activity to deliver personalised ads based on your interests.`}
      />

      <SimpleTextPoint
        heading="5. Your Consent"
        description={`By using our platform, you consent to our use of cookies as outlined in this Policy. You can manage cookie preferences through your browser settings or by following third-party cookie provider instructions.`}
      />
      <SimpleTextPoint
        heading="6. Data Protection & Privacy"
        description={`Some cookies may involve processing personal data. For details on how we handle your data, please refer to our Privacy Policy.`}
      />
      <SimpleTextPoint
        heading="7. Changes to This Policy"
        description={`We may update this Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on our platform with a revised effective date. We encourage you to review this Policy regularly.`}
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
