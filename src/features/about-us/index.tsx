"use client";

import { Box } from "@mui/material";
import { Hero } from "./components";
// import TrustedBy from "./components/trusted-by";
// import ComplianceTrust from "./components/compliance-trust";
// import WhatWeDo from "./components/what-we-do";
// import BuildDeveloper from "./components/built-developer";
// import OurLeadership from "./components/our-leadership";
// import Products from "./components/products";
// import ContactUs from "./components/contact-us";
import { WhatWeDoRealMoney } from "./components/what-we-do-real-money";
import AboutUsList from "./components/about-us-list";
import { RealMoneyMeetTeam } from "./components/real-money-meet-team";
import { ContactCard } from "./components/real-money-contact-us";

export const AboutUsFeature = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#010101",
        }}
      >
        <Hero />
        <WhatWeDoRealMoney />
        <AboutUsList />
        <RealMoneyMeetTeam />
        <ContactCard/>
        {/* <TrustedBy /> */}
        {/* <ComplianceTrust /> */}
        {/* <WhatWeDo /> */}
        {/* <BuildDeveloper /> */}
        {/* <OurLeadership /> */}
        {/* <Products /> */}
        {/* <ContactUs /> */}
      </Box>
    </>
  );
};
