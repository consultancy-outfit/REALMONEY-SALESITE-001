import { useFormLib } from "@/hooks/use-form-lib";
import * as Yup from "yup";

export const useLoginForm = () => {
  const { methods, handleSubmit } = useFormLib({
    defaultValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email or Username is required"),
      password: Yup.string().required("Password is required"),
    }),
  });
  const onSubmit = (data: any) => {
    return data;
  };
  return { methods, onSubmit, handleSubmit };
};
