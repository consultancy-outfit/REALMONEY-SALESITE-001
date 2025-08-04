"use client";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { LinkButton } from "@/components/buttons/link-button";
import { APP_ROUTES } from "@/constants/routes";
import { Box, Typography, useTheme } from "@mui/material";

export const UseCaseOpenBanking = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={2}
      p={1}
      height={400}
      my={2}
      mx={6}
      borderRadius={4}
      bgcolor={theme?.palette?.grey?.[100]}
    >
      <SlideUpInView>
        <Typography variant="h4" color="black" fontWeight={600}>
          Empowering Financial Innovation Through Open Banking
        </Typography>
        <Typography variant="body1" color="grey">
          Have a question, need a demo, or want to partner with us? We’d love to
          hear from you.
        </Typography>
      </SlideUpInView>
      <ScaleInView>
        <LinkButton
          link={APP_ROUTES?.CONTACT_US}
          customStyles={{
            borderRadius: "999px",
            border: `1.5px solid ${theme?.palette?.primary?.main}`,
            px: "24px",
            py: "8px",
            bgcolor: theme?.palette?.primary?.main,
            color: theme?.palette?.common?.white,
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
          }}
        >
          Contact Us
        </LinkButton>
      </ScaleInView>
    </Box>
  );
};
