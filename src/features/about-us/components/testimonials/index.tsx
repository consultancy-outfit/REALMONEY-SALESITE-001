"use client";

import { HeadingText } from "@/components/text/heading-text";
import { Box, Rating, useTheme } from "@mui/material";
import { testimonialsData } from "./testimonials.data";
import Image from "next/image";
import { CommonCard } from "@/components/cards/common-card";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const Testimonials = () => {
  const theme = useTheme();
  return (
    <Box
      mt={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgcolor={theme?.palette?.common?.bg_brown}
    >
      <Box
        maxWidth={800}
        display="flex"
        flexDirection="column"
        gap={2}
        my={10}
        textAlign="center"
      >
        <GradientHeadingBlock
          headingStart="Testimonials from our satisfied"
          highlightText="customers"
        />
      </Box>
      <SlideUpInView initialY={100}>
        <ContainerGridLayout>
          {testimonialsData?.map((item) => (
            <ItemGridLayout
              key={item?.id}
              lg={4}
              customStyles={{
                mx: "auto",
                maxWidth: { xs: "90%", md: 400, lg: 350 },
                mb: 4,
              }}
            >
              <CommonCard
                height="100%"
                customStyles={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "left",
                  gap: { md: 3, xs: 1.5 },
                }}
                borderRadius={4}
              >
                <Box display="flex" alignItems="center" gap={4}>
                  <Image
                    src={item?.image}
                    alt=""
                    width={60}
                    height={60}
                    style={{
                      borderRadius: "50%",
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  />
                  <Box>
                    <SubHeadingText
                      variant="subtitle1"
                      fontWeight="fontWeightNormal"
                    >
                      {item?.name}
                    </SubHeadingText>
                    <SubHeadingText
                      variant="subtitle2"
                      fontWeight="fontWeightNormal"
                    >
                      {item?.position}
                    </SubHeadingText>
                  </Box>
                </Box>
                <HeadingText variant="h5" fontWeight="fontWeightNormal">
                  {item?.description}
                </HeadingText>
                <Rating name="simple-controlled" value={5} readOnly />
              </CommonCard>
            </ItemGridLayout>
          ))}
        </ContainerGridLayout>
      </SlideUpInView>
    </Box>
  );
};

export default Testimonials;
