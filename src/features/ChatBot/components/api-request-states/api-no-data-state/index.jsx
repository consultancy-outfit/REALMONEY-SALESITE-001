import { Avatar, Box, Typography } from "@mui/material";
import { CommonUIStatesRestrictedAccessImage } from "../../../assets";
import { API_MESSAGES } from "../../../constants/messages";

const ApiNoDataState = (props) => {
  const {
    hasImage = true,
    image = hasImage ? CommonUIStatesRestrictedAccessImage : "",
    message = API_MESSAGES?.NO_DATA_FOUND,
    children,
    height = "70vh",
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
      {!!image && (
        <Box
          display={"grid"}
          sx={{
            placeItems: "center",
            placeContent: "center",
          }}
        >
          <Avatar
            src={image}
            alt="Not Found"
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
      )}
      <Typography className="chat-bot-font-family" variant="h6" mb={2} mt={1}>
        {message}
      </Typography>
      {children}
    </Box>
  );
};

export default ApiNoDataState;
