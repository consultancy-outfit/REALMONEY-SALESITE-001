import { useState } from "react";
import { IconButton, Alert, Snackbar } from "@mui/material";
import { CloseChatIcon } from "../../assets";
import { CHAT_BOT_ROUTES } from "../../constants/routes";
import { getDataFromLocalStorage } from "../../utils/api-error";
import { useNavigateRoute } from "../../hooks/use-navigate-route";
import { useLocationPath } from "../../hooks/use-location-path";
import { useQueryParams } from "../../hooks/use-query-params";

export const ChatBotFullButton = () => {
  const { navigate } = useNavigateRoute();
  const { pathname } = useLocationPath();
  const hasToken = getDataFromLocalStorage()?.authToken;
  const { queryParam } = useQueryParams();
  const currentConversation = queryParam("currentConversation");

  const [alertOpen, setAlertOpen] = useState(false);

  const navigateToFull = () => {
    if (!hasToken) {
      setAlertOpen(true);
      return;
    }

    const queryParams = new URLSearchParams();
    if (currentConversation) {
      queryParams.append("conversationId", currentConversation);
    }

    queryParams.append("redirect", pathname);

    navigate(
      `${CHAT_BOT_ROUTES?.FULL_SIZE_CHAT_BOT}?${queryParams.toString()}`,
    );
  };

  return (
    <>
      <IconButton onClick={navigateToFull}>
        <CloseChatIcon />
      </IconButton>

      <Snackbar
        open={alertOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ mt: 5, ml: 2.5 }}
        autoHideDuration={3000}
        onClose={() => setAlertOpen(false)}
      >
        <Alert severity="warning" onClose={() => setAlertOpen(false)}>
          You need to be signed in to expand this chat.
        </Alert>
      </Snackbar>
    </>
  );
};
