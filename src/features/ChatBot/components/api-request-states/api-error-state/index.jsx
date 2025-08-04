import { Avatar, Box, Button, Typography } from "@mui/material";
import { API_MESSAGES } from "../../../constants/messages";
import { CommonUIStatesRestrictedAccessImage } from "../../../assets";

const ApiErrorState = (props) => {
  const {
    height = "50vh",
    textColor = "#505050",
    message = API_MESSAGES?.SOMETHING_WENT_WRONG,
    children,
    refresh,
    canRefresh = false,
    refreshButtonProps,
    image = CommonUIStatesRestrictedAccessImage,
  } = props;

  return (
    <Box
      height={height}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Box
        display={"grid"}
        sx={{
          placeItems: "center",
          placeContent: "center",
        }}
      >
        <Avatar
          src={image}
          alt="Error"
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Typography
        className="chat-bot-font-family"
        variant="h6"
        color={textColor}
      >
        {message}
      </Typography>
      <br />
      {children}
      {canRefresh && (
        <Button
          className="small"
          variant="contained"
          onClick={refresh}
          {...refreshButtonProps}
        >
          Refresh
        </Button>
      )}
    </Box>
  );
};

export default ApiErrorState;
