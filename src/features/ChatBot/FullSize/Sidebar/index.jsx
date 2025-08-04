import { Avatar, Box } from "@mui/material";
import { LogoTextNameImage, NewChatIcon, SearchIcon } from "../../assets";
import { ChatHistory } from "../ChatHistory";
import { Projects } from "../Projects";
import { useState } from "react";
import { ChatSearch } from "../ChatSearch";
import { CHAT_BOT_ROUTES } from "../../constants/routes";
import { useNavigateRoute } from "../../hooks/use-navigate-route";
import { useRedirectRoute } from "../../hooks/use-redirect-route";

export const Sidebar = (props) => {
  const {
    newChat,
    setIsNewChat,
    getHistory,
    setGetHistory,
    disabledNewChat,
    setDisabledNewChat,
    page,
    setPage,
    isFetching,
  } = props;

  const { redirectRoute } = useRedirectRoute();

  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const openChatSearch = () => {
    if (disabledNewChat) return;
    if (isFetching) return;
    setIsPortalOpen(true);
    setIsNewChat(false);
  };

  const { navigate } = useNavigateRoute();
  const openNewChat = () => {
    if (disabledNewChat) return;
    if (isFetching) return;
    navigate(
      `${CHAT_BOT_ROUTES?.FULL_SIZE_CHAT_BOT}?redirect=${redirectRoute}`,
    );
    setIsNewChat(true);
  };

  return (
    <>
      <Box
        data-lenis-prevent
        sx={{
          backgroundColor: "#F9F9F9",
          minHeight: "93vh",
          borderRadius: 4,
          padding: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            paddingY: 1.5,
          }}
        >
          <Box>
            <Avatar
              src={LogoTextNameImage.src}
              alt="logo-text-name"
              sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "transparent",
              }}
              variant="rounded"
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box
              sx={{ cursor: disabledNewChat ? "not-allowed" : "pointer" }}
              onClick={openChatSearch}
            >
              <SearchIcon />
            </Box>
            <Box
              sx={{ cursor: disabledNewChat ? "not-allowed" : "pointer" }}
              onClick={openNewChat}
            >
              <NewChatIcon />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            maxHeight: "85vh",
            overflow: "auto",
            scrollbarColor: "transparent transparent",
          }}
        >
          <Projects
            newChat={newChat}
            setIsNewChat={setIsNewChat}
            disabledNewChat={disabledNewChat}
            setDisabledNewChat={setDisabledNewChat}
          />
          <ChatHistory
            getHistory={getHistory}
            setGetHistory={setGetHistory}
            disabledNewChat={disabledNewChat}
            setDisabledNewChat={setDisabledNewChat}
            page={page}
            setPage={setPage}
          />
        </Box>
      </Box>
      {openChatSearch && (
        <ChatSearch
          isPortalOpen={isPortalOpen}
          setIsPortalOpen={setIsPortalOpen}
          newChat={newChat}
          setIsNewChat={setIsNewChat}
        />
      )}
    </>
  );
};
