"use client";

import { HeadingText } from "@/components/text/heading-text";
import { Box, Container, Grid, useTheme } from "@mui/material";
import { servicesData } from "./OurServices.data";
import { CommonCard } from "@/components/cards/common-card";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { LinkButton } from "@/components/buttons/link-button";
import { useState } from "react";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const OurServices = () => {
  const [isHover, setIsHover] = useState<any>(null);
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
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <GradientHeadingBlock
          headingStart="Our"
          highlightText="Services"
          containerSx={{
            minHeight: "200PX",
            paddingTop: "70px",
            width: { xs: "90%", md: "837px" },
            textAlign: "center",
            margin: "0 auto",
          }}
        />
        <ContainerGridLayout>
          {servicesData(theme)?.map((service) => (
            <Grid
              key={service.id}
              size={{ lg: 4, md: 6, xs: 12 }}
              onMouseEnter={() => setIsHover(service.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <CommonCard
                backgroundColor={`${service.color}1A`}
                height="100%"
                customStyles={{
                  border: `1px solid ${isHover === service.id ? service.color : `${service.color}1A`}`,
                  transition: "border-color 0.3s",
                  padding: theme.spacing(3),
                  flex: 1,
                  display: "flex",
                }}
              >
                <SlideUpInView initialY={100}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Box>
                      <Box
                        mb={10}
                        borderRadius="50%"
                        p={1}
                        border={`1px solid ${isHover === service.id ? service.color : `${service.color}1A`}`}
                        width={78}
                        height={78}
                        bgcolor={theme?.palette?.common?.white}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <service.icon />
                      </Box>

                      <HeadingText variant="extraHeading2">
                        {service.title}
                      </HeadingText>
                      <SubHeadingText
                        variant="subtitle2"
                        marginBottom={5}
                        marginTop={1}
                      >
                        {service.description}
                      </SubHeadingText>
                    </Box>

                    <Box mt="auto" pt={3}>
                      <LinkButton
                        color={isHover === service.id ? "primary" : "secondary"}
                        customStyles={{
                          borderRadius: 8,
                          bgcolor:
                            isHover === service.id
                              ? service.color
                              : theme?.palette?.common?.white,
                          color:
                            isHover === service.id
                              ? theme?.palette?.common?.white
                              : service.color,
                        }}
                        variant={
                          isHover === service.id ? "contained" : "outlined"
                        }
                        link={service.route}
                      >
                        Read More
                      </LinkButton>
                    </Box>
                  </Box>
                </SlideUpInView>
              </CommonCard>
            </Grid>
          ))}
        </ContainerGridLayout>
      </Box>
    </Container>
  );
};

export default OurServices;
