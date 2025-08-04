import React from "react";
import { SvgIconProps } from "@mui/material";

const WideNormalCoverageIcon: React.FC<SvgIconProps> = (props) => {
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
      {/* Placeholder path for 'Wide Normal Coverage' - replace with your actual SVG path */}
      <path
        d="M16 6C11.58 6 8 9.58 8 14C8 18.42 11.58 22 16 22C20.42 22 24 18.42 24 14C24 9.58 20.42 6 16 6ZM16 20C12.69 20 10 17.31 10 14C10 10.69 12.69 8 16 8C19.31 8 22 10.69 22 14C22 17.31 19.31 20 16 20ZM16 13L10 18H22L16 13Z"
        fill="#9747FF"
      />
    </svg>
  );
};

export default WideNormalCoverageIcon;
