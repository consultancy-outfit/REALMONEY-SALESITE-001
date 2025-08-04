import { HeadingText } from "@/components/text/heading-text";
import { Box } from "@mui/material";
import { SubHeadingText } from "@/components/text/sub-heading-text";

const ContactInfoCard = () => {
  return (
    <>
      <Box
        sx={{
          p: "6rem 1rem 1rem 1rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          m: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box>
          <HeadingText
            variant="h1"
            fontWeight="fontWeightMedium"
            color="common.white"
          >
            Let’s Get Connected – We&apos;re Here to Help!
          </HeadingText>
          <SubHeadingText
            variant="subtitle1"
            marginTop={3}
            color="grey.600"
            fontWeight="fontWeightThin"
          >
            Have questions or need assistance? Our team is ready to support you
            with expert guidance reach out today!
          </SubHeadingText>
        </Box>
      </Box>
    </>
  );
};

export default ContactInfoCard;
