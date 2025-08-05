"use client";
import { Box, Avatar } from "@mui/material";
import { AboutUsRealMoneyImage } from "../../assets";
import { pxToRem } from "@/utils/styles";
import { HeadingText } from "@/components/text/heading-text";

const Hero = () => {
  return (
    <Box
      sx={{
        px: { xs: "10px", md: "50px" },
        mx: { xs: "20px", md: "50px", lg: "100px" },
        textAlign: "center",
      }}
    >
      <HeadingText
        variant="h2"
        customStyles={{
          maxWidth: 900,
          mx: "auto",
          mb: { xs: 4, md: 6 },
          px: { xs: 2, sm: 4 },
          background: "linear-gradient(180deg, #FFFFFF 0%, #999999 93.75%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "1%",
          lineHeight: pxToRem(72),
        }}
      >
        Real-Time Finance, Built for the Modern World
      </HeadingText>
      <Box>
        <Avatar
          src={AboutUsRealMoneyImage?.src}
          alt="Finance Illustration"
          variant="rounded"
          sx={{
            width: { xs: "100%" },
            height: { xs: "auto" },
            maxWidth: "100%",
            objectFit: "cover",
            backgroundColor: "transparent",
            margin: "auto",
            verticalAlign: "middle",
            display: "block",
            fontStyle: "italic",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
