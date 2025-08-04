import { PROJECT_NAME } from "@/configs/env";
import {
  Businesses,
  ConsultantsAndAdvisors,
  TechnologyProviders,
} from "../../assets";

export const partnerOptions = [
  {
    _id: "1",
    icon: Businesses,
    title: "Businesses",
    description: `Enhance your services with our advanced identity verification solutions. Whether in finance, healthcare, e-commerce, or beyond, ${PROJECT_NAME}'s tools elevate your offerings with seamless security and trust.`,
    bgColor: "#E5F2FF",
  },
  {
    _id: "2",
    icon: TechnologyProviders,
    title: "Technology Providers",
    description:
      "If you provide complementary technology services, partner with us to create a seamless experience for mutual clients, enhancing the value you deliver and strengthening customer trust.",
    bgColor: "#FFF6E9",
    border: "1px solid #FFD8A8",
  },
  {
    _id: "3",
    icon: ConsultantsAndAdvisors,
    title: "Consultants and Advisors",
    description: `Partner with us to provide your clients with expert insights on identity verification best practices and demonstrate how ${PROJECT_NAME}e and optimise their operations.`,
    bgColor: "#E7FAF0",
  },
];
