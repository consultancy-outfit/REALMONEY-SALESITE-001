'use client'
import { Hero, RealTimeAccess } from "@/features/home/components";
import HomeThirdSection from "@/features/home/components/3rd-section";
import UseCasesHome from "@/features/home/components/4th-section";
import WhyChooseRealMoney from "@/features/home/components/5th-section";
import TestimonialSectionHome from "@/features/home/components/6th-section";
import LastSectionHome from "@/features/home/components/7th-section";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack spacing={8} textAlign="center">
        <Hero />
        <RealTimeAccess />
        <HomeThirdSection />
        <UseCasesHome />
        <WhyChooseRealMoney/>
        <TestimonialSectionHome/>
        <LastSectionHome/>
      </Stack>
    </>
  );
}
