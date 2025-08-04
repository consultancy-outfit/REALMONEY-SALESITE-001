"use client";
import { Box, Typography, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { layer } from "../../assets";
import Image from "next/image";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    h2: {
      fontSize: "2.5rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
  },
});

const stats = [
  {
    icon: layer,
    value: "500+",
    label: "Connected Banks",
    description:
      "Trusted by thousands of users to securely connect their bank accounts every month.",
  },
  {
    icon: layer,
    value: "£5 million",
    label: "Backing from Fintech Investors",
    description:
      "Fuelled by investment to scale secure and connected financial services.",
  },
  {
    icon: layer,
    value: "99.9%",
    label: "Uptime percentage",
    description: "Reliable, secure, and always available when you need it.",
  },
];

const ComplianceTrust = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          px: { xs: "10px", md: "50px" },
          mx: { xs: "20px", md: "50px", lg: "100px" },
          py: { md: 8 },
        }}
      >
        <Box my={5}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "16px",
              mb: 2,
              color: "#9747FF",
            }}
          >
            Connect. Build. Scale
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 600,
              mb: 3,
            }}
          >
            Compliance and trust you can rely on
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",

              lineHeight: 1.6,
              color: "text.secondary",
            }}
          >
            FA Global is built with end-to-end encryption, PSD2 compliance, and
            GDPR protection as standard. Our platform ensures that every
            connection is secure, every transaction is compliant, and every
            user&apos;s data is handled with the highest level of integrity and
            transparency.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box
                sx={{
                  background: "#FAFAFA",
                  p: 3,
                  my: { md: 5 },
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                }}
              >
                <Box
                  width={56}
                  height={56}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ background: "#9747FF", borderRadius: "10px" }}
                >
                  <Image
                    src={layer}
                    alt={`logo-${index}`}
                    width={32}
                    height={32}
                  />
                </Box>

                <Typography
                  sx={{
                    fontWeight: 700,
                    mt: 4,
                    fontSize: { xs: "24px", md: "52px" },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {stat.label}
                </Typography>
                <Typography variant="body1">{stat.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default ComplianceTrust;
