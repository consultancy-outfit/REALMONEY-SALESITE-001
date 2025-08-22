import TextFormFields from "@/components/form-fields/text-form-field";
import * as Yup from "yup";

export const LoginFormValidationSchema = Yup?.object()?.shape({
  email: Yup?.string()
    ?.trim()
    ?.email("Invalid email")
    ?.typeError("Invalid email")
    ?.required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character",
    )
    .required("Password is required"),
});

export const loginFormDefaultValues = {
  email: "",
  password: "",
};

export const loginFormFields = [
  {
    _id: 2,
    componentProps: {
      name: "email",
      label: "Email",
      placeholder: "Enter your Email",
      required: true,
    },
    component: TextFormFields,
    md: 12,
  },
  {
    _id: 3,
    componentProps: {
      name: "password",
      label: "Password",
      placeholder: "Enter your Password",
      required: true,
    },
    component: TextFormFields,
    md: 12,
  },
];
