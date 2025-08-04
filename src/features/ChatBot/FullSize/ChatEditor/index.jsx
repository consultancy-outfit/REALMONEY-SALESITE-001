import RHFTextField from "../../components/ReactHookForm/RHFTextField";
import {
  Box,
  Chip,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { useChatEditor } from "./useChatEditor";
import { FormProvider } from "../../components/ReactHookForm";
import { TabView } from "../Projects/TabView";
import { LogoAvatar } from "../../components/LogoAvatar";
import { MessageCard } from "../MessageCard";
import { ApiRequestFlow } from "../../components/api-request-states/api-request-flow";
import MessageLoaderBubbles from "../MessageLoaderBubbles";
import { PROJECT_NAME } from "@/configs/env";

export const ChatEditor = (props) => {
  const { isFetching } = props;
  const {
    methods,
    handleSubmit,
    handleFormSubmit,
    messages,
    error,
    getChatMessages,
    isSubmitting,
    submitError,
    messagesEndRef,
    setValue,
    conversationId,
    metaData,
    page,
    setPage,
  } = useChatEditor(props);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "80vh",
          ...(messages?.length ? {} : { justifyContent: "center" }),
        }}
      >
        <Box
          sx={{
            ...(messages?.length ? { flex: 1 } : { flex: 0.4 }),
            ...(messages?.length ? { overflowY: "auto" } : {}),
            paddingBottom: 2,
          }}
        >
          <ApiRequestFlow
            showSkeleton={!!conversationId ? isFetching : false}
            hasError={!!conversationId ? error?.isError : false}
            refreshApi={() => getChatMessages()}
          >
            {messages?.length ? (
              <>
                {!!!metaData?.pages ? null : metaData?.pages ===
                  page + 1 ? null : (
                  <Box sx={{ textAlign: "center", my: 2 }}>
                    <Chip
                      sx={{ textAlign: "center", my: 2, cursor: "pointer" }}
                      onClick={() => {
                        if (metaData?.pages === page + 1) {
                          return;
                        }
                        setPage((page) => page + 1);
                      }}
                      label={"load more"}
                    />
                  </Box>
                )}
                {messages?.map((message, index) => (
                  <MessageCard
                    key={`${message?._id}-${index}`}
                    message={message?.message}
                    isChatBot={message?.isResponse}
                    lastMessage={messages?.length - 1 === index}
                  />
                ))}
                {isSubmitting && <MessageLoaderBubbles />}
                {submitError?.isError && (
                  <Box sx={{ textAlign: "center", my: 2 }}>
                    <Typography
                      variant="caption"
                      color="error"
                      className="chat-bot-font-family"
                    >
                      Server is not responding
                    </Typography>
                  </Box>
                )}

                <div ref={messagesEndRef} />
              </>
            ) : (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 2,
                  }}
                >
                  <LogoAvatar productName={PROJECT_NAME} />
                </Box>
                <TabView setValue={setValue} />
              </>
            )}
          </ApiRequestFlow>
        </Box>
        <Box sx={{ paddingY: 2, marginTop: 2 }}>
          <FormProvider
            methods={methods}
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <RHFTextField
              name="message"
              fullWidth
              multiline
              rows={3}
              placeholder="Ask anything"
              disabled={isSubmitting}
              className="chat-bot-font-family"
              sx={{
                fontFamily: "inherit !important",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  border: "2px solid #EAEAEA",
                  bgcolor: "#fff",
                  minHeight: 55,
                  fontFamily: "inherit !important",
                },
                "& .MuiInputBase-input": {
                  fontSize: 14,
                  fontFamily: "inherit !important",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "2px solid #EAEAEA",
                },
              }}
              onKeyDown={(e) => {
                if (e?.key === "Enter" && !e?.shiftKey) {
                  e?.preventDefault();
                  handleSubmit(handleFormSubmit)();
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      alignItems: "self-start",
                    }}
                  >
                    <IconButton
                      type="submit"
                      size="small"
                      disabled={isSubmitting}
                    >
                      <Send sx={{ cursor: "pointer" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormProvider>
        </Box>
      </Box>
    </>
  );
};
