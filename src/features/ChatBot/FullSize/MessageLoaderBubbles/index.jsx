import { Avatar, Box } from "@mui/material";
import { BotBubbleIcon, ChatBubblesLoaderIcons } from "../../assets";

const MessageLoaderBubbles = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "row-reverse",
        padding: 1,
      }}
    >
      <Box
        sx={{
          borderRadius: 4,
          border: "none",
          backgroundColor: "#F9F9F9",
          maxWidth: "70%",
        }}
      >
        <Avatar
          src={ChatBubblesLoaderIcons.src}
          alt={" "}
          sx={{ width: 40, height: 40, objectFit: "cover" }}
          variant="rounded"
        />
      </Box>
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
          sx={{ width: 24, height: 24, objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default MessageLoaderBubbles;
