"use client";
import { Hero } from "@/features/home/components";
import OurServicesHome from "@/features/home/components/2nd-section";
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
        <OurServicesHome />
        <HomeThirdSection />
        <UseCasesHome />
        <WhyChooseRealMoney />
        <TestimonialSectionHome />
        <LastSectionHome />
      </Stack>
    </>
  );
}
