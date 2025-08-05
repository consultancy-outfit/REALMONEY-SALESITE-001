import React from "react";
import { SvgIconProps } from "@mui/material";

const BankBasedIdentityVerificationIcon: React.FC<SvgIconProps> = () => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_211_155)">
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="8"
          fill="url(#paint0_linear_211_155)"
        />
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="8"
          fill="url(#paint1_radial_211_155)"
          fill-opacity="0.1"
        />
      </g>
      <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" stroke="#767676" />
      <g clip-path="url(#clip0_211_155)">
        <mask
          id="mask0_211_155"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="7"
          y="6"
          width="20"
          height="21"
        >
          <path d="M7 6.98779H27V26.9878H7V6.98779Z" fill="white" />
        </mask>
        <g mask="url(#mask0_211_155)">
          <path
            d="M17 7.7666L9.34375 10.9454V14.8096C9.34375 19.8106 12.3699 24.3143 17 26.2041C21.6301 24.3143 24.6562 19.8106 24.6562 14.8096V10.9454L17 7.7666Z"
            stroke="#010101"
            stroke-width="1.5625"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9531 16.3645L16.1365 18.5479L20.0469 14.6375"
            stroke="#010101"
            stroke-width="1.5625"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_211_155"
          x="0"
          y="0"
          width="34"
          height="38"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_211_155"
          />
        </filter>
        <linearGradient
          id="paint0_linear_211_155"
          x1="17.0829"
          y1="33"
          x2="17.0829"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00C2FF" />
          <stop offset="1" stop-color="#7BDFFF" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_211_155"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17 17) scale(16)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <clipPath id="clip0_211_155">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(7 7)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BankBasedIdentityVerificationIcon;
