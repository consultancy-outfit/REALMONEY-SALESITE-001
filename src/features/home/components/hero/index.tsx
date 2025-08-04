import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { HomeHeroSectionImage, PatternImage } from "../../assets";

const Hero = () => {
  return (
    <Box
      px={{ lg: 20, sm: 5, xs: 2 }}
      sx={{
        width: "100%",
        mt: { md: 6, xs: 2 },
      }}
    >
      <SlideUpInView>
        <Card
          sx={{
            backgroundColor: "#F3F2FF",
            px: { lg: 4, md: 2, xs: 1 },
            m: "auto",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundImage: `url(${PatternImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Stack alignItems="center">
            <Typography
              textAlign="center"
              fontSize={{ md: "4.25rem", xs: "2.5rem" }}
              fontWeight={500}
              fontFamily="Inter"
              width={{ md: "50%", xs: "100%" }}
              m="auto"
            >
              Smarter, Faster, and Safer
            </Typography>
            <Typography
              textAlign="center"
              fontSize={{ md: "4.25rem", xs: "2.5rem" }}
              fontWeight={500}
              fontFamily="Inter"
              width={{ md: "50%", xs: "100%" }}
              m="auto"
            >
              Financial Connectivity{" "}
            </Typography>
            <Typography
              textAlign="center"
              fontSize={{ md: "1.125rem", xs: "0.8rem" }}
              fontWeight={500}
              fontFamily="Inter"
              width={{ md: "50%", xs: "100%" }}
              m="auto"
              color="#666D80"
            >
              Empowering businesses through secure and intelligent Open Banking
              APIs.{" "}
            </Typography>
            <Box sx={{ mt: 5, width: { xs: "100%", sm: "80%" } }}>
              <Image
                src={HomeHeroSectionImage}
                alt="Home Hero Section Image"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Stack>
        </Card>
      </SlideUpInView>
    </Box>
  );
};

export default Hero;
