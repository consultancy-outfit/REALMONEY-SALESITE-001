"use client";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ContactInfoCard, ContactForm } from "./components";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { Box, Container } from "@mui/material";
import { CommonCard } from "@/components/cards/common-card";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

export const ContactUsFeature = () => {
  return (
    <Box>
      <Container maxWidth="xl">
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
                <ContactInfoCard />
              </ItemGridLayout>
              <ItemGridLayout md={6}>
                <ContactForm />
              </ItemGridLayout>
            </ContainerGridLayout>
          </CommonCard>
        </ScaleInView>
      </Container>
    </Box>
  );
};
