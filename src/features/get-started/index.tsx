"use client";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { GetStartedInfoCard, GetStartedForm } from "./components";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { Box } from "@mui/material";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

export const GetStarted = () => {
  return (
    <Box sx={{ minHeight: "90dvh" }}>
      <ScaleInView>
          <ContainerGridLayout customStyles={{ justifyContent: "center" }}>
            <ItemGridLayout md={4}>
              <GetStartedForm />
            </ItemGridLayout>
            <ItemGridLayout md={3}>
              <GetStartedInfoCard />
            </ItemGridLayout>
          </ContainerGridLayout>
      </ScaleInView>
    </Box>
  );
};
