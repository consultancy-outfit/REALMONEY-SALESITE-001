import TextAreaFormFields from "@/components/form-fields/text-area-form-field";
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
    _id: 2,
    componentProps: {
      name: "fullName",
      label: "Your Name",
      placeholder: "Enter your full name",
      required: true,
    },
    component: TextFormFields,
    md: 12,
  },
  {
    _id: 3,
    componentProps: {
      name: "email",
      label: "Email address",
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
      label: "Phone Number",
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
      label: "Message",
      placeholder: "Enter your message",
    },
    component: TextAreaFormFields,
    md: 12,
  },
];
