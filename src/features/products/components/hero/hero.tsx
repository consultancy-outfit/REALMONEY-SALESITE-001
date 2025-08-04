"use client";

import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { HeroImageBG } from "../../assets/images";
import { LinkButton } from "@/components/buttons/link-button";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

interface SectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  showButton?: boolean;
  backgroundImageUrl?: string;
  textColor?: string;
}

const HeroCustomSection: React.FC<SectionProps> = ({
  title = "Smarter Spending. Instant Transfers. Global Access.",
  subtitle = "Centpay",
  description = "Centpay is a next-generation digital wallet...",
  buttonText = "",
  showButton = true,
  backgroundImageUrl = HeroImageBG.src,
  textColor = "#FFFFFF",
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: textColor,
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 2, md: 4 },
        textAlign: "center",
        width: "100%",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <SlideUpInView>
        <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1200px" }}>
          {subtitle && (
            <LinkButton
              customStyles={{
                borderRadius: "999px",
                border: `1.5px solid #404040`,
                bgcolor: "#272835",
                color: "#ADAEBA",
                variant: "outline",
              }}
            >
              {subtitle}
            </LinkButton>
          )}
          {title && (
            <Typography
              variant="h3"
              component="h3"
              marginTop={{ xs: "24px", md: "36px" }}
              color="#FFFFFF"
              fontWeight={600}
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" },
                lineHeight: { xs: 1.2, md: 1.1 },
              }}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              variant="subtitle2"
              color="#E6E6E6"
              sx={{
                maxWidth: { xs: "100%", md: "970px" },
                margin: "0 auto 2rem",
                marginTop: "32px",
              }}
            >
              {description}
            </Typography>
          )}
          {showButton && buttonText && (
            <LinkButton
              customStyles={{
                borderRadius: "999px",
                border: `1.5px solid ${theme.palette.primary.main}`,
                marginTop: "32px",
                // px: "24px",
                // py: "8px",
                bgcolor: theme.palette.primary.main,
                color: theme.palette.common.white,
                // height: "50px",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // width: "fit-content",
              }}
            >
              {buttonText}
            </LinkButton>
          )}
        </Box>
      </SlideUpInView>
    </Box>
  );
};

export default HeroCustomSection;
