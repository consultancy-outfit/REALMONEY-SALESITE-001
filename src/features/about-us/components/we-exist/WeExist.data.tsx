import { Theme } from "@mui/material";
import { HiringIcon, PreventingIcon, VerificationIcon } from "../../assets";

export const weExistData = (theme: Theme) => [
  {
    id: 1,
    title: "Preventing Fraud & Ensuring Compliance",
    description:
      "We help businesses mitigate risks, prevent fraud, and stay compliant with industry regulations.",
    icon: PreventingIcon,
    mainColor: theme?.palette?.info?.main,
    darkColor: theme?.palette?.info?.dark,
  },
  {
    id: 2,
    title: "Seamless & Frictionless Verification",
    description:
      "Our solutions are designed to provide a smooth and hassle-free verification experience for businesses and customers alike.",
    icon: HiringIcon,
    mainColor: theme?.palette?.warning?.main,
    darkColor: theme?.palette?.warning?.dark,
  },
  {
    id: 3,
    title: "Informed Hiring & Onboarding",
    description:
      "We empower organisations with reliable background checks to make confident hiring and onboarding decisions.",
    icon: VerificationIcon,
    mainColor: theme?.palette?.success?.main,
    darkColor: theme?.palette?.success?.dark,
  },
];
