"use client";
import { useTheme } from "@mui/material";

export const CommonArrowForwardIcon = (props: any) => {
  const theme = useTheme();

  const { color = theme?.palette?.common?.border } = props;

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 3L10.5 8L5.5 13"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CommonArrowForwardIcon;
