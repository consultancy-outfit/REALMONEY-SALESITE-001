"use client";

import { Box } from "@mui/material";
import { Hero } from "./components";
import TrustedBy from "./components/trusted-by";
import ComplianceTrust from "./components/compliance-trust";
import WhatWeDo from "./components/what-we-do";
import BuildDeveloper from "./components/built-developer";
import OurLeadership from "./components/our-leadership";
import Products from "./components/products";
import ContactUs from "./components/contact-us";
export const AboutUsFeature = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "common.white",
        }}
      >
        <Hero />
        <TrustedBy />
        <ComplianceTrust />
        <WhatWeDo />
        <BuildDeveloper />
        <OurLeadership />
        <Products />
        <ContactUs />
      </Box>
    </>
  );
};
