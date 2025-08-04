import { CareersImage } from "@/assets/images/features/home";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Careers() {
  return (
    <>
      <Stack alignItems="center">
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          py={10}
          px={2}
          m={2}
        >
          <Typography variant="h2" color="white" fontWeight={600}>
            Join Our Team
          </Typography>
          <Typography variant="body1" color="grey" sx={{ mb: 3 }}>
            We’re on a mission to redefine how fintech companies find the
            perfect domain name to launch and scale. At the intersection of
            innovation, finance, and branding — your work will make a real
            impact.
          </Typography>
          <Image
            src={CareersImage}
            alt="Home"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Stack>
      <div style={{ height: "80vh", background: "#fff" }}>
        <iframe
          src="https://recruiting.peoplescreed.ai/job-boards?boardName=realmoney-1754286862577&companyId=6890478395179f36a7527d25"
          width="100%"
          height="100%"
          no-border
          title="Jobs Widget"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </>
  );
}
