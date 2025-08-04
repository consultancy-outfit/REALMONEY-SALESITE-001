import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Close, Search } from "@mui/icons-material";
import { useChatSearch } from "./useChatSearch";
import { ChatSearchChatsIcons, NewChatIcon } from "../../assets";
import { ApiRequestFlow } from "../../components/api-request-states/api-request-flow";

export const ChatSearch = (props) => {
  const { isPortalOpen } = props;

  const {
    handleFormSubmit,
    closePortal,
    isFetching,
    error,
    searchResult,
    handleChatHistoryClick,
    searchValue,
    setSearchValue,
    startNewChat,
  } = useChatSearch(props);

  return (
    <Dialog open={isPortalOpen} onClose={closePortal} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
          }}
        >
          <Typography
            className="chat-bot-font-family"
            sx={{ color: "#A0A0A0", fontWeight: 600, fontSize: "1rem" }}
          >
            Search Chats...
          </Typography>{" "}
          <Close
            onClick={closePortal}
            sx={{ cursor: "pointer", fontSize: "1rem" }}
          />{" "}
        </Box>
        <Box className="chat-bot-font-family">
          <TextField
            name="search"
            fullWidth
            placeholder="Type here to search"
            onChange={(e) => setSearchValue(e?.target?.value)}
            value={searchValue}
            variant="standard"
            className="chat-bot-font-family"
            sx={{
              fontFamily: "inherit !important",
              "& .MuiInputBase-root": {
                fontFamily: "inherit !important",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                border: "none",
                bgcolor: "#fff",
                minHeight: 55,
                fontFamily: "inherit !important",
              },
              "& .MuiInputBase-input": {
                fontSize: 14,
                fontFamily: "inherit !important",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Search sx={{ cursor: "pointer" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          onClick={startNewChat}
          sx={{
            mt: 3,
            cursor: "pointer",
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NewChatIcon />
          </Box>
          <Typography
            className="chat-bot-font-family"
            sx={{ color: "#505050", fontWeight: 700, fontSize: "0.8rem" }}
          >
            New Chat
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ApiRequestFlow
          showSkeleton={isFetching}
          hasError={error?.isError}
          refreshApi={handleFormSubmit}
        >
          {!!searchResult?.length ? (
            <>
              {searchResult?.map((item) => (
                <Box
                  sx={{
                    my: 1,
                    cursor: "pointer",
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                  }}
                  key={item?._id}
                  onClick={() => handleChatHistoryClick(item?._id)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ChatSearchChatsIcons />
                  </Box>
                  <Typography
                    className="chat-bot-font-family"
                    sx={{
                      color: "#505050",
                      fontWeight: 700,
                      fontSize: "1rem",
                      py: 1,
                    }}
                  >
                    {item?.title}
                  </Typography>
                </Box>
              ))}
            </>
          ) : (
            <Typography className="chat-bot-font-family">
              No conversation in the list
            </Typography>
          )}
        </ApiRequestFlow>
      </DialogContent>
    </Dialog>
  );
};
