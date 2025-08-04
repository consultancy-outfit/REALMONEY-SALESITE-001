"use client";
import {
  Box,
  Stack,
  Typography,
  useTheme,
  Button,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "framer-motion";

import * as MuiIcons from "@mui/icons-material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { navLinksData } from "./header.data";
import { LinkButton } from "@/components/buttons/link-button";
import { APP_ROUTES } from "@/constants/routes";
import { MobileHeader } from "./mobile-header";
import { LogoAvatar } from "@/components/avatars/logo-avatar";

const getIconComponent = (
  icon?: string | React.FC<any>,
  marginRight: string = "8px",
) => {
  if (!icon) return null;

  if (typeof icon === "string") {
    const MuiIconComponent = MuiIcons[icon as keyof typeof MuiIcons];
    return MuiIconComponent ? (
      <MuiIconComponent sx={{ fontSize: 18, marginRight }} />
    ) : null;
  } else if (typeof icon === "function") {
    const CustomIconComponent = icon;
    return <CustomIconComponent sx={{ fontSize: 18, marginRight }} />;
  }
  return null;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

export const Header = () => {
  const pathname = usePathname();
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [productsAnchorEl, setProductsAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const openProductsMenu = Boolean(productsAnchorEl);

  const [activeProductTab, setActiveProductTab] = useState(0);

  const [developersAnchorEl, setDevelopersAnchorEl] =
    useState<null | HTMLElement>(null);
  const openDevelopersMenu = Boolean(developersAnchorEl);

  // Close dropdowns when switching to mobile view
  useEffect(() => {
    if (isMobile) {
      setProductsAnchorEl(null);
      setDevelopersAnchorEl(null);
    }
  }, [isMobile]);

  const handleProductsClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setProductsAnchorEl(event.currentTarget);
      const productsNavLink = navLinksData.find(
        (item) => item.title === "Products",
      );
      if (productsNavLink?.children) {
        const childrenWithTabs = productsNavLink.children.filter(
          (child) => child.children,
        );

        let initialTabIndex = childrenWithTabs.findIndex((child) =>
          pathname?.startsWith(child.path),
        );

        if (
          initialTabIndex === -1 &&
          pathname?.startsWith(APP_ROUTES.SERVICES)
        ) {
          initialTabIndex = 0;
        } else if (initialTabIndex === -1) {
          initialTabIndex = 0;
        }

        setActiveProductTab(initialTabIndex);
      }
    },
    [pathname],
  );

  const handleProductsClose = useCallback(() => {
    setProductsAnchorEl(null);
  }, []);

  const handleProductTabChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setActiveProductTab(newValue);
    },
    [],
  );

  const handleDevelopersClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setDevelopersAnchorEl(event.currentTarget);
    },
    [],
  );

  const handleDevelopersClose = useCallback(() => {
    setDevelopersAnchorEl(null);
  }, []);

  useEffect(() => {
    if (!theme) return;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.01) {
        controls.start({
          width: isMobile ? "95%" : "85%",
          transition: { duration: 0.4 },
          boxShadow:
            "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.05)",
          backgroundColor: theme.palette.common.white,
          top: 20,
          padding: "1.5rem 1rem",
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
  }, [controls, scrollYProgress, theme, isMobile]);

  const productsNavLink = useMemo(
    () => navLinksData.find((item) => item.title === "Products"),
    [],
  );

  const productsForTabs = productsNavLink?.children?.filter(
    (item) => item.children,
  );
  const productsForDirectLinks = productsNavLink?.children?.filter(
    (item) => !item.children,
  );

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
          <Link href={APP_ROUTES.HOME}>
            <LogoAvatar height="auto" isCenter isLight={false} />
          </Link>
        </Box>
        <Stack
          direction="row"
          spacing={{ xl: 3, xs: 2 }}
          alignItems="center"
          display={{ xs: "none", lg: "flex" }}
        >
          {navLinksData.map((item) => {
            const isActiveParent = item.children
              ? item.children.some((child) => pathname?.startsWith(child.path))
              : pathname?.startsWith(item.path) && item.path !== "/"
                ? true
                : pathname === "/" && item.path === "/";

            const textColor = theme
              ? isActiveParent
                ? theme.palette.primary.main
                : theme.palette.text.primary
              : "inherit";

            if (item.title === "Products") {
              return (
                <React.Fragment key={item.title}>
                  <Button
                    id="products-button"
                    aria-controls={
                      openProductsMenu ? "products-menu" : undefined
                    }
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
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    sx={{ zIndex: 2000 }}
                    slotProps={{
                      paper: {
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          minWidth: "700px",
                          maxWidth: "90vw",
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                      list: {
                        "aria-labelledby": "products-button",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        flexGrow: 1,
                        bgcolor: "background.paper",
                        display: "flex",
                        minHeight: 300,
                      }}
                    >
                      <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={activeProductTab}
                        onChange={handleProductTabChange}
                        aria-label="Products categories tabs"
                        sx={{
                          borderRight: 1,
                          borderColor: "divider",
                          width: "270px",
                          minWidth: "270px",
                          "& .MuiTab-root": {
                            justifyContent: "flex-start",
                            py: 2,
                            px: 2,
                            textTransform: "none",
                            fontSize: "0.9rem",
                            fontWeight: theme.typography.fontWeightMedium,
                            color: theme.palette.text.secondary,
                            "&.Mui-selected": {
                              color: theme.palette.primary.main,
                              backgroundColor: theme.palette.action.hover,
                            },
                          },
                          "& .MuiTabs-indicator": {
                            left: 0,
                            width: "4px",
                            backgroundColor: theme.palette.primary.main,
                          },
                        }}
                      >
                        {productsForTabs?.map((mainOffering, index) => (
                          <Tab
                            key={mainOffering.title}
                            label={
                              <Stack
                                direction="row"
                                alignItems="center"
                                sx={{
                                  gap: "8px",
                                  fontSize: "16px",
                                  width: "100%",
                                  justifyContent: "flex-start",
                                }}
                              >
                                {getIconComponent(mainOffering.icon)}
                                <span>{mainOffering.title}</span>
                              </Stack>
                            }
                            id={`product-tab-${index}`}
                            aria-controls={`product-tabpanel-${index}`}
                            value={index}
                          />
                        ))}
                        {productsForDirectLinks?.map((directLinkItem) => (
                          <MenuItem
                            key={directLinkItem.title}
                            onClick={handleProductsClose}
                            component={Link}
                            href={directLinkItem.path}
                            sx={{
                              justifyContent: "flex-start",
                              py: 2,
                              px: 2,
                              textTransform: "none",
                              fontSize: "0.9rem",
                              fontWeight: theme.typography.fontWeightMedium,
                              color: theme.palette.text.secondary,
                              "&:hover": {
                                backgroundColor: theme.palette.action.hover,
                              },
                              borderRadius: 1,
                            }}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              sx={{
                                gap: "8px",
                                width: "100%",
                                justifyContent: "flex-start",
                              }}
                            >
                              {getIconComponent(directLinkItem.icon)}
                              {directLinkItem.title}
                            </Stack>
                          </MenuItem>
                        ))}
                      </Tabs>
                      <Box sx={{ flexGrow: 1, p: 2, width: "100%" }}>
                        {productsForTabs?.map((mainOffering, index) => (
                          <CustomTabPanel
                            value={activeProductTab}
                            index={index}
                            key={mainOffering.title}
                          >
                            <Typography variant="h6" gutterBottom>
                              {mainOffering.title}
                            </Typography>
                            <Stack spacing={1}>
                              {mainOffering.children?.map((childItem) => (
                                <MenuItem
                                  key={childItem.title}
                                  onClick={handleProductsClose}
                                  component={Link}
                                  href={childItem.path}
                                  sx={{
                                    color:
                                      pathname === childItem.path
                                        ? theme.palette.primary.main
                                        : theme.palette.text.primary,
                                    fontWeight:
                                      pathname === childItem.path
                                        ? theme.typography.fontWeightBold
                                        : theme.typography.fontWeightRegular,
                                    "&:hover": {
                                      backgroundColor:
                                        theme.palette.action.hover,
                                    },
                                    borderRadius: 1,
                                    px: 2,
                                    py: 1,
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <Stack
                                    direction="row"
                                    alignItems="center"
                                    sx={{
                                      gap: "8px",
                                      width: "100%",
                                      justifyContent: "flex-start",
                                    }}
                                  >
                                    {getIconComponent(childItem.icon)}
                                    {childItem.title}
                                  </Stack>
                                </MenuItem>
                              ))}
                            </Stack>
                          </CustomTabPanel>
                        ))}
                      </Box>
                    </Box>
                  </Menu>
                </React.Fragment>
              );
            } else if (item.title === "Developers") {
              return (
                <React.Fragment key={item.title}>
                  <Button
                    id="developers-button"
                    aria-controls={
                      openDevelopersMenu ? "developers-menu" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={openDevelopersMenu ? "true" : undefined}
                    onClick={handleDevelopersClick}
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
                    endIcon={
                      openDevelopersMenu ? (
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
                    id="developers-menu"
                    anchorEl={developersAnchorEl}
                    open={openDevelopersMenu}
                    onClose={handleDevelopersClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    sx={{ zIndex: 2000 }}
                    slotProps={{
                      paper: {
                        sx: {
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          minWidth: "200px",
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 14,
                            width: 18,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                      list: {
                        "aria-labelledby": "developers-button",
                      },
                    }}
                  >
                    {item.children?.map((childItem) => (
                      <MenuItem
                        key={childItem.title}
                        onClick={handleDevelopersClose}
                        component={Link}
                        href={childItem.path}
                        sx={{
                          color:
                            pathname === childItem.path
                              ? theme.palette.primary.main
                              : theme.palette.text.primary,
                          fontWeight:
                            pathname === childItem.path
                              ? theme.typography.fontWeightBold
                              : theme.typography.fontWeightRegular,
                          "&:hover": {
                            backgroundColor: theme.palette.action.hover,
                          },
                          borderRadius: 1,
                          px: 2,
                          py: 1,
                          justifyContent: "flex-start",
                        }}
                      >
                        <Stack
                          direction="row"
                          alignItems="center"
                          sx={{
                            gap: "8px",
                            width: "100%",
                            justifyContent: "flex-start",
                          }}
                        >
                          {getIconComponent(childItem.icon)} {childItem.title}
                        </Stack>
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              );
            } else {
              return (
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
            }
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
            <MobileHeader getIconComponent={getIconComponent} />
          </Box>
        </Stack>
      </motion.div>
    </>
  );
};
