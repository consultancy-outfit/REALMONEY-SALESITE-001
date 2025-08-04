"use client";
import { motion } from "framer-motion";

export const HoverScaleUpDown = (props: any) => {
  const { children, scale = 1.2 } = props;
  return <motion.div whileHover={{ scale }}>{children}</motion.div>;
};
