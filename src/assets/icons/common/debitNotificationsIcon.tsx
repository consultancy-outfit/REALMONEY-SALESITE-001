import React from "react";
import { SvgIconProps } from "@mui/material";

const DebitNotificationsIcon: React.FC<SvgIconProps> = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.1" width="32" height="32" rx="4" fill="#9747FF" />
      <path
        d="M23 9.125H9C7.6875 9.125 6.625 10.1875 6.625 11.5V20.5C6.625 21.8125 7.6875 22.875 9 22.875H23C24.3125 22.875 25.375 21.8125 25.375 20.5V11.5C25.375 10.1875 24.3125 9.125 23 9.125ZM24.125 20.5C24.125 21.1188 23.6187 21.625 23 21.625H9C8.38125 21.625 7.875 21.1188 7.875 20.5V11.5C7.875 10.8813 8.38125 10.375 9 10.375H23C23.6187 10.375 24.125 10.8813 24.125 11.5V20.5Z"
        fill="#9747FF"
      />
    </svg>
  );
};

export default DebitNotificationsIcon;
