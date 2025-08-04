import React from "react";
import { SvgIconProps } from "@mui/material";

const FinancialInclusionIcon: React.FC<SvgIconProps> = (props) => {
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
      {/* Placeholder path for 'Financial Inclusion for Identity' - replace with your actual SVG path */}
      <path
        d="M16 8C12.69 8 10 10.69 10 14C10 17.31 12.69 20 16 20C19.31 20 22 17.31 22 14C22 10.69 19.31 8 16 8ZM16 18C13.79 18 12 16.21 12 14C12 11.79 13.79 10 16 10C18.21 10 20 11.79 20 14C20 16.21 18.21 18 16 18ZM16 20.5C13.33 20.5 8 21.84 8 24.5V26H24V24.5C24 21.84 18.67 20.5 16 20.5Z"
        fill="#9747FF"
      />
    </svg>
  );
};

export default FinancialInclusionIcon;
