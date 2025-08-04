"use client";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import { AboutUsRealMoneyImage } from "../../assets";
import { pxToRem } from "@/utils/styles";

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
        component="h1"
        fontWeight={700}
        gutterBottom
        sx={{
          maxWidth: 900,
          mx: "auto",
          mb: { xs: 4, md: 6 },
          px: { xs: 2, sm: 4 },
          background: "linear-gradient(180deg, #FFFFFF 0%, #999999 93.75%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: pxToRem(48), md: pxToRem(60) },
          letterSpacing: "1%",
          lineHeight: pxToRem(72),
        }}
      >
        Powering the Future of Open Finance
      </Typography>
      {/* <Typography
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
      </Typography> */}
      <Box>
        <Avatar
          src={AboutUsRealMoneyImage?.src}
          alt="Finance Illustration"
          variant="rounded"
          sx={{
            width: { xs: "100%" },
            height: { xs: "auto" },
            maxWidth: "100%",
            objectFit: "cover",
            backgroundColor: "transparent",
            margin: "auto",
            verticalAlign: "middle",
            display: "block",
            fontStyle: "italic",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
