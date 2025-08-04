"use client";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { GetStartedInfoCard, GetStartedForm } from "./components";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { Box } from "@mui/material";
import { CommonCard } from "@/components/cards/common-card";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

export const GetStarted = () => {
  return (
    <Box sx={{ minHeight: "90dvh", px: { lg: 4, md: 2, xs: 1 } }}>
      <ScaleInView>
        <CommonCard
          borderRadius={8}
          customStyles={{
            mb: { md: 8, sm: 4, xs: 2 },
            backgroundColor: "common.bg_dark",
          }}
        >
          <ContainerGridLayout>
            <ItemGridLayout md={6}>
              <GetStartedInfoCard />
            </ItemGridLayout>
            <ItemGridLayout md={6}>
              <GetStartedForm />
            </ItemGridLayout>
          </ContainerGridLayout>
        </CommonCard>
      </ScaleInView>
    </Box>
  );
};
