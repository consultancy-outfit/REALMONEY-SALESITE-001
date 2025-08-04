/* eslint-disable react/prop-types */

import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { LinkButton } from "@/components/buttons/link-button";
import { APP_ROUTES } from "@/constants/routes";
import { Box, Typography, useTheme } from "@mui/material";

interface ContactSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  containerStyles?: React.CSSProperties;
  titleStyles?: React.CSSProperties;
  descriptionStyles?: React.CSSProperties;
  buttonStyles?: React.CSSProperties;
  bgcolor?: string;
  height?: number | string;
  borderRadius?: number | string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Empowering Financial Innovation Through Open Banking",
  description = "Have a question, need a demo, or want to partner with us? We’d love to hear from you.",
  buttonText = "Contact Us",
  buttonLink = APP_ROUTES?.CONTACT_US,
  containerStyles,
  titleStyles,
  descriptionStyles,
  buttonStyles,
  bgcolor = "#F9FAFB",
  height = 400,
  borderRadius = "32px",
}) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
      p={{ xs: 2, sm: 4, md: 8 }}
      height={{ xs: "auto", sm: height }}
      minHeight={{ xs: 250, sm: "auto" }}
      borderRadius={borderRadius}
      bgcolor={bgcolor}
      sx={{ ...containerStyles }}
    >
      <SlideUpInView>
        <Typography
          variant="h4"
          color="#100F11"
          fontWeight={600}
          textAlign="center"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
            ...titleStyles,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="#575757"
          sx={{
            textAlign: "center",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            ...descriptionStyles,
            marginTop: "1rem",
          }}
        >
          {description}
        </Typography>
      </SlideUpInView>
      <ScaleInView>
        <LinkButton
          link={buttonLink}
          customStyles={{
            borderRadius: "999px",
            border: `1.5px solid ${theme?.palette?.primary?.main}`,
            px: { xs: "16px", sm: "24px" },
            py: { xs: "6px", sm: "8px" },
            bgcolor: theme?.palette?.primary?.main,
            color: theme?.palette?.common?.white,
            height: { xs: "40px", sm: "50px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
            ...buttonStyles,
          }}
        >
          {buttonText}
        </LinkButton>
      </ScaleInView>
    </Box>
  );
};

export default ContactSection;
