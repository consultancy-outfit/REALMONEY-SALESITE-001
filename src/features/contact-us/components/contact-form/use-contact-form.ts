"use client";
import { useForm } from "react-hook-form";
import {
  contactUsFormDefaultValues,
  contactUsFormValidationSchema,
} from "./contact-form.data";
import { yupResolver } from "@hookform/resolvers/yup";
// import { API_ENDPOINTS } from "@/constants/api-endpoints";
// import { API_KEY } from "@/configs/env";
// import { postDataAPI } from "@/libs/api-call";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useState } from "react";

export const useContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm({
    defaultValues: contactUsFormDefaultValues,
    resolver: yupResolver(contactUsFormValidationSchema),
  });

  const { handleSubmit, reset } = methods;

  const submitContactUs = async () => {
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
      reset?.();
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
    setIsLoading(false);
  };

  return {
    methods,
    handleSubmit,
    submitContactUs,
    isLoading,
  };
};
