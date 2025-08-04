"use client";
import { HeadingText } from "@/components/text/heading-text";
import { usePathname } from "next/navigation";
import { PoliciesLayoutHeadingData } from "../policies-layout.data";

export const Header = () => {
  const pathname = usePathname();

  return (
    <HeadingText variant="h2" fontWeight="fontWeightSemiBold">
      {PoliciesLayoutHeadingData[pathname?.replace("/", "")]}
    </HeadingText>
  );
};
