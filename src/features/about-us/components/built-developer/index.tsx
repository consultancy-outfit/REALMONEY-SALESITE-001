"use client";
import React from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";

import Image from "next/image";
import { aaa, bbb, ccc } from "../../assets";

const BuildDeveloper = () => {
  const features = [
    {
      image: aaa,
      title: "Unified Bank Integration",
      desc: "From startups to enterprises, companies rely on our platform to power secure, efficient financial services. Whether you're building a fintech app or streamlining internal operations, our open banking solutions are designed to scale with your needs.",
    },
    {
      image: bbb,
      title: "Embedded Payments",
      desc: "We take regulatory compliance seriously. Our platform is fully aligned with PSD2, GDPR, and other global standards — so you can focus on innovation, while we ensure your data handling and user consent flows meet the highest compliance requirements.",
    },
    {
      image: ccc,
      title: "Data Intelligence & Insights",
      desc: "Accelerate development with ready-to-use tools, clear documentation, and example code. Spend less time debugging and more time building innovative financial products.",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Typography
          gutterBottom
          sx={{ fontWeight: 700, fontSize: { xs: "28px", md: "40px" } }}
        >
          Built for Developers
        </Typography>

        <Typography
          sx={{
            mb: 8,
            fontWeight: 400,
            fontSize: { xs: "16px", md: "24px" },
          }}
        >
          Like the best API platforms in the world, our technology is built with
          developers in mind. We offer extensive documentation, SDKs, sandbox
          environments, and technical support to help you go live fast.
        </Typography>

        {/* Scrollable container */}
        <Box
          sx={{
            height: {
              xs: "600px",
              lg: "auto",
            },
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            overflowY: {
              xs: "auto",
              lg: "hidden",
            },
            overflowX: {
              xs: "hidden",
              lg: "auto",
            },
            scrollBehavior: "smooth",
            gap: 2,
            px: 1,

            "& > *": {
              flexShrink: 0,
            },

            // Scrollbar styles
            "&::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#9747FF",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f0f0f0",
            },
            scrollbarColor: "#9747FF #f0f0f0",
            scrollbarWidth: "thin",
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={{
                flexShrink: 0,
                width: {
                  xs: "100%",
                  sm: "100%",
                  lg: "550px",
                },
              }}
            >
              <Box sx={{ position: "relative", width: "100%", height: 200 }}>
                <Image
                  src={feature.image}
                  alt={`logo-${index}`}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "10px" }}
                />
              </Box>

              <CardContent>
                <Typography gutterBottom variant="h6">
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {feature.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BuildDeveloper;
