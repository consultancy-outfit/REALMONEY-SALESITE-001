"use client";
import ChatBotComponent, { ChatBotProvider } from "react-chatbotify";
import { chatbotSettings } from "./ChatBot.setting";
import { styles } from "./ChatBot.style";
import { chatbotFlowData } from "./ChatBot.data";
import { useQueryParams } from "./hooks/use-query-params";
import "./FullSize/chat-bot.css";
import { useNavigateRoute } from "./hooks/use-navigate-route";
import { useLocationPath } from "./hooks/use-location-path";
import HtmlRenderer from "@rcb-plugins/html-renderer";

const plugins = [HtmlRenderer()];
export const ChatBot = () => {
  const { navigate } = useNavigateRoute();
  const { pathname } = useLocationPath();
  const { queryParam } = useQueryParams();
  const currentConversation = queryParam("currentConversation");
  return (
    <div data-lenis-prevent>
      <style>
        {`
          .rcb-message-bot-avatar {
            width: 25px !important;
            height: 25px !important;
            margin-top: 16px !important;
          }
         .rcb-options-offset {
            margin-left: 15px !important;
          }
          .rcb-bot-message-offset {
            margin-left: 35px !important;
          }
          .rcb-chat-window {
              font-family: "Nunito", sans-serif !important;
          }
        `}
      </style>
      <ChatBotProvider>
        <ChatBotComponent
          id={"my-chatbot-id"}
          flow={chatbotFlowData?.(currentConversation, navigate, pathname)}
          settings={chatbotSettings}
          styles={styles}
          plugins={plugins}
        />
      </ChatBotProvider>
    </div>
  );
};
