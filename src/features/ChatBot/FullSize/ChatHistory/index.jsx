import { Box, Typography } from "@mui/material";
import { useChatHistory } from "./useChatHistory";
import { ApiRequestFlow } from "../../components/api-request-states/api-request-flow";
import { camelCaseToTitleCase } from "../../utils/api-error";

export const ChatHistory = (props) => {
  const {
    chatHistory,
    isFetching,
    error,
    handleChatHistoryClick,
    fetchChatHistory,
  } = useChatHistory(props);

  return (
    <ApiRequestFlow
      showSkeleton={isFetching}
      hasError={error?.isError}
      hasNoData={!chatHistory?.length}
      refreshApi={() => fetchChatHistory()}
      errorHeight="100%"
    >
      {chatHistory?.map(
        ([key, value]) =>
          !!value?.length && (
            <Box sx={{ my: 1 }} key={key}>
              <Typography
                sx={{ color: "#1A1621", fontWeight: 800, py: 0.5 }}
                className="chat-bot-font-family"
              >
                📖 {camelCaseToTitleCase(key)}
              </Typography>
              {value?.map((item) => (
                <Box
                  sx={{ my: 1, cursor: "pointer" }}
                  key={item?._id}
                  onClick={() => handleChatHistoryClick(item?._id)}
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
                    {item?.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          ),
      )}
    </ApiRequestFlow>
  );
};
