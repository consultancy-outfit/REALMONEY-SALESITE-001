"use client";
import { Button } from "@mui/material";
import { CommonButtonPropsI } from "../buttons.interface";
import { motion } from "framer-motion";

const MotionButton = motion.create(Button);

export const CommonButton = (props: CommonButtonPropsI) => {
  const {
    children,
    onClick,
    primary = false,
    variant = primary ? "contained" : "outlined",
    color = primary ? "primary" : "secondary",
    disabled = false,
    className = "small",
    fullWidth = false,
    customStyles,
    type = "button",
    startIcon = undefined,
    endIcon = undefined,
  } = props;

  return (
    <MotionButton
      disableElevation
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      disabled={disabled}
      className={className}
      fullWidth={fullWidth}
      sx={{
        padding: "1rem 2.5rem",
        borderRadius: 1,
        perspective: "1000px",
        ...customStyles,
      }}
      type={type}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </MotionButton>
  );
};
