"use client";
import { HeroSection } from "./components/hero-section";
import { UseCaseOpenBanking } from "./components/use-case-open-banking";
import { UseCaseCards } from "./components/use-case-cards";

export const UseCases = () => {
  return (
    <>
      <HeroSection />
      <UseCaseCards />
      <UseCaseOpenBanking />
    </>
  );
};
