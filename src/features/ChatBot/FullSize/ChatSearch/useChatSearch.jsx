import { useEffect, useState } from "react";
import { getDataAPI } from "../../lib/api-call";
import { API_ENDPOINTS } from "../../constants/api-end-points";
import { CHAT_BOT_ROUTES } from "../../constants/routes";
import { useNavigateRoute } from "../../hooks/use-navigate-route";
import { useRedirectRoute } from "../../hooks/use-redirect-route";

export const useChatSearch = (props) => {
  const { setIsPortalOpen, setIsNewChat } = props;
  const { redirectRoute } = useRedirectRoute();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const closePortal = () => {
    setIsPortalOpen(false);
    setSearchValue("");
  };

  const handleFormSubmit = async () => {
    setIsFetching(true);
    try {
      const response = await getDataAPI({
        url: API_ENDPOINTS?.CHAT_CONVERSATIONS,
        params: {
          search: !!!searchValue ? "." : searchValue,
        },
      });
      setSearchResult(response?.data?.data?.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    handleFormSubmit();
  }, [searchValue]);

  const { navigate } = useNavigateRoute();

  const handleChatHistoryClick = (id) => {
    navigate(
      `${CHAT_BOT_ROUTES?.FULL_SIZE_CHAT_BOT}?conversationId=${id}&redirect=${redirectRoute}`,
    );
    closePortal();
  };

  const startNewChat = () => {
    navigate(
      `${CHAT_BOT_ROUTES?.FULL_SIZE_CHAT_BOT}?redirect=${redirectRoute}`,
    );
    setIsNewChat(true);
    closePortal();
  };

  return {
    handleFormSubmit,
    closePortal,
    isFetching,
    error,
    searchResult,
    handleChatHistoryClick,
    searchValue,
    setSearchValue,
    startNewChat,
  };
};
