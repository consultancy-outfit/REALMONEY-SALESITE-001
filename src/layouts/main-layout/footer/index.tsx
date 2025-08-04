"use client";

import { FAGlobalLogoImage } from "@/assets/images/logo";
// import { Icon5 } from "@/assets/icons/common";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import XIcon from "@mui/icons-material/X";
import { Box, Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { about, products, resources } from "./footer.data";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        bgcolor: "#010101",
        color: "white",
        px: { xs: 5, sm: 10 },
        py: { xs: 3, sm: 5 },
        m: 2,
        borderRadius: "12px",
      }}
    >
      <Grid container spacing={4} mb={4}>
        {/* Logo and Description */}
        <Grid size={{ xs: 12 }}>
          <Stack
            spacing={2}
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
          >
            <Stack>
              <Image src={FAGlobalLogoImage} alt="Logo" />
            </Stack>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 550,
                color: "#ADAEBA",
                fontFamily: "Manrope",
                fontSize: 16,
              }}
            >
              A smarter, faster way to connect, manage, and move money across
              accounts, currencies, and customers in real time.
            </Typography>
            {/* <Stack direction="row" spacing={2} mt={2}>
              <IconButton
                color="inherit"
                sx={{ backgroundColor: "#2E2E3E", p: 1 }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ backgroundColor: "#2E2E3E", p: 1 }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ backgroundColor: "#2E2E3E", p: 1 }}
              >
                <XIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ backgroundColor: "#2E2E3E", p: 1 }}
              >
                <Image src={Icon5} alt="icon5" />
              </IconButton>
            </Stack> */}
          </Stack>
        </Grid>

        <Grid size={{ md: 2 }} display={{ xs: "none", md: "block" }}></Grid>
        {/* Products */}
        <Grid size={{ md: 2, xs: 12 }}>
          <Typography
            variant="subtitle1"
            color="#F6F7FF"
            fontFamily="Manrope"
            fontWeight={500}
          >
            Products
          </Typography>
          {products.map((item) => (
            <Typography
              key={item?.id}
              variant="body1"
              color="#D2D3DF"
              fontFamily="Manrope"
              sx={{ mt: 1.5, cursor: "pointer" }}
              onClick={() => {
                router.push(item?.link);
              }}
            >
              {item?.label}
            </Typography>
          ))}
        </Grid>

        {/* Company */}
        <Grid size={{ md: 2, xs: 6 }}>
          <Typography
            variant="subtitle1"
            color="#F6F7FF"
            fontFamily="Manrope"
            fontWeight={500}
          >
            Company
          </Typography>
          {about.map((item) => (
            <Typography
              key={item?.id}
              variant="body1"
              color="#D2D3DF"
              fontFamily="Manrope"
              sx={{ mt: 1.5, cursor: "pointer" }}
              onClick={() => {
                router.push(item?.link);
              }}
            >
              {item?.label}
            </Typography>
          ))}
        </Grid>

        {/* Resources */}
        <Grid size={{ md: 2, xs: 6 }}>
          <Typography
            variant="subtitle1"
            color="#F6F7FF"
            fontFamily="Manrope"
            fontWeight={500}
          >
            Resources
          </Typography>
          {resources.map((item) => (
            <Typography
              key={item?.id}
              variant="body1"
              color="#D2D3DF"
              fontFamily="Manrope"
              sx={{ mt: 1.5, cursor: "pointer" }}
              onClick={() => {
                router.push(item?.link);
              }}
            >
              {item?.label}
            </Typography>
          ))}
        </Grid>

        {/* Support */}
        <Grid size={{ md: 2, xs: 12 }}>
          <Typography
            variant="subtitle1"
            color="#F6F7FF"
            fontFamily="Manrope"
            fontWeight={500}
          >
            Support
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1.5, cursor: "pointer" }}
            color="#D2D3DF"
            fontFamily="Manrope"
          >
            Email: info@realmoney.co.uk
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1.5, cursor: "pointer" }}
            color="#D2D3DF"
            fontFamily="Manrope"
          >
            Address: 30 Churchill Place, London, England, E14 5RE
          </Typography>
        </Grid>
      </Grid>

      {/* Bottom bar */}
      <hr />
      <Box
        mt={3}
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={2}
      >
        <Typography
          variant="body1"
          sx={{ color: "#EEEFFB", fontFamily: "Manrope" }}
        >
          All Rights Reserved. Copyright © {currentYear} Real Money.
        </Typography>
        <Stack direction="row" spacing={1}>
          <Link
            href="/privacy-policy"
            color="inherit"
            sx={{
              color: "#EEEFFB",
              fontFamily: "Manrope",
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </Link>
          <Typography>|</Typography>
          <Link
            href="/terms-and-conditions"
            color="inherit"
            sx={{
              color: "#EEEFFB",
              fontFamily: "Manrope",
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            Terms & Conditions
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
