"use client";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { Avatar, Box, useTheme } from "@mui/material";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { HeadingText } from "@/components/text/heading-text";

export const RatingCard = (props: any) => {
  const {
    isActive = false,
    activity = "",
    activityStatus = "",
    backgroundColor = isActive ? "primary.main" : "primary.lighter",
  } = props;

  const theme = useTheme();

  const arrowColor = isActive
    ? theme?.palette?.primary?.main
    : theme?.palette?.primary?.lighter;

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor,
        borderRadius: 12,
        padding: { xs: 2, md: 3 },
        transform: isActive ? { md: "rotate(-13deg)" } : "",
        height: "100%",
        "&::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          right: -10,
          transform: "translateY(-50%)",
          width: 0,
          height: 0,
          borderTop: "10px solid transparent",
          borderBottom: "10px solid transparent",
          borderLeft: `10px solid ${arrowColor}`,
        },

        // Line
        "&::before": {
          content: '""',
          position: "absolute",
          top: "50%",
          right: -50,
          width: 100,
          height: 3,
          backgroundColor,
          transform: "translateY(-50%)",
        },
      }}
    >
      <SlideUpInView>
        <Avatar
          sx={{
            width: 60,
            height: 60,
            backgroundColor: "common.white",
            mb: 2,
            mt: 0.5,
          }}
        >
          <StarOutlinedIcon sx={{ color: "common.black" }} />
        </Avatar>
        <Box>
          <HeadingText
            variant="h5"
            color={isActive ? "common.white" : "text.primary"}
          >
            {activity}
          </HeadingText>
          <HeadingText
            variant="h2"
            color={isActive ? "common.white" : "text.secondary"}
          >
            {activityStatus}
          </HeadingText>
        </Box>
      </SlideUpInView>
    </Box>
  );
};
