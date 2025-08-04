import { EmailOtp, RegisterForm, EmailForm } from "./components/AuthForms";
import { PreDefineChat } from "./components/PreDefineChat";
import { API_ENDPOINTS } from "./constants/api-end-points";
import { postDataAPI } from "./lib/api-call";
import { getDataFromLocalStorage } from "./utils/api-error";
import DOMPurify from "dompurify";

export const chatbotFlowData = (currentConversation, navigate, pathname) => ({
  start: {
    message: !!getDataFromLocalStorage()?.authToken ? "" : "Welcome",
    chatDisabled: true,
    path: !!getDataFromLocalStorage()?.authToken ? "aiWelcome" : "welcome",
    transition: {
      duration: 0.5,
    },
  },
  welcome: {
    message: "Select the option to proceed",
    options: {
      items: ["Delegate", "Employee", "Customer", "Stakeholder"],
      sendOutput: true,
    },
    function: (params) => {
      const userRequirements = {
        role: params?.userInput,
        email: "",
      };
      sessionStorage.setItem(
        "userRequirements",
        JSON.stringify(userRequirements),
      );
    },
    chatDisabled: true,
    path: "registerConfirmation",
  },
  registerConfirmation: {
    message: (params) =>
      `Are you a registered ${params?.userInput?.toLowerCase()}?`,
    options: {
      items: ["Yes", "No"],
      sendOutput: true,
    },
    chatDisabled: true,
    path: (params) => (params?.userInput === "Yes" ? "signin" : "registerForm"),
  },
  signin: {
    message: "Please provide your email.",
    component: (params) => <EmailForm params={params} />,
    chatDisabled: true,
  },
  registerForm: {
    message: `Please provide the required details.`,
    component: (params) => <RegisterForm params={params} />,
    chatDisabled: true,
    path: "emailOtp",
  },
  emailOtp: {
    component: (params) => <EmailOtp params={params} />,
    chatDisabled: true,
    path: "aiWelcome",
  },
  aiWelcome: {
    message:
      "Welcome! We're excited to have you here. Enjoy exploring our platform.",
    function: async (params) => {
      window.dispatchEvent(new Event("hidePreDefineChat"));
      try {
        const response = await postDataAPI({
          url: API_ENDPOINTS?.CHAT_MESSAGES,
          body: {
            message: params?.userInput,
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
      } catch (error) {
        params?.showToast(
          error?.data?.data?.data?.message || "Server is not responding",
        );
      }
    },
    component: (params) => <PreDefineChat params={params} />,
    renderHtml: ["BOT", "USER"],
    path: "apiLoop",
  },
  apiLoop: {
    function: async (params) => {
      try {
        const response = await postDataAPI({
          url: API_ENDPOINTS?.CHAT_MESSAGES,
          body: {
            message: params?.userInput,
            ...(!!currentConversation
              ? { conversationId: currentConversation }
              : {}),
          },
        });
        const sanitizedMessage = DOMPurify.sanitize(
          response?.data?.data?.data?.message,
        );
        params?.injectMessage(sanitizedMessage);
        if (!currentConversation) {
          navigate(
            `${pathname}?currentConversation=${response?.data?.data?.data?.conversationId}`,
          );
        }
      } catch (error) {
        params?.showToast(
          error?.data?.data?.data?.message || "Server is not responding",
        );
      }
    },
    renderHtml: ["BOT", "USER"],
    path: "apiLoop",
  },
});
