import { useForm } from "react-hook-form";
import { API_ENDPOINTS } from "../../constants/api-end-points";
import { getDataAPI, postDataAPI } from "../../lib/api-call";
import { useEffect, useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { CHAT_BOT_ROUTES } from "../../constants/routes";
import { useNavigateRoute } from "../../hooks/use-navigate-route";
import { useRedirectRoute } from "../../hooks/use-redirect-route";
import { useQueryParams } from "../../hooks/use-query-params";

export const useChatEditor = (props) => {
  const {
    newChat,
    setIsNewChat,
    setGetHistory,
    setDisabledNewChat,
    page,
    setPage,
    isFetching,
    setIsFetching,
  } = props;

  const { queryParam } = useQueryParams();
  const conversationId = queryParam("conversationId");
  const { redirectRoute } = useRedirectRoute();
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const messagesEndRef = useRef(null);
  const { navigate } = useNavigateRoute();

  const [metaData, setMetaData] = useState({});

  const LIMIT = 40;

  const methods = useForm({
    defaultValues: { message: "" },
    resolver: yupResolver(
      object({ message: string()?.trim()?.required("Message is required") }),
    ),
  });

  const { handleSubmit, reset, setValue } = methods;
  const getChatMessages = async () => {
    setIsFetching(true);
    const apiDataParameter = {
      url: `${API_ENDPOINTS?.CHAT_MESSAGES}/${conversationId}`,
      params: {
        limit: LIMIT,
        offset: page * LIMIT,
      },
    };
    try {
      const response = await getDataAPI(apiDataParameter);
      const newMessages =
        response?.data?.data?.data?.messages === undefined
          ? []
          : response?.data?.data?.data?.messages;
      const meta = response?.data?.data?.data?.meta;
      setMetaData(meta);
      setMessages((prevMessages) => {
        if (prevMessages?.length === 0) {
          return newMessages;
        } else {
          return [...newMessages, ...prevMessages];
        }
      });

      setError(false);
    } catch (err) {
      setError(err);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    setMessages([]);
  }, [conversationId]);

  useEffect(() => {
    if (conversationId === null && newChat) {
      setMessages([]);
      setError(false);
      setIsSubmitting(false);
      setIsFetching(false);
      setSubmitError(false);
      setIsNewChat(false);
      return;
    }
    if (conversationId !== null) {
      getChatMessages();
    }
  }, [conversationId, page]);

  const handleFormSubmit = async (submitMessage) => {
    setIsSubmitting(true);
    setSubmitError(false);
    setDisabledNewChat(true);
    const sendMessage = {
      _id: `send${messages?.length + 1}`,
      message: submitMessage?.message,
      isResponse: false,
    };
    setMessages([...messages, sendMessage]);
    reset();
    const apiDataParameter = {
      url: API_ENDPOINTS?.CHAT_MESSAGES,
      body: { message: sendMessage?.message, conversationId },
    };
    try {
      const response = await postDataAPI(apiDataParameter);
      const message = response?.data?.data?.data;
      setMessages([
        ...messages,
        sendMessage,
        {
          _id: message?._id,
          message: message?.message,
          isResponse: true,
        },
      ]);
      if (conversationId === null) {
        navigate(
          `${CHAT_BOT_ROUTES?.FULL_SIZE_CHAT_BOT}?conversationId=${message?.conversationId}&redirect=${redirectRoute}`,
        );
        setGetHistory(true);
      }
    } catch (err) {
      setSubmitError(err);
      setMessages((prevMessages) =>
        prevMessages?.slice(0, prevMessages?.length - 1),
      );
    }
    setIsSubmitting(false);
    setDisabledNewChat(false);
  };

  useEffect(() => {
    if (messagesEndRef?.current) {
      messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return {
    methods,
    handleSubmit,
    handleFormSubmit,
    messages,
    setMessages,
    isFetching,
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
  };
};
