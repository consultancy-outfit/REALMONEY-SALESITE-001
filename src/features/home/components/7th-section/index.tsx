import { Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { LastSectionBackgroundImage } from "../../assets";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const LastSectionHome = () => {
  return (
    <SlideUpInView>
      <Stack
        sx={{ color: "#03020C" }}
        alignItems="center"
        px={{ lg: 0, xs: 2 }}
      >
        <Stack sx={{ width: { lg: "70%", xs: "100%" } }}>
          <Card
            sx={{
              minHeight: { md: "520px", xs: "380px" }, // smaller height on mobile
              width: "100%",
              backgroundImage: `url(${LastSectionBackgroundImage.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "none",
              borderRadius: { md: "35px", xs: "12px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: { xs: 2, md: 6 }, // padding inside adjusts
            }}
          >
            <Stack
              spacing={{ xs: 2, md: 3 }}
              alignItems="center"
              textAlign="center"
              maxWidth={{ md: "600px", xs: "100%" }}
            >
              <Typography
                color="#fff"
                fontFamily="Red Hat Display"
                fontWeight={700}
                fontSize={{ md: "3rem", xs: "1.8rem" }}
                lineHeight={1.3}
              >
                Get Started with Digital and Smart Open Banking Today!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  color: "#010101",
                  background:
                    "linear-gradient(to top, #009BCC 0%, #47D3FF 100%)",
                  borderRadius: "2.5rem",
                  px: { xs: 2.5, md: 3 },
                  py: { xs: 0.8, md: 1 },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontFamily: "Red Hat Display",
                  textTransform: "none",
                }}
              >
                Get Started
              </Button>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </SlideUpInView>
  );
};

export default LastSectionHome;
