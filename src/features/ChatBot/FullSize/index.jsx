"use client";
import { Box } from "@mui/material";
import { ContainerGrid } from "../components/Grids/ContainerGrid";
import { ItemGrid } from "../components/Grids/ItemGrid";
import { Chat } from "./Chat";
import { Sidebar } from "./Sidebar";
import "./chat-bot.css";
import { useState } from "react";

export const FullSize = () => {
  const [newChat, setIsNewChat] = useState(false);
  const [getHistory, setGetHistory] = useState(false);
  const [disabledNewChat, setDisabledNewChat] = useState(false);
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  return (
    <Box
      sx={{
        maxHeight: "96vh",
        overflow: "auto",
        scrollbarColor: "transparent transparent",
        padding: 2,
      }}
      className="chat-bot-font-family"
    >
      <ContainerGrid spacing={3}>
        <ItemGrid md={3} xl={2}>
          <Sidebar
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
        <ItemGrid md={9} xl={10}>
          <Chat
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
      </ContainerGrid>
    </Box>
  );
};
