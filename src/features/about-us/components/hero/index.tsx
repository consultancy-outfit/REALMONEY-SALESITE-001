"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { HeroImage } from "../../assets";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        px: { xs: "10px", md: "50px" },
        mx: { xs: "20px", md: "50px", lg: "100px" },
        py: { md: 8 },
        textAlign: "center",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : isTablet ? "h4" : "h3"}
        component="h1"
        fontWeight="bold"
        gutterBottom
        sx={{
          maxWidth: 900,
          mx: "auto",
          mb: { xs: 4, md: 6 },
          px: { xs: 2, sm: 4 },
        }}
      >
        Powering the Future of Open Finance
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: 700,
          mx: "auto",
          mb: { xs: 4, md: 6 },
          px: { xs: 2, sm: 4 },
          color: "#666D80",
          fontSize: isMobile ? "14px" : "18px",
          fontWeight: 400,
        }}
      >
        At FA Global, we’re building the infrastructure that connects financial
        institutions, businesses, and consumers through secure, real-time access
        to financial data and payments.
      </Typography>
      <Box>
        <Image
          src={HeroImage}
          alt="Finance Illustration"
          width={1200}
          height={600}
          layout="responsive"
        />
      </Box>
      =
    </Box>
  );
};

export default Hero;
