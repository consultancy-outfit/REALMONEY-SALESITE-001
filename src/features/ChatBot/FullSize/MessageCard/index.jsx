import { Avatar, Box, Typography } from "@mui/material";
import { BotBubbleIcon } from "../../assets";
import DOMPurify from "dompurify";

export const MessageCard = (props) => {
  const { message, isChatBot } = props;
  const sanitizedMessage = DOMPurify.sanitize(message);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: !isChatBot ? "row" : "row-reverse",
        padding: 1,
      }}
    >
      <Box
        sx={{
          borderRadius: 4,
          border: isChatBot ? "none" : "1px solid #EAEAEA",
          backgroundColor: isChatBot ? "#F9F9F9" : "white",
          padding: 1,
          maxWidth: "70%",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: "#505050",
            fontSize: "0.8rem",
            wordBreak: "break-all",
          }}
          className="chat-bot-font-family"
          dangerouslySetInnerHTML={{ __html: sanitizedMessage }}
        ></Typography>
      </Box>
      {isChatBot && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            padding: 1,
          }}
        >
          <Avatar
            src={BotBubbleIcon.src}
            alt={"BotBubbleIcon"}
            sx={{
              width: 24,
              height: 24,
              objectFit: "cover",
              backgroundColor: "transparent",
            }}
          />
        </Box>
      )}
    </Box>
  );
};
