"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ANIMATIONS_BASE_DURATION } from "@/constants/animations";

type Props = {
  children: React.ReactNode;
};

export const SmoothScrollProvider = ({ children }: Props) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: ANIMATIONS_BASE_DURATION?.SMOOTH_SCROLL,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
