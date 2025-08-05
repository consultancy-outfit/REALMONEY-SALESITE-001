"use client";

import { Box } from "@mui/material";
import { Hero } from "./components";
import { WhatWeDoRealMoney } from "./components/what-we-do-real-money";
import AboutUsList from "./components/about-us-list";
import { RealMoneyMeetTeam } from "./components/real-money-meet-team";
import { ContactCard } from "./components/real-money-contact-us";

export const AboutUsFeature = () => {
  return (
    <>
      <Box
        sx={{
          mb: 4,
          width: "100%",
        }}
      >
        <Hero />
        <Box sx={{ my: { xs: 5, md: 10 } }}>
          <WhatWeDoRealMoney />
        </Box>
        <Box sx={{ my: { xs: 5, md: 10 } }}>
          <AboutUsList />
        </Box>
        <Box sx={{ my: { xs: 5, md: 10 } }}>
          <RealMoneyMeetTeam />
        </Box>
        <Box
          sx={{
            my: { xs: 5, md: 10 },
            px: { xs: 3, xl: 4 },
          }}
        >
          <ContactCard />
        </Box>
      </Box>
    </>
  );
};
