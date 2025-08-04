"use client";

import { HeadingText } from "@/components/text/heading-text";
import { Box, Container, Grid, useTheme } from "@mui/material";
import { CommonCard } from "@/components/cards/common-card";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { useState } from "react";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import { weExistData } from "./WeExist.data";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const WeExist = () => {
  const [isHover, setIsHover] = useState<any>(null);
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 10,
        bgcolor: theme?.palette?.common?.bg_brown,
        py: "40px",
        width: "100%",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        borderRadius={4}
      >
        <GradientHeadingBlock
          headingStart="Why"
          highlightText="We Exist"
          containerSx={{
            minHeight: "200PX",
            paddingTop: "50px",
            width: { xs: "90%", md: "837px" },
            textAlign: "center",
            margin: "0 auto",
          }}
        />
        <SlideUpInView initialY={100}>
          <ContainerGridLayout>
            {weExistData(theme)?.map((service) => (
              <Grid
                key={service.id}
                size={{ lg: 4, md: 6, xs: 12 }}
                onMouseEnter={() => setIsHover(service.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <CommonCard
                  backgroundColor={theme?.palette?.common?.white}
                  height="100%"
                  customStyles={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "left",
                    transition: "border-color 0.3s",
                    padding: theme.spacing(3),
                    borderRadius: "20px",
                  }}
                >
                  <Box>
                    <Box
                      mb={10}
                      borderRadius="50%"
                      p={1}
                      border={`3px solid ${isHover === service.id ? service.darkColor : service.mainColor}`}
                      width={78}
                      height={78}
                      bgcolor={theme?.palette?.common?.white}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <service.icon />
                    </Box>

                    <HeadingText variant="h5" fontWeight="fontWeightMedium">
                      {service.title}
                    </HeadingText>
                    <SubHeadingText
                      variant="subtitle2"
                      fontWeight="fontWeightNormal"
                      marginBottom={5}
                      marginTop={1}
                    >
                      {service.description}
                    </SubHeadingText>
                  </Box>
                </CommonCard>
              </Grid>
            ))}
          </ContainerGridLayout>
        </SlideUpInView>
      </Box>
    </Container>
  );
};

export default WeExist;
