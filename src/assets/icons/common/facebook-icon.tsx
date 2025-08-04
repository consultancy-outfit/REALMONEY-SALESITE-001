import React from "react";

interface FacebookIconProps {
  color?: string;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({ color = "white" }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3334 9.0013C17.3334 4.4013 13.6001 0.667969 9.00008 0.667969C4.40008 0.667969 0.666748 4.4013 0.666748 9.0013C0.666748 13.0346 3.53341 16.393 7.33341 17.168V11.5013H5.66675V9.0013H7.33341V6.91797C7.33341 5.30964 8.64175 4.0013 10.2501 4.0013H12.3334V6.5013H10.6667C10.2084 6.5013 9.83341 6.8763 9.83341 7.33464V9.0013H12.3334V11.5013H9.83341V17.293C14.0417 16.8763 17.3334 13.3263 17.3334 9.0013Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookIcon;
