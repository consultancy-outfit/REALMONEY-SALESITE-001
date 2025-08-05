import { HeadingText } from "@/components/text/heading-text";
import { Box } from "@mui/material";
import { CustomText } from "@/components/text/custom-text";

const GetStartedInfoCard = () => {
  return (
    <Box>
      <HeadingText
        variant="h1"
        fontWeight="fontWeightMedium"
        color="common.white"
      >
        Begin Your Journey with Real Money
      </HeadingText>
      <CustomText
        variant="body1"
        color="grey.600"
        fontWeight="fontWeightThin"
        customStyles={{ marginTop: 2 }}
      >
        Kickstart your success with powerful tools, expert insights, and
        seamless onboarding to guide every step
      </CustomText>
    </Box>
  );
};

export default GetStartedInfoCard;
