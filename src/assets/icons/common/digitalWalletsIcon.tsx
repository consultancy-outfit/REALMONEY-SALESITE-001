import React from "react";
import { SvgIconProps } from "@mui/material";

const DigitalWalletsIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect opacity="0.1" width="32" height="32" rx="4" fill="#9747FF" />
      {/* Placeholder path for 'Digital Wallets' - replace with your actual SVG path */}
      <path
        d="M22 10H10C8.9 10 8.01 10.9 8.01 12L8 22C8 23.1 8.9 24 10 24H22C23.1 24 24 23.1 24 22V12C24 10.9 23.1 10 22 10ZM22 22H10V16H22V22ZM22 14H10V12H22V14ZM16 19C15.17 19 14.5 18.33 14.5 17.5C14.5 16.67 15.17 16 16 16C16.83 16 17.5 16.67 17.5 17.5C17.5 18.33 16.83 19 16 19Z"
        fill="#9747FF"
      />
    </svg>
  );
};

export default DigitalWalletsIcon;
