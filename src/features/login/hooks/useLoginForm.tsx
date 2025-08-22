"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { API_ENDPOINTS } from "@/constants/api-endpoints";
// import { API_KEY } from "@/configs/env";
// import { postDataAPI } from "@/libs/api-call";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useState } from "react";
import {
  loginFormDefaultValues,
  LoginFormValidationSchema,
} from "../components/login-form/login-form.data";

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submittedEmails, setSubmittedEmails] = useState<string[]>([]);

  const methods = useForm({
    defaultValues: loginFormDefaultValues,
    resolver: yupResolver(LoginFormValidationSchema),
  });

  const { handleSubmit, reset, watch } = methods;
  const email = watch("email");

  const submitLogin = async () => {
    if (submittedEmails.includes(email)) {
      errorSnackbar("This email has already been used!");
      return;
    }
    setIsLoading(true);
    // const apiDataParameter = {
    //   url: API_ENDPOINTS?.ENQUIRIES,
    //   body: {
    //     name: formData?.firstName + formData?.lastName,
    //     email: formData?.email,
    //     phoneNumber: formData?.phoneNumber,
    //     query: formData?.query,
    //   },
    //   headers: {
    //     "x-api-key": API_KEY,
    //   },
    // };

    try {
      // const response: any = await postDataAPI(apiDataParameter);
      successSnackbar("Form Submitted Successfully!");
      setSubmittedEmails((prev) => [...prev, email]);

      reset?.();
    } catch (error: any) {
      errorSnackbar(error?.data?.message || "Invalid Credentials");
    }
    setIsLoading(false);
  };

  return {
    methods,
    handleSubmit,
    submitLogin,
    isLoading,
  };
};
