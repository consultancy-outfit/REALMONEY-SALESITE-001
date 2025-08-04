"use client";
import { Avatar, Box, Typography } from "@mui/material";
import { MinimizeIcon } from "../../assets";
import { ChatEditor } from "../ChatEditor";
import { ContainerGrid } from "../../components/Grids/ContainerGrid";
import { ItemGrid } from "../../components/Grids/ItemGrid";
import {
  fullName,
  fullNameInitial,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "../../utils/api-error";
import { useNavigateRoute } from "../../hooks/use-navigate-route";
import { useRedirectRoute } from "../../hooks/use-redirect-route";
import { SingleDropdownButton } from "../../components/single-dropdown-button";
import { LOCAL_STORAGE_KEYS } from "../../constants/ui";

export const Chat = (props) => {
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
    setIsFetching,
  } = props;

  const { redirectRoute } = useRedirectRoute();

  const { firstName, lastName } = getDataFromLocalStorage()?.user ?? {};

  const { navigate } = useNavigateRoute();

  const redirectToPreviousPath = () => {
    const path = redirectRoute === null ? "/" : redirectRoute;
    navigate(path);
  };

  const avatarActionDropdownDynamic = [
    {
      id: 1,
      title: "Logout",
    },
  ];

  const handleLogout = () => {
    removeDataFromLocalStorage(LOCAL_STORAGE_KEYS?.AUTH_DATA);
    removeDataFromLocalStorage(LOCAL_STORAGE_KEYS?.ACTIVITY_SESSION);
    window?.location?.reload();
  };

  const handleDropdownItemsClick = (closeMenu, itemName) => {
    if (itemName === "Logout") {
      handleLogout();
      closeMenu();
      redirectToPreviousPath();
      return;
    }
  };

  return (
    <>
      <Box
        data-lenis-prevent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "95vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "flex-end",
            padding: 2,
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={redirectToPreviousPath}
          >
            <MinimizeIcon />
          </Box>
          <SingleDropdownButton
            dropdownOptions={avatarActionDropdownDynamic}
            handleSingleClick={handleDropdownItemsClick}
            dropdownName={
              <Avatar
                src={""}
                sx={{ backgroundColor: "#FF4E4E" }}
                alt={fullName(firstName, lastName)}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                  }}
                >
                  {fullNameInitial(firstName, lastName)}
                </Typography>
              </Avatar>
            }
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 2,
            flexDirection: "column",
            flex: 1,
            overflow: "auto",
            scrollbarColor: "transparent transparent",
          }}
        >
          <ContainerGrid>
            <ItemGrid md={2}></ItemGrid>
            <ItemGrid md={8}>
              <ChatEditor
                newChat={newChat}
                setIsNewChat={setIsNewChat}
                getHistory={getHistory}
                setGetHistory={setGetHistory}
                disabledNewChat={disabledNewChat}
                setDisabledNewChat={setDisabledNewChat}
                page={page}
                setPage={setPage}
                isFetching={isFetching}
                setIsFetching={setIsFetching}
              />
            </ItemGrid>
            <ItemGrid md={2}></ItemGrid>
          </ContainerGrid>
        </Box>

        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#505050",
              textAlign: "center",
              fontWeight: 500,
            }}
            className="chat-bot-font-family"
          >
            Agentic007 can make mistakes. Check important info.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
