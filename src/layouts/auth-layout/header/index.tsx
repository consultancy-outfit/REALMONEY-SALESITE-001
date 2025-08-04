"use client";
import {
  Box,
  Stack,
  Typography,
  useTheme,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "framer-motion";

// Import MUI Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Assuming these paths are correct for your project structure
import { navLinksData } from "./header.data";
import { LinkButton } from "@/components/buttons/link-button";
import { APP_ROUTES } from "@/constants/routes";
import { MobileHeader } from "./mobile-header";
import { LogoAvatar } from "@/components/avatars/logo-avatar";

// Define a type for your nav link items, especially for children
interface NavLinkItem {
  title: string;
  path: string;
  children?: NavLinkItem[]; // Children are also NavLinkItem type
}

export const Header = () => {
  const pathname = usePathname();
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const theme = useTheme();

  // State specifically for the "Products" dropdown menu
  // HTMLElement or null is the correct type for anchorEl
  const [productsAnchorEl, setProductsAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const openProductsMenu = Boolean(productsAnchorEl);

  // Use useCallback for event handlers to prevent unnecessary re-renders
  // React.MouseEvent<HTMLButtonElement> is the type for a click event on a Button
  const handleProductsClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setProductsAnchorEl(event.currentTarget);
    },
    [],
  );

  const handleProductsClose = useCallback(() => {
    setProductsAnchorEl(null);
  }, []);

  useEffect(() => {
    if (!theme) return; // Only proceed if theme is defined

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.01) {
        controls.start({
          width: "85%",
          transition: { duration: 0.4 },
          boxShadow:
            "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.05)",
          backgroundColor: theme.palette.common.white,
          top: 20,
          padding: "2.8rem 1rem",
        });
      } else {
        controls.start({
          width: "90%",
          transition: { duration: 0.4 },
          boxShadow: "none",
          backgroundColor: "transparent",
          top: 0,
          padding: "2.5rem 1rem",
        });
      }
    });
    return () => unsubscribe();
  }, [controls, scrollYProgress, theme]);

  return (
    <>
      <motion.div
        animate={controls}
        initial={{
          width: "90%",
          backgroundColor: "transparent",
          boxShadow: "none",
          top: 0,
        }}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 1100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2.5rem 1rem",
          margin: "0 auto",
          borderRadius: 16,
          height: 80,
        }}
      >
        <Box>
          <LogoAvatar height="auto" isCenter isLight={false} />
        </Box>
        <Stack
          direction="row"
          spacing={{ xl: 3, xs: 2 }}
          alignItems="center"
          display={{ xs: "none", lg: "flex" }}
        >
          {/* Cast navLinksData to the defined type for better type inference */}
          {(navLinksData as NavLinkItem[])?.map((item) => {
            const isActiveParent = item.children
              ? item.children.some((child) =>
                  pathname?.startsWith(child.path),
                ) || pathname?.startsWith(item.path)
              : pathname?.startsWith(item.path) && item.path !== "/"
                ? true
                : pathname === "/" && item.path === "/";

            const textColor = theme
              ? isActiveParent
                ? theme.palette.primary.main
                : theme.palette.text.primary
              : "inherit";

            return item.children ? (
              <React.Fragment key={item.title}>
                <Button
                  id="products-button"
                  aria-controls={openProductsMenu ? "products-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openProductsMenu ? "true" : undefined}
                  onClick={handleProductsClick}
                  sx={{
                    textTransform: "none",
                    color: textColor,
                    fontWeight: theme?.typography?.fontWeightMedium,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    padding: "6px 8px",
                    minWidth: "auto",
                  }}
                  // Add endIcon for the dropdown arrow
                  endIcon={
                    openProductsMenu ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )
                  }
                >
                  <Typography variant="body2" component="span">
                    {item?.title}
                  </Typography>
                </Button>
                <Menu
                  id="products-menu"
                  anchorEl={productsAnchorEl}
                  open={openProductsMenu}
                  onClose={handleProductsClose}
                  MenuListProps={{
                    "aria-labelledby": "products-button",
                  }}
                  sx={{ zIndex: 2000 }}
                >
                  {item.children.map((childItem) => (
                    <MenuItem
                      key={childItem.title}
                      onClick={handleProductsClose}
                      component={Link}
                      href={childItem.path}
                      sx={{
                        color: theme
                          ? pathname === childItem.path
                            ? theme.palette.primary.main
                            : theme.palette.text.primary
                          : "inherit",
                      }}
                    >
                      {childItem.title}
                    </MenuItem>
                  ))}
                </Menu>
              </React.Fragment>
            ) : (
              <Typography
                key={item?.title}
                variant="body2"
                component={Link}
                href={item?.path}
                sx={{
                  textDecoration: "none",
                  color: textColor,
                  fontWeight: theme?.typography?.fontWeightMedium,
                }}
              >
                {item?.title}
              </Typography>
            );
          })}
        </Stack>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Stack
            direction="row"
            spacing={2}
            display={{ xs: "none", sm: "flex" }}
          >
            <LinkButton
              link={APP_ROUTES?.PARTNER_WITH_US}
              variant="outlined"
              color="secondary"
              customStyles={{
                borderRadius: "999px",
                border: "1px solid #F2F2F2",
                px: "24px",
                py: "8px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "fit-content",
                bgcolor: theme?.palette?.common?.white,
                color: theme?.palette?.text?.primary,
              }}
            >
              Login
            </LinkButton>
            <LinkButton
              link={APP_ROUTES?.Get_STARTED}
              customStyles={{
                borderRadius: "999px",
                border: `1.5px solid ${theme?.palette?.primary?.main}`,
                px: "24px",
                py: "8px",
                bgcolor: theme?.palette?.primary?.main,
                color: theme?.palette?.common?.white,
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "fit-content",
              }}
            >
              Get Started
            </LinkButton>
          </Stack>
          <Box
            sx={{
              display: { xs: "block", lg: "none" },
            }}
          >
            <MobileHeader />
          </Box>
        </Stack>
      </motion.div>
    </>
  );
};
