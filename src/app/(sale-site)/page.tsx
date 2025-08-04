import { Hero, RealTimeAccess } from "@/features/home/components";
import HomeThirdSection from "@/features/home/components/3rd-section";
import WhatOurCustomersSaySection from "@/features/home/components/what-our-customers-say";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack spacing={2} textAlign="center">
        <Hero />
        <RealTimeAccess />
        <HomeThirdSection />
        <WhatOurCustomersSaySection />
      </Stack>
    </>
  );
}
