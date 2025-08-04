import { Box, Typography } from "@mui/material";
import { projectListData } from "./Projects.data";
import { CHAT_BOT_ROUTES } from "../../constants/routes";
import { useNavigateRoute } from "../../hooks/use-navigate-route";
import { useRedirectRoute } from "../../hooks/use-redirect-route";

export const Projects = (props) => {
  const { setIsNewChat, disabledNewChat } = props;
  const { navigate } = useNavigateRoute();

  const { redirectRoute } = useRedirectRoute();
  const startNewChat = () => {
    if (disabledNewChat) return;
    navigate(
      `${CHAT_BOT_ROUTES?.FULL_SIZE_CHAT_BOT}?redirect=${redirectRoute}`,
    );
    setIsNewChat(true);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          className="chat-bot-font-family"
          sx={{ color: "#1A1621", fontWeight: 800, py: 0.5 }}
        >
          📋 Projects
        </Typography>
      </Box>
      {projectListData?.map((item) => (
        <Box
          sx={{ my: 1, cursor: disabledNewChat ? "not-allowed" : "pointer" }}
          key={item?._id}
          onClick={startNewChat}
        >
          <Typography
            className="chat-bot-font-family"
            sx={{
              color: "#505050",
              fontWeight: 700,
              fontSize: "0.875rem",
              py: 0.5,
            }}
          >
            {item?.name}
          </Typography>
        </Box>
      ))}
    </div>
  );
};
