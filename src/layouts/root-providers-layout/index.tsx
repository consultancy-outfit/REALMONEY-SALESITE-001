"use client";
import LazyComponentLoader from "@/components/loaders/lazy-component-loader";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { SnackBarProvider } from "@/providers/snackbar.provider";
import { UiThemeProvider } from "@/providers/ui-theme-provider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Suspense } from "react";
import useInactivityLogout from "@/features/ChatBot/hooks/use-inactivity-logout";

export default function RootProvidersLayout(props: any) {
  const { children } = props;
  useInactivityLogout();
  return (
    <>
      <Suspense fallback={<LazyComponentLoader />}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <UiThemeProvider>
            <SnackBarProvider>
              <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </SnackBarProvider>
          </UiThemeProvider>
        </LocalizationProvider>
      </Suspense>
    </>
  );
}
