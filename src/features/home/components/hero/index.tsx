import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HomeHeroSectionImage } from "../../assets";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

const Hero = () => {
    const router = useRouter();
  return (
    <SlideUpInView>
      <Stack alignItems="center" spacing={2}>
        <Typography
          textAlign="center"
          fontSize={{ md: "3.75rem", xs: "2rem" }}
          fontWeight={"bold"}
          fontFamily="Red Hat Display"
          width={{ md: "50%", xs: "100%" }}
          m="auto"
          sx={{
            background: "linear-gradient(to bottom, #FFFFFF 0%, #999999 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Smarter Finance Starts Here
        </Typography>
        <Typography
          textAlign="center"
          fontSize={{ md: "1.125rem", xs: "0.8rem" }}
          fontFamily="Red Hat Display"
          width={{ md: "50%", xs: "100%" }}
          m="auto"
          color="#C0C0C0"
        >
          Power your business with real-time bank data, secure payments, and
          intelligent financial services. Our Open Banking solutions help you
          move faster, stay compliant, and serve your customers better.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              color: "#010101",
              background: "linear-gradient(to top, #009BCC 0%, #47D3FF 100%)",
              stroke: "#00C2FF",
              borderRadius: "2.5rem",
              px: 3,
              py: 1,
              fontSize: "1rem",
              fontFamily: "Red Hat Display",
            }}
            onClick={() => router.push("/view-all")}
          >
            Explore Our Products
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#FFFFFF",
              borderColor: "#464646",
              borderRadius: "2.5rem",
              px: 3,
              py: 1,
              fontSize: "1rem",
              fontFamily: "Red Hat Display",
            }}
            onClick={() => router.push("/contact-us")}
          >
            Contact Us
          </Button>
        </Stack>
        <Stack sx={{ width: { xs: "100%" } }}>
          <Image
            src={HomeHeroSectionImage}
            alt="Home Hero Section Image"
            style={{ width: "100%", height: "auto" }}
          />
        </Stack>
      </Stack>
    </SlideUpInView>
  );
};

export default Hero;
