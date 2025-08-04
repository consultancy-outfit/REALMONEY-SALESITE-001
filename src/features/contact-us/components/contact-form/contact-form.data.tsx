import TextFormFields from "@/components/form-fields/text-form-field";
import * as Yup from "yup";

export const contactUsFormValidationSchema = Yup?.object()?.shape({
  firstName: Yup?.string()?.trim()?.required("First name is required"),
  lastName: Yup?.string()?.trim()?.required("Last name is required"),
  email: Yup?.string()
    ?.trim()
    ?.email("Invalid email")
    ?.typeError("Invalid email")
    ?.required("Email is required"),
  query: Yup?.string()?.trim()?.required("Message is required"),
  phoneNumber: Yup?.string()?.trim()?.required("Phone number is required"),
});

export const contactUsFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  query: "",
  phoneNumber: "",
};

export const contactUsFormFields = [
  {
    _id: 1,
    componentProps: {
      name: "firstName",
      placeholder: "Enter your first name",
      required: true,
    },
    component: TextFormFields,
    md: 12,
  },
  {
    _id: 2,
    componentProps: {
      name: "lastName",
      placeholder: "Enter your last name",
      required: true,
    },
    component: TextFormFields,
    md: 12,
  },
  {
    _id: 3,
    componentProps: {
      name: "email",
      placeholder: "Enter your email",
      required: true,
    },
    component: TextFormFields,
    md: 12,
  },
  {
    _id: 4,
    componentProps: {
      name: "phoneNumber",
      placeholder: "Enter phone number",
      required: true,
    },
    component: TextFormFields,
    md: 12,
  },
  {
    _id: 5,
    componentProps: {
      name: "query",
      placeholder: "Message",
    },
    component: TextFormFields,
    md: 12,
  },
];
