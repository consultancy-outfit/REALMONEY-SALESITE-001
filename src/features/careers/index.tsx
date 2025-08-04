import { Box } from "@mui/material";
import { Hero } from "./components/hero";
import { CAREER_PORTAL_BASE_URL } from "@/configs/env";

export const CareersFeature = () => {
  return (
    <Box
      sx={{
        backgroundColor: "common.light_background",
      }}
    >
      <Hero />
      <Box
        data-lenis-prevent
        sx={{
          maxWidth: "100%",
          height: "80vh",
          margin: "auto",
          marginBottom: "4rem",
        }}
      >
        <iframe
          src={CAREER_PORTAL_BASE_URL}
          width="100%"
          height="100%"
          title="Jobs Widget"
          style={{ border: "none" }}
        ></iframe>
      </Box>
    </Box>
  );
};
