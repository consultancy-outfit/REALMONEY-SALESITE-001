import { RHFTextField } from "../../ReactHookForm";
import * as Yup from "yup";

const employeeIdLabel = {
  Employee: "Employee Id",
  Delegate: "Delegate Id",
  Stakeholder: "Stakeholder Id",
};

export const registerFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  employeeId: "",
  department: null,
};

export const registerFormSchema = (role) =>
  Yup?.object()?.shape({
    firstName: Yup?.string()?.required("First Name is required"),
    lastName: Yup?.string()?.required("Last Name is required"),
    email: Yup?.string()
      ?.email("Invalid email address")
      ?.required("Email is required"),
    contactNumber: Yup.string()
      .nullable()
      .notRequired()
      .test(
        "is-valid-uk-phone",
        "Invalid UK phone number",
        (value) => !value || /^\+44\d{10}$/.test(value),
      ),
    employeeId:
      role !== "Customer"
        ? Yup?.string()?.required("Employee Id is required")
        : Yup?.string(),
  });

export const registerFields = (role) => [
  {
    id: 1,
    componentProps: { name: "firstName", label: "First Name", required: true },
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: { name: "lastName", label: "Last Name", required: true },
    component: RHFTextField,
  },
  {
    id: 3,
    componentProps: { name: "email", label: "Email", required: true },
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "contactNumber",
      label: "Phone Number",
    },
    component: RHFTextField,
  },
  ...(role !== "Customer"
    ? [
        {
          id: 5,
          componentProps: {
            name: "employeeId",
            label: employeeIdLabel[role],
            required: true,
          },
          component: RHFTextField,
        },
        ...(role === "Employee"
          ? [
              {
                id: 6,
                componentProps: {
                  name: "department",
                  label: "Department",
                },
                component: RHFTextField,
              },
            ]
          : []),
      ]
    : []),
];
