import React from "react";
import { SvgIconProps } from "@mui/material";

const IdentityVerificationIcon: React.FC<SvgIconProps> = () => {
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
        d="M16 6.78119L8.34375 9.95998V13.8242C8.34375 18.8252 11.3699 23.3288 16 25.2187C20.6301 23.3288 23.6562 18.8252 23.6562 13.8242V9.95998L16 6.78119Z"
        stroke="#9747FF"
        stroke-width="1.5625"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.9531 15.3791L15.1365 17.5624L19.0469 13.6521"
        stroke="#9747FF"
        stroke-width="1.5625"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IdentityVerificationIcon;
