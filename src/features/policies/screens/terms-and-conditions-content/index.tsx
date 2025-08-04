"use client";
import { Box, useTheme } from "@mui/material";
import { SimpleTextPoint } from "../../components/simple-text-point/simple-text-point";
import { BulletTextPoint } from "../../components/bullet-text-point/bullet-text-point";
import {
  COMPANY_CRN,
  COMPANY_EMAIL_ADDRESS,
  COMPANY_LOCATION_ADDRESS,
  FRONTEND_SALE_SITE_BASE_URL,
  PROJECT_NAME,
} from "@/configs/env";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import Link from "next/link";

export const TermsAndConditionsContentFeature = () => {
  const theme = useTheme();
  return (
    <Box>
      <SlideSidewayInView duration={0.5}>
        <Box sx={{ marginY: { xs: 2, md: 4 } }}>
          <SubHeadingText fontWeight="fontWeightNormal">
            {
              <>
                These terms and conditions (&quot;Terms&quot;) govern your use
                of the
                {PROJECT_NAME} project (&quot;{PROJECT_NAME}&quot;){" "}
                <Link
                  href={FRONTEND_SALE_SITE_BASE_URL}
                  style={{ color: theme?.palette?.common?.link }}
                >
                  {FRONTEND_SALE_SITE_BASE_URL}
                </Link>{" "}
                is operated by Pay io Services LTD (&quot;We&quot;). We are
                registered in England and Wales under company number{" "}
                {COMPANY_CRN} with its registered office at{" "}
                {COMPANY_LOCATION_ADDRESS}, United Kingdom.
              </>
            }
          </SubHeadingText>
        </Box>
      </SlideSidewayInView>
      <SimpleTextPoint
        heading="1. Project Description"
        description={`${PROJECT_NAME} is an AI-powered identity verification solution designed to prevent identity fraud and ensure compliance with Know Your Customer (KYC), Know Your Business (KYB) regulations. The app prioritises quick, easy, and secure identity verification, safeguarding both users and businesses by verifying identities efficiently.`}
      />
      <SimpleTextPoint
        heading="2. Data Collection and Processing"
        description={`You agree to use the Project only for its intended purpose and in compliance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of any access credentials provided for the Project.`}
      />
      <SimpleTextPoint
        heading="3. Intellectual Property"
        description={`The Project and its contents, including but not limited to text, graphics, logos, images, and software, are the property of the Company and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of the Project without the Company's express written consent.`}
      />
      <SimpleTextPoint
        heading="4. Privacy"
        description={`Your use of the Project may involve the collection and processing of personal data. The Company will handle any personal data in accordance with its Privacy Policy, which is available on the Project's website.`}
      />
      <SimpleTextPoint
        heading="5. Disclaimer of Warranties"
        description={`The Project is provided "as is" and "as available," without warranties of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non- infringement.`}
      />
      <BulletTextPoint
        heading="6. Limitation of Liability"
        description={`To the extent permitted by law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from`}
        hasListStyle={false}
        points={[
          {
            title: `Your use or inability to use the Project`,
          },
          {
            title: `Any unauthorised access to or use of our servers and/or any personal information stored therein`,
          },
          {
            title: `Any interruption or cessation of transmission to or from the Project.`,
          },
          {
            title: `Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Project.`,
          },
          {
            title: `Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available via the Project.`,
          },
        ]}
      />
      <SimpleTextPoint
        heading="7. Termination"
        description={`The Company reserves the right to terminate or suspend your access to the Project at any time, with or without cause, and with or without notice.`}
      />
      <SimpleTextPoint
        heading="8. Changes to Terms"
        description={`The Company may revise these Terms at any time without notice. By continuing to use the Project after any changes, you agree to be bound by the revised Terms.`}
      />
      <SimpleTextPoint
        heading="9. Governing Law"
        description={`These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law principles.`}
      />
      <SimpleTextPoint
        heading="10. Contact Information"
        description={
          <>
            If you have any questions or concerns about these Terms, please
            contact us at <b>{COMPANY_EMAIL_ADDRESS}</b>
          </>
        }
      />
    </Box>
  );
};
