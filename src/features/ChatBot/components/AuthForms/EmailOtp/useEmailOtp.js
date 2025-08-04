import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { postDataAPI } from "../../../lib/api-call";
import { API_ENDPOINTS } from "../../../constants/api-end-points";
import { COMPANY_CODES, LOCAL_STORAGE_KEYS } from "../../../constants/ui";

export const useEmailOtp = ({ params }) => {
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      otpNumber: "",
    },
    resolver: yupResolver(
      Yup?.object()?.shape({
        otpCode: Yup?.string()?.required("OTP is required"),
      }),
    ),
  });
  const userRequirements = sessionStorage?.getItem("userRequirements");
  const { email } = JSON?.parse(userRequirements);
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await postDataAPI({
        url: API_ENDPOINTS?.CHAT_SIGN_IN,
        body: {
          email,
          otpCode: data?.otpCode,
          companyCode: COMPANY_CODES,
        },
      });
      localStorage.setItem(
        LOCAL_STORAGE_KEYS?.AUTH_DATA,
        JSON.stringify(response?.data?.data?.data),
      );
      setDisabled(true);
      setIsLoading(false);
      await params?.injectMessage(
        "Authentication may take a few moments, and the chatbot will close automatically during this process. Please reopen it shortly to continue using our services seamlessly.",
      );
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      params?.showToast(
        error?.data?.data?.data?.message || "Something went wrong.",
      );
      setIsLoading(false);
    }
  };
  return {
    methods,
    onSubmit,
    disabled,
    isLoading,
  };
};
