"use client";

import { CommonCard } from "@/components/cards/common-card";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { Box, Container, useTheme } from "@mui/material";
import Image from "next/image";
import {
  WhyChooseUs1,
  WhyChooseUs2,
  WhyChooseUs4,
  WhyChooseUs5,
} from "../../assets";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";

const WhyChooseUs = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        maxWidth={1300}
      >
        <GradientHeadingBlock
          headingStart="Why"
          highlightText="Choose Us"
          containerSx={{
            minHeight: "150px",
            width: { xs: "90%", md: "837px" },
            textAlign: "center",
            margin: "0 auto",
          }}
        />
        <ContainerGridLayout
          customStyles={{
            gap: 2,
          }}
        >
          <ItemGridLayout
            xs={12}
            lg={7}
            customStyles={{ display: "flex", flexDirection: "column" }}
          >
            <SlideSidewayInView initialX={-100}>
              <CommonCard
                backgroundColor={theme?.palette?.common?.bg_grey}
                customStyles={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                paddingBottom={0}
                borderRadius={8}
              >
                <HeadingText variant="h5" fontWeight="fontWeightNormal">
                  Advanced Verification Tools
                </HeadingText>
                <SubHeadingText
                  variant="subtitle2"
                  fontWeight="fontWeightNormal"
                  marginBottom={1}
                  marginTop={1}
                >
                  Leverage AI-driven identity verification for ultimate
                  security.
                </SubHeadingText>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "54.3%",
                    borderRadius: 2,
                    overflow: "hidden",
                    mt: 2,
                  }}
                >
                  <Image
                    src={WhyChooseUs1}
                    alt="AI-driven identity verification"
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </Box>
              </CommonCard>
            </SlideSidewayInView>
          </ItemGridLayout>
          <ItemGridLayout
            xs={12}
            lg={5}
            customStyles={{ display: "flex", flexDirection: "column" }}
          >
            <CommonCard
              backgroundColor={theme?.palette?.common?.bg_grey}
              customStyles={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
                px: { xs: 2, md: 4 },
                py: { xs: 1, md: 2 },
              }}
              borderRadius={8}
            >
              <SlideSidewayInView initialX={100}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "54.3%",
                    borderRadius: 2,
                    overflow: "hidden",
                    mb: 2,
                  }}
                >
                  <Image
                    src={WhyChooseUs2}
                    alt="Scalable Solutions"
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </Box>

                <Box>
                  <HeadingText variant="h6" fontWeight="fontWeightNormal">
                    Scalable Solutions
                  </HeadingText>
                  <SubHeadingText
                    variant="subtitle2"
                    fontWeight="fontWeightNormal"
                  >
                    Flexible API integration to scale your business
                    effortlessly.
                  </SubHeadingText>
                </Box>
              </SlideSidewayInView>
            </CommonCard>
          </ItemGridLayout>
          <ItemGridLayout
            xs={12}
            lg={5}
            customStyles={{ display: "flex", flexDirection: "column" }}
          >
            <CommonCard
              backgroundColor={theme?.palette?.common?.bg_grey}
              customStyles={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              paddingBottom={0}
              borderRadius={8}
              paddingY={0}
            >
              <SlideSidewayInView initialX={-100}>
                <Box p={2} my={1}>
                  <HeadingText variant="h6" fontWeight="fontWeightNormal">
                    Reference Checks
                  </HeadingText>
                  <SubHeadingText
                    variant="subtitle2"
                    fontWeight="fontWeightNormal"
                  >
                    Comprehensive solution to help you gain valuable insights
                  </SubHeadingText>
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={WhyChooseUs4}
                    alt="Reference Checks"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </SlideSidewayInView>
            </CommonCard>
          </ItemGridLayout>
          <ItemGridLayout
            xs={12}
            lg={7}
            customStyles={{ display: "flex", flexDirection: "column" }}
          >
            <SlideSidewayInView initialX={100}>
              <CommonCard
                backgroundColor={theme?.palette?.common?.bg_grey}
                customStyles={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                paddingBottom={0}
                borderRadius={8}
                paddingY={2}
              >
                <HeadingText variant="h6" fontWeight="fontWeightNormal">
                  Compliance & Security
                </HeadingText>
                <SubHeadingText
                  variant="subtitle2"
                  fontWeight="fontWeightNormal"
                  marginBottom={2}
                  marginTop={1}
                >
                  Ensure full regulatory compliance with powerful risk
                  assessment tools.
                </SubHeadingText>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "54.3%",
                    borderRadius: 2,
                    overflow: "hidden",
                    mb: 2,
                    aspectRatio: "13.5 / 9",
                  }}
                >
                  <Image
                    src={WhyChooseUs5}
                    alt="wcu4"
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </Box>
              </CommonCard>
            </SlideSidewayInView>
          </ItemGridLayout>
        </ContainerGridLayout>
      </Box>
    </Container>
  );
};

export default WhyChooseUs;
