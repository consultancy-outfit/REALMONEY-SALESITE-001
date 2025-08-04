import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const router = useRouter();
  return (
    <Container
      maxWidth="lg"
      sx={{ my: 8, py: 5, background: "#F9FAFB", borderRadius: "30px" }}
    >
      <Box textAlign="center" mb={6}>
        <Typography
          fontSize={isMobile ? "24px" : isTablet ? "32px" : "40px"}
          fontWeight={700}
          gutterBottom
        >
          Empowering Financial Innovation Through Open Banking
        </Typography>
        <Typography
          fontSize={"20px"}
          color="text.secondary"
          maxWidth="md"
          mx="auto"
        >
          Have a question, need a demo, or want to partner with us? We’d love to
          hear from you.
        </Typography>
        <Box
          sx={{
            display: "flex",
            height: "56px",
            padding: "8px 32px",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
        <Button
          onClick={() => router.push("contact-us")}
          sx={{
            padding: "15px 25px",
            color: "white",
            borderRadius: "999px",
            border: "1.5px solid rgba(121, 41, 225, 0.08)",
            background: "var(--Btnprimary, #9747FF)",
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
