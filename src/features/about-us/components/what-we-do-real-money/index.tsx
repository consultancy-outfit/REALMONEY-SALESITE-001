import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeadingText } from "@/components/text/heading-text";
import { pxToRem } from "@/utils/styles";
import { Box, Typography } from "@mui/material";

export const WhatWeDoRealMoney = () => {
  return (
    <Box
      sx={{
        px: { xs: "10px", md: "50px" },
        mx: { xs: "20px", md: "50px", lg: "100px" },
        py: { md: 8 },
        textAlign: "center",
      }}
    >
      <SlideUpInView>
        <HeadingText
          variant="h3"
          customStyles={{
            color: "common.white",
            lineHeight: pxToRem(60),
            letterSpacing: "1%",
          }}
        >
          What We Do
        </HeadingText>
      </SlideUpInView>
      <br />
      <SlideUpInView>
        <HeadingText
          variant="h3"
          customStyles={{
            color: "#C0C0C0",
            fontWeight: 400,
            lineHeight: pxToRem(60),
            letterSpacing: "1%",
          }}
        >
          Real Money is a comprehensive open finance infrastructure designed to
          empower fintechs, banks, and businesses with intelligent financial
          services. Our mission is simple: to simplify access to real-time
          financial data, optimise money movement, and automate back-office
          operations through secure, compliant, and scalable APIs.
        </HeadingText>
      </SlideUpInView>
      <SlideUpInView>
        <HeadingText
          variant="h3"
          customStyles={{
            color: "#C0C0C0",
            fontWeight: 400,
            lineHeight: pxToRem(60),
            letterSpacing: "1%",
            my: 3,
          }}
        >
          We bring together four powerful product layers under one
          platform—SmartBank Data Layer, Identity & Compliance, Account Help
          Squad (AHS), and Cents—allowing our partners to launch innovative
          financial products faster, smarter, and safer.
        </HeadingText>
      </SlideUpInView>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          flexWrap: "wrap",
        }}
      >
        {[
          {
            id: 1,
            title: "124M+",
            description: "Happy global users",
          },
          {
            id: 2,
            title: "5.00",
            description: "10k rating",
          },
          {
            id: 3,
            title: "250+",
            description: "Trusted company",
          },
        ]?.map((item: any, index: any, array: any) => (
          <Box
            key={item?.id}
            sx={{
              borderRight:
                index !== array.length - 1 ? `1px solid #464646` : "none",
              paddingX: 2,
            }}
          >
            <SlideUpInView>
              <HeadingText
                variant="h3"
                customStyles={{
                  color: "#C0C0C0",
                  lineHeight: pxToRem(60),
                  letterSpacing: pxToRem(1),
                }}
              >
                {item?.title}
              </HeadingText>
            </SlideUpInView>
            <SlideUpInView>
              <Typography
                sx={{
                  color: "#C0C0C0",
                  fontSize: pxToRem(18),
                  lineHeight: pxToRem(28),
                  letterSpacing: "2%",
                }}
              >
                {item?.description}
              </Typography>
            </SlideUpInView>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
