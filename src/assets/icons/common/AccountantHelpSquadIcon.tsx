import React from "react";
import { SvgIconProps } from "@mui/material";

const AccountantHelpSquadIcon: React.FC<SvgIconProps> = () => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_211_208)">
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="8"
          fill="url(#paint0_linear_211_208)"
        />
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="8"
          fill="url(#paint1_radial_211_208)"
          fill-opacity="0.1"
        />
      </g>
      <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" stroke="#767676" />
      <g clip-path="url(#clip0_211_208)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.6209 7.24146L7.04969 26.3556C6.84743 26.7595 7.30387 27.1738 7.67656 26.9245L11.182 24.5804L22.034 17.4294C22.2204 17.3066 22.2856 17.061 22.1853 16.8596L17.3967 7.24236C17.2359 6.91963 16.7823 6.9191 16.6209 7.24146ZM18.9734 21.3092L22.551 18.8235C22.7664 18.6739 23.0622 18.7492 23.1826 18.9844L26.9485 26.3458C27.1548 26.749 26.6991 27.1677 26.3245 26.919L18.981 22.0433C18.7217 21.8712 18.7178 21.4868 18.9734 21.3092ZM17.0097 12.7451L14.1817 17.9388L15.2076 18.1993L16.2336 18.4598L18.9126 16.2473L17.0097 12.7451Z"
          fill="#010101"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_211_208"
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
            result="effect1_innerShadow_211_208"
          />
        </filter>
        <linearGradient
          id="paint0_linear_211_208"
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
          id="paint1_radial_211_208"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17 17) scale(16)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <clipPath id="clip0_211_208">
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

export default AccountantHelpSquadIcon;
