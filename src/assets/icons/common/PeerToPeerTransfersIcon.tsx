import React from "react";
import { SvgIconProps } from "@mui/material";

const PeerToPeerTransfersIcon: React.FC<SvgIconProps> = () => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_211_263)">
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="8"
          fill="url(#paint0_linear_211_263)"
        />
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="8"
          fill="url(#paint1_radial_211_263)"
          fill-opacity="0.1"
        />
      </g>
      <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" stroke="#767676" />
      <g clip-path="url(#clip0_211_263)">
        <path
          d="M18.7647 25.8251C18.7647 26.15 18.5013 26.4134 18.1764 26.4134C17.8516 26.4134 17.5882 26.15 17.5882 25.8251V24.6482C17.5882 22.0496 15.4813 19.9427 12.8823 19.9427C10.2829 19.9427 8.17646 22.0492 8.17646 24.6482V25.8251C8.17646 26.15 7.9131 26.4134 7.58821 26.4134C7.26333 26.4134 7 26.15 7 25.8251V24.6482C7 21.3995 9.6332 18.7663 12.8824 18.7663C16.131 18.7663 18.7647 21.3998 18.7647 24.6482L18.7647 25.8251ZM17.8785 18.2933C17.6428 18.5169 17.2705 18.5071 17.0469 18.2715C16.8233 18.0358 16.833 17.6635 17.0687 17.4398C18.154 16.41 19.5905 15.8252 21.1176 15.8252C24.3662 15.8252 27 18.4585 27 21.7064V22.884C27 23.2089 26.7366 23.4722 26.4118 23.4722C26.0869 23.4722 25.8235 23.2089 25.8235 22.884V21.7064C25.8235 19.1083 23.7165 17.0016 21.1176 17.0016C19.8949 17.0016 18.7473 17.4688 17.8785 18.2933ZM12.8824 17.0016C11.0956 17.0016 9.64707 15.5531 9.64707 13.7663C9.64707 11.9795 11.0956 10.531 12.8824 10.531C14.6692 10.531 16.1176 11.9795 16.1176 13.7663C16.1176 15.5531 14.6692 17.0016 12.8824 17.0016ZM12.8824 15.8251C14.0194 15.8251 14.9412 14.9034 14.9412 13.7663C14.9412 12.6292 14.0194 11.7075 12.8824 11.7075C11.7453 11.7075 10.8235 12.6292 10.8235 13.7663C10.8235 14.9034 11.7453 15.8251 12.8824 15.8251ZM21.1176 14.0604C19.3308 14.0604 17.8824 12.6119 17.8824 10.8251C17.8824 9.03832 19.3308 7.58984 21.1176 7.58984C22.9044 7.58984 24.3529 9.03832 24.3529 10.8251C24.3529 12.6119 22.9044 14.0604 21.1176 14.0604ZM21.1176 12.884C22.2547 12.884 23.1765 11.9622 23.1765 10.8251C23.1765 9.68806 22.2547 8.7663 21.1176 8.7663C19.9806 8.7663 19.0588 9.68806 19.0588 10.8251C19.0588 11.9622 19.9806 12.884 21.1176 12.884Z"
          fill="#010101"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_211_263"
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
            result="effect1_innerShadow_211_263"
          />
        </filter>
        <linearGradient
          id="paint0_linear_211_263"
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
          id="paint1_radial_211_263"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17 17) scale(16)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <clipPath id="clip0_211_263">
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

export default PeerToPeerTransfersIcon;
