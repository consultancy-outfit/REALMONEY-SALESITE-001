"use client";

import { CommonCard } from "@/components/cards/common-card";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { Box, Container, IconButton, useTheme } from "@mui/material";
import { transparencyData } from "./Transparency.data";
import { BodyText } from "@/components/text/body-text";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "../../assets";
import { motion } from "framer-motion";
import { useState } from "react";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const MotionButton = motion.create(IconButton);

const Transparency = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = transparencyData(theme);
  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 15,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        gap={2}
        justifyContent="space-around"
      >
        <Box gap={6} display="flex" flexDirection="column">
          <HeadingText variant="h3" fontWeight="fontWeightMedium">
            Build transparency online with FA Global | Smarter Open Banking &
            Financial Data Solutions
          </HeadingText>
          <Box maxWidth="1200px" mx="auto">
            <SubHeadingText variant="subtitle2" fontWeight="fontWeightNormal">
              What stops fraudsters today may not stop them tomorrow. Identity
              Gram and its exceptional fraud team work around the clock to stay
              ahead of fraudsters. We continue to invest in innovation to offer
              leading identity fraud prevention technology.
            </SubHeadingText>
          </Box>

          <ContainerGridLayout
            customStyles={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
              width: "100%",
            }}
          >
            {data.map((item, index) => (
              <ItemGridLayout
                key={item.id}
                lg={3}
                customStyles={{
                  display: "flex",
                  justifyContent: "center",
                  left: `${(index - currentIndex) * 100}%`,
                  transition: "left 0.5s ease",
                  transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
                  width: "300px",
                  zIndex: index === currentIndex ? 1 : 0,
                  border: `1px solid ${
                    index === currentIndex ? item.color : "transparent"
                  }`,
                }}
              >
                <SlideUpInView initialY={100}>
                  <CommonCard
                    height="100%"
                    customStyles={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: 3,
                      textAlign: "left",
                      boxShadow: 0,
                      bgcolor: "common.tinted_white",
                    }}
                  >
                    <Box
                      mb={3}
                      borderRadius="50%"
                      p={1}
                      width={78}
                      height={78}
                      bgcolor={theme?.palette?.common?.white}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <item.icon />
                    </Box>
                    <Box>
                      <SubHeadingText
                        variant="subtitle2"
                        fontWeight="fontWeightMedium"
                      >
                        {item.title}
                      </SubHeadingText>
                      <BodyText variant="body2" fontWeight="fontWeightNormal">
                        {item.description}
                      </BodyText>
                      <Image
                        src={item.image}
                        alt="transparency"
                        width={200}
                        height={200}
                        style={{
                          width: "100%",
                          height: "auto",
                          marginTop: "20px",
                        }}
                      />
                    </Box>
                  </CommonCard>
                </SlideUpInView>
              </ItemGridLayout>
            ))}
          </ContainerGridLayout>
          <Box display="flex" justifyContent="center" gap={2}>
            <MotionButton
              onClick={() => handleArrowClick("left")}
              whileHover={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowLeft />
            </MotionButton>

            <MotionButton
              onClick={() => handleArrowClick("right")}
              whileHover={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight />
            </MotionButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Transparency;
