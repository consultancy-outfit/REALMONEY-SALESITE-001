import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { postDataAPI } from "../../../lib/api-call";
import { API_ENDPOINTS } from "../../../constants/api-end-points";
import { COMPANY_CODES } from "../../../constants/ui";

export const useEmailForm = ({ params }) => {
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(
      Yup?.object()?.shape({
        email: Yup?.string()
          ?.email()
          ?.max(50, "Email must be at most 50 characters")
          ?.required("Email is required"),
      }),
    ),
  });
  const userRequirements = sessionStorage?.getItem("userRequirements");
  const { role } = JSON?.parse(userRequirements);
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await postDataAPI({
        url: API_ENDPOINTS?.CHAT_SIGN_UP,
        body: {
          email: data?.email,
          role: role?.toLowerCase(),
          companyCode: COMPANY_CODES,
        },
      });
      sessionStorage.setItem(
        "userRequirements",
        JSON.stringify({
          ...JSON.parse(userRequirements),
          email: data?.email,
        }),
      );
      params?.goToPath("emailOtp");
      setDisabled(true);
      setIsLoading(false);
    } catch (error) {
      params?.showToast(
        error?.data?.data?.data?.message || "Something went wrong.",
      );
      setIsLoading(false);
    }
  };
  return {
    disabled,
    methods,
    onSubmit,
    isLoading,
  };
};
