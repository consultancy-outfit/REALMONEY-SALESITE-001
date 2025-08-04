"use client";
import { CommonLoadingButtonPropsI } from "../buttons.interface";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const MotionButton = motion.create(Button);

export const CommonLoadingButton = (props: CommonLoadingButtonPropsI) => {
  const {
    primary = true,
    variant = primary ? "contained" : "outlined",
    color = primary ? "primary" : "secondary",
    type = "button",
    className = "small",
    loading = false,
    disabled = false,
    onClick,
    customStyles,
    children,
    startIcon = null,
    fullWidth = false,
    buttonLabel = `loading button ${color}`,
    size = "large",
  } = props;

  return (
    <MotionButton
      aria-label={buttonLabel}
      className={className}
      variant={variant}
      type={type}
      loading={loading}
      disabled={disabled}
      color={color}
      onClick={onClick}
      sx={{
        padding: "1rem 2.5rem",
        borderRadius: 1,
        perspective: "1000px",
        ...customStyles,
      }}
      startIcon={!!startIcon && startIcon}
      fullWidth={fullWidth}
      size={size}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </MotionButton>
  );
};
