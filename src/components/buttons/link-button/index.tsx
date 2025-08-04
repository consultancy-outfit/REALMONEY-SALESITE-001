"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { LinkButtonPropsI } from "../buttons.interface";
import { motion } from "framer-motion";

const MotionButton = motion.create(Button);

export const LinkButton = (props: LinkButtonPropsI) => {
  const {
    link = "#",
    children,
    primary = true,
    variant = primary ? "contained" : "outlined",
    color = primary ? "primary" : "secondary",
    customStyles,
    size = "medium",
    startIcon = undefined,
    endIcon = undefined,
    linkProps = {},
    fullWidth = false,
  } = props;

  return (
    <Link href={link} {...linkProps}>
      <MotionButton
        disableElevation
        className="small"
        sx={{
          padding: "1rem 2.5rem",
          borderRadius: 1,
          perspective: "1000px",
          ...customStyles,
        }}
        color={color}
        variant={variant}
        size={size}
        endIcon={endIcon}
        startIcon={startIcon}
        fullWidth={fullWidth}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {children}
      </MotionButton>
    </Link>
  );
};
