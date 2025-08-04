import { useForm } from "react-hook-form";
import {
  registerFormDefaultValues,
  registerFormSchema,
} from "./RegisterForm.data";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { API_ENDPOINTS } from "../../../constants/api-end-points";
import { postDataAPI } from "../../../lib/api-call";
import { COMPANY_CODES } from "../../../constants/ui";

export const useRegisterForm = ({ params }) => {
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userRequirements = sessionStorage.getItem("userRequirements");
  const { role } = JSON.parse(userRequirements);
  const methods = useForm({
    defaultValues: registerFormDefaultValues,
    resolver: yupResolver(registerFormSchema(role)),
  });
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await postDataAPI({
        url: API_ENDPOINTS?.CHAT_SIGN_UP,
        body: {
          firstName: data?.firstName,
          lastName: data?.lastName,
          employeeId: data?.employeeId,
          email: data?.email,
          ...(data?.contactNumber && {
            contactNumber: data?.contactNumber,
          }),
          department: data?.department,
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
    methods,
    onSubmit,
    disabled,
    role,
    isLoading,
  };
};
