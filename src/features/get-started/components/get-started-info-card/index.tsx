import { HeadingText } from "@/components/text/heading-text";
import { Box } from "@mui/material";
import { SubHeadingText } from "@/components/text/sub-heading-text";

const GetStartedInfoCard = () => {
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
            Begin Your Journey with FA Global
          </HeadingText>
          <SubHeadingText
            variant="subtitle1"
            marginTop={3}
            color="grey.600"
            fontWeight="fontWeightThin"
          >
            Kickstart your success with powerful tools, expert insights, and
            seamless onboarding to guide every step
          </SubHeadingText>
        </Box>
      </Box>
    </>
  );
};

export default GetStartedInfoCard;
