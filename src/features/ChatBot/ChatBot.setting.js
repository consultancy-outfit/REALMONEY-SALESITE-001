import {
  BotBubbleIcon,
  ChatHeaderIcon,
  ChatbotChatsIcons,
  MicrophoneIcon,
  SendIcon,
} from "./assets";
import { Button } from "react-chatbotify";
import { ChatBotFullButton } from "./components/ChatBotFullButton";

export const chatbotSettings = {
  general: {
    embedded: false,
  },
  chatHistory: { disabled: true },
  header: {
    title: "AI Bot",
    avatar: ChatHeaderIcon.src,
    /* eslint-disable react/jsx-key */
    buttons: [<ChatBotFullButton />, Button.CLOSE_CHAT_BUTTON],
  },
  notification: { disabled: true },
  chatButton: { icon: ChatbotChatsIcons.src },
  tooltip: { mode: "NEVER" },
  botBubble: {
    showAvatar: true,
    avatar: BotBubbleIcon.src,
    simStream: true,
    animate: true,
    streamSpeed: 50,
  },
  chatInput: {
    disabledPlaceholderText: "",
    enabledPlaceholderText: "",
    sendButtonIcon: SendIcon.src,
  },
  voice: {
    icon: MicrophoneIcon.src,
    defaultToggledOn: true,
  },
};
