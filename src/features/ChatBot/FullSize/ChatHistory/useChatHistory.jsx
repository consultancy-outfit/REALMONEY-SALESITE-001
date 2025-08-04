import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../../constants/api-end-points";
import { getDataAPI } from "../../lib/api-call";
import { CHAT_BOT_ROUTES } from "../../constants/routes";
import { useNavigateRoute } from "../../hooks/use-navigate-route";
import { useRedirectRoute } from "../../hooks/use-redirect-route";

export const useChatHistory = (props) => {
  const { getHistory, setGetHistory, disabledNewChat, setPage } = props;
  const [chatHistory, setChatHistory] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  const { redirectRoute } = useRedirectRoute();

  const { navigate } = useNavigateRoute();

  const handleChatHistoryClick = (id) => {
    if (disabledNewChat) return;
    setPage(0);
    navigate(
      `${CHAT_BOT_ROUTES?.FULL_SIZE_CHAT_BOT}?conversationId=${id}&redirect=${redirectRoute}`,
    );
  };

  const fetchChatHistory = async () => {
    setIsFetching(true);
    try {
      const response = await getDataAPI({
        url: API_ENDPOINTS?.CHAT_CONVERSATIONS,
      });
      setError(false);
      const history = Object?.entries(response?.data?.data?.data);
      setChatHistory(history);
    } catch (err) {
      setError(err);
      setChatHistory([]);
    } finally {
      setIsFetching(false);
      setGetHistory(false);
    }
  };

  useEffect(() => {
    if (getHistory) {
      fetchChatHistory();
    }
    fetchChatHistory();
  }, [getHistory]);

  return {
    chatHistory,
    isFetching,
    error,
    fetchChatHistory,
    handleChatHistoryClick,
  };
};
