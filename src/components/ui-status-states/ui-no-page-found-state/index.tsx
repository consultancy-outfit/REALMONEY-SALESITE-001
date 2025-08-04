"use client";
import { UI_MESSAGES } from "@/constants/messages";
import { Avatar, Box } from "@mui/material";
import { UiNoPageFoundStatePropsI } from "../ui-status-states.interface";
import { LinkButton } from "@/components/buttons/link-button";
import { CommonUIStatesNotFoundImage } from "@/assets/images/common/ui-states";
import { HeadingText } from "@/components/text/heading-text";

const UiNoPageFoundState = (props: UiNoPageFoundStatePropsI) => {
  const {
    hasImage = true,
    image = hasImage ? CommonUIStatesNotFoundImage : "",
    message = UI_MESSAGES?.NO_PAGE_FOUND,
    children,
    height = "80vh",
    buttonLink = "/",
    hasButton = false,
    buttonText = "Back to home",
  } = props;

  return (
    <Box
      sx={{
        height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "common.white",
      }}
    >
      <HeadingText variant="h1" color="text.primary">
        {message}
      </HeadingText>

      {!!hasImage && (
        <Box
          display={"grid"}
          sx={{
            placeItems: "center",
            placeContent: "center",
            marginY: 4,
          }}
        >
          <Avatar
            src={image?.src}
            alt="Not Found"
            sx={{
              width: "100%",
              height: "100%",
            }}
            variant="rounded"
          />
        </Box>
      )}

      {children}
      {hasButton && (
        <LinkButton variant="contained" link={buttonLink}>
          {buttonText}
        </LinkButton>
      )}
    </Box>
  );
};

export default UiNoPageFoundState;
