import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  ComprehensiveCompliance,
  CustomerCentricApproach,
  EnhancedSecurity,
  InnovativeTechnology,
  TailoredSolutions,
} from "../../assets";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const WhyPartnerWithUs = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "80%", lg: "70%", xl: "65%" },
        margin: "0 auto",
        marginTop: "-50px",
      }}
    >
      <Box
        display="flex"
        // gap="1rem"
        width="100%"
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <Box
          sx={{
            background: "#C3B2E7",
            borderRadius: "38px",
            padding: "20px 30px",
            width: { xs: "100%", lg: "38%" },
            marginBottom: { xs: "20px" },
            marginRight: { xs: "0px", md: "20px" },
          }}
        >
          <SlideUpInView>
            <HeadingText variant="h5" fontWeight="fontWeightBold">
              Innovative Technology
            </HeadingText>
          </SlideUpInView>
          <SlideUpInView>
            <BodyText
              variant="body1"
              fontWeight="fontWeightMedium"
              marginBottom={15}
              marginTop={3}
            >
              We maintain the highest standards of trust and integrity, ensuring
              the accuracy and reliability of verified information, fostering
              confidence in every interaction.
            </BodyText>
          </SlideUpInView>
          <ScaleInView>
            <Image
              src={InnovativeTechnology}
              alt="Innovative Technology illustration"
            />
          </ScaleInView>
          <SlideUpInView>
            <BodyText
              variant="body1"
              fontWeight="fontWeightMedium"
              marginBottom={3}
              marginTop={8}
            >
              We ensure trust, integrity, accuracy, and reliability in every
              interaction.
            </BodyText>
          </SlideUpInView>
        </Box>

        <Box sx={{ width: { xs: "100%", lg: "62%" } }}>
          <Box
            sx={{
              background: "#F682A5",
              borderRadius: "38px",
              padding: "20px 30px",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <ScaleInView>
              <Image src={EnhancedSecurity} alt="EnhancedSecurity" />
            </ScaleInView>
            <SlideUpInView>
              <HeadingText variant="h5" fontWeight="fontWeightBold">
                Enhanced Security
              </HeadingText>
            </SlideUpInView>

            <SlideUpInView>
              <BodyText
                variant="body1"
                fontWeight="fontWeightMedium"
                marginBottom={7}
                marginTop={3}
              >
                We are committed to innovation, continuously improving our
                solutions and delivering cutting-edge technology that redefines
                industry standards.
              </BodyText>
            </SlideUpInView>
          </Box>

          <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
            <Box
              sx={{
                background: "#C9DA8F",
                borderRadius: "38px",
                padding: "20px 30px",
                width: { xs: "100%", md: "50%" },
                marginBottom: { xs: "20px" },
                marginRight: { xs: "0px", md: "20px" },
              }}
            >
              <ScaleInView>
                <Image src={TailoredSolutions} alt="Tailored Solutions" />
              </ScaleInView>
              <SlideUpInView>
                <HeadingText variant="h5" fontWeight="fontWeightBold">
                  Tailored Solutions
                </HeadingText>
              </SlideUpInView>
              <SlideUpInView>
                <BodyText
                  variant="body1"
                  fontWeight="fontWeightMedium"
                  marginBottom={7}
                  marginTop={3}
                >
                  We place data security at the forefront, implementing rigorous
                  measures to safeguard sensitive information and protect both
                  individuals and businesses.
                </BodyText>
              </SlideUpInView>
            </Box>

            <Box
              sx={{
                background: "#FEDF6F",
                borderRadius: "38px",
                padding: "20px 30px",
                width: { xs: "100%", md: "50%" },
                marginBottom: { xs: "20px" },
              }}
            >
              <SlideUpInView>
                <HeadingText variant="h5" fontWeight="fontWeightBold">
                  Customer-Centric Approach
                </HeadingText>
              </SlideUpInView>
              <SlideUpInView>
                <BodyText
                  variant="body1"
                  fontWeight="fontWeightMedium"
                  marginBottom={7}
                  marginTop={3}
                >
                  Our goal is to equip businesses and individuals with the tools
                  to navigate the digital world securely, enabling informed
                  decisions and fostering genuine connections.
                </BodyText>
              </SlideUpInView>
              <ScaleInView>
                <Box display="flex" justifyContent="end">
                  <Image
                    src={CustomerCentricApproach}
                    alt="Innovative Technology illustration"
                  />
                </Box>
              </ScaleInView>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#F9A474",
          borderRadius: "38px",
          padding: "20px 30px",
        }}
      >
        <ScaleInView>
          <Image src={ComprehensiveCompliance} alt="Comprehensive Compliance" />
        </ScaleInView>
        <SlideUpInView>
          <HeadingText variant="h5" fontWeight="fontWeightBold">
            Comprehensive Compliance
          </HeadingText>
        </SlideUpInView>
        <SlideUpInView>
          <BodyText
            variant="body1"
            fontWeight="fontWeightMedium"
            marginBottom={7}
            marginTop={3}
          >
            Our customers are our priority. We actively listen, adapt, and
            customise our solutions to meet their unique needs, building lasting
            partnerships and delivering exceptional experiences.
          </BodyText>
        </SlideUpInView>
      </Box>
    </Box>
  );
};

export default WhyPartnerWithUs;
