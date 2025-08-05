import React from "react";
import { SvgIconProps } from "@mui/material";

const MultiCurrencyWalletIcon: React.FC<SvgIconProps> = () => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_211_243)">
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="8"
          fill="url(#paint0_linear_211_243)"
        />
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="8"
          fill="url(#paint1_radial_211_243)"
          fill-opacity="0.1"
        />
      </g>
      <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" stroke="#767676" />
      <path
        d="M23.875 12H11.375C11.2092 12 11.0503 11.9342 10.9331 11.8169C10.8158 11.6997 10.75 11.5408 10.75 11.375C10.75 11.2092 10.8158 11.0503 10.9331 10.9331C11.0503 10.8158 11.2092 10.75 11.375 10.75H22C22.1658 10.75 22.3247 10.6842 22.4419 10.5669C22.5592 10.4497 22.625 10.2908 22.625 10.125C22.625 9.95924 22.5592 9.80027 22.4419 9.68306C22.3247 9.56585 22.1658 9.5 22 9.5H11.375C10.8777 9.5 10.4008 9.69754 10.0492 10.0492C9.69754 10.4008 9.5 10.8777 9.5 11.375V21.375C9.5 21.8723 9.69754 22.3492 10.0492 22.7008C10.4008 23.0525 10.8777 23.25 11.375 23.25H23.875C24.2065 23.25 24.5245 23.1183 24.7589 22.8839C24.9933 22.6495 25.125 22.3315 25.125 22V13.25C25.125 12.9185 24.9933 12.6005 24.7589 12.3661C24.5245 12.1317 24.2065 12 23.875 12ZM23.875 22H11.375C11.2092 22 11.0503 21.9342 10.9331 21.8169C10.8158 21.6997 10.75 21.5408 10.75 21.375V13.143C10.9507 13.2141 11.1621 13.2503 11.375 13.25H23.875V22ZM20.125 17.3125C20.125 17.1271 20.18 16.9458 20.283 16.7917C20.386 16.6375 20.5324 16.5173 20.7037 16.4464C20.875 16.3754 21.0635 16.3568 21.2454 16.393C21.4273 16.4292 21.5943 16.5185 21.7254 16.6496C21.8565 16.7807 21.9458 16.9477 21.982 17.1296C22.0182 17.3115 21.9996 17.5 21.9286 17.6713C21.8577 17.8426 21.7375 17.989 21.5833 18.092C21.4292 18.195 21.2479 18.25 21.0625 18.25C20.8139 18.25 20.5754 18.1512 20.3996 17.9754C20.2238 17.7996 20.125 17.5611 20.125 17.3125Z"
        fill="#010101"
      />
      <defs>
        <filter
          id="filter0_i_211_243"
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
            result="effect1_innerShadow_211_243"
          />
        </filter>
        <linearGradient
          id="paint0_linear_211_243"
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
          id="paint1_radial_211_243"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17 17) scale(16)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default MultiCurrencyWalletIcon;
