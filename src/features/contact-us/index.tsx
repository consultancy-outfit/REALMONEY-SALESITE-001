"use client";

import { ContactForm } from "./components";
import { Box, Container } from "@mui/material";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

export const ContactUsFeature = () => {
  return (
    <Box>
      <Container
        maxWidth="md"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <ScaleInView>
          <ContactForm />
        </ScaleInView>
      </Container>
    </Box>
  );
};
