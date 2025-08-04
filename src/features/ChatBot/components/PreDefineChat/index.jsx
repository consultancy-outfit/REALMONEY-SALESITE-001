import { useEffect, useState } from "react";
import { preDefineChatQuestions } from "./PreDefineChat.data";
import { ContainerGrid } from "../Grids/ContainerGrid";
import { ItemGrid } from "../Grids/ItemGrid";
import { Typography } from "@mui/material";
import { postDataAPI } from "../../lib/api-call";
import { API_ENDPOINTS } from "../../constants/api-end-points";
import { useNavigateRoute } from "../../hooks/use-navigate-route";
import { useLocationPath } from "../../hooks/use-location-path";
import { useQueryParams } from "../../hooks/use-query-params";
import DOMPurify from "dompurify";

export const PreDefineChat = ({ params }) => {
  const [disabled, setDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { navigate } = useNavigateRoute();
  const { pathname } = useLocationPath();
  const { queryParam } = useQueryParams();
  const currentConversation = queryParam("currentConversation");

  useEffect(() => {
    const handleHide = () => setIsVisible(false);
    window.addEventListener("hidePreDefineChat", handleHide);
    return () => window.removeEventListener("hidePreDefineChat", handleHide);
  }, []);

  if (!isVisible) return null;
  return (
    <ContainerGrid
      rowSpacing={1}
      customStyles={{
        p: 1,
        borderRadius: 4,
        bgcolor: "#F9F9F9",
        mx: 4,
        width: "80%",
        mt: 0.5,
        display: !disabled ? "block" : "none",
      }}
    >
      {preDefineChatQuestions?.map((qus) => (
        <ItemGrid
          key={qus}
          customStyles={{
            borderRadius: 4,
            cursor: "pointer",
            p: 0.5,
            ":hover": { bgcolor: "#EFFFFF" },
          }}
        >
          <Typography
            color="#505050"
            fontSize={14}
            fontWeight={700}
            className="chat-bot-font-family"
            onClick={async () => {
              params.streamMessage(qus);
              setDisabled(true);
              params?.injectMessage(
                "For better visibility and to view your activity history, expand this option to enhance your experience.",
              );
              try {
                const response = await postDataAPI({
                  url: API_ENDPOINTS?.CHAT_MESSAGES,
                  body: {
                    message: qus,
                    ...(!!currentConversation
                      ? { conversationId: currentConversation }
                      : {}),
                  },
                });
                navigate(
                  `${pathname}?currentConversation=${response?.data?.data?.data?.conversationId}`,
                );
                const sanitizedMessage = DOMPurify.sanitize(
                  response?.data?.data?.data?.message,
                );
                params?.injectMessage(sanitizedMessage);
                params?.goToPath("apiLoop");
              } catch (error) {
                params?.showToast("Server is not responding");
              }
            }}
          >
            {qus}
          </Typography>
        </ItemGrid>
      ))}
    </ContainerGrid>
  );
};
