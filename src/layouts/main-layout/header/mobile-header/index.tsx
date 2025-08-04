"use client";
import {
  Box,
  ClickAwayListener,
  Typography,
  useTheme,
  Stack,
  MenuItem,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { APP_ROUTES } from "@/constants/routes";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavLinkItem, navLinksData } from "../header.data";

// Define LinkButtonPropsI and CustomLinkButton
interface LinkButtonPropsI {
  children: React.ReactNode;
  link: string;
  customStyles: React.CSSProperties;
  onClick?: () => void;
}

const CustomLinkButton: React.FC<LinkButtonPropsI> = ({
  children,
  link,
  customStyles,
  onClick,
}) => {
  return (
    <Link
      href={link}
      style={{
        ...customStyles,
        textDecoration: "none",
      }}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

interface MobileMenuItemWithChildrenProps {
  item: NavLinkItem;
  pathname: string | null;
  theme: ReturnType<typeof useTheme>;
  handleCloseAll: () => void;
  getIconComponent: (icon?: string | React.FC<any>) => React.ReactNode;
}

const MobileMenuItemWithChildren: React.FC<MobileMenuItemWithChildrenProps> = ({
  item,
  pathname,
  handleCloseAll,
  getIconComponent,
}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };

  const isChildActive = item.children?.some((child) =>
    pathname?.startsWith(child.path),
  );
  const isParentActive = item.path ? pathname?.startsWith(item.path) : false;
  const isActive = isChildActive || isParentActive;

  return (
    <Box>
      <ListItemButton
        onClick={handleClick}
        aria-expanded={open ? "true" : "false"}
        aria-label={`Toggle ${item.title} menu`}
        sx={{
          borderRadius: 1,
          px: 2,
          py: 1,
          justifyContent: "flex-start",
          color: isActive
            ? theme.palette.primary.main
            : theme.palette.text.primary,
          fontWeight: theme.typography.fontWeightMedium,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ flexGrow: 1, gap: "8px" }}
        >
          {getIconComponent(item.icon)}
          <ListItemText
            primary={item.title}
            primaryTypographyProps={{
              sx: {
                color: isActive
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
                fontWeight: theme.typography.fontWeightMedium,
              },
            }}
          />
        </Stack>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 2 }}>
          {item.children?.map((childItem) => (
            <React.Fragment key={childItem.title}>
              {childItem.children ? (
                <MobileMenuItemWithChildren
                  item={childItem}
                  pathname={pathname}
                  theme={theme}
                  handleCloseAll={handleCloseAll}
                  getIconComponent={getIconComponent}
                />
              ) : (
                <MenuItem
                  component={Link}
                  href={childItem.path}
                  onClick={handleCloseAll}
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
                  <Stack direction="row" alignItems="center" gap={1}>
                    {getIconComponent(childItem.icon)}
                    <Typography variant="body2">{childItem.title}</Typography>
                  </Stack>
                </MenuItem>
              )}
            </React.Fragment>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

interface MobileHeaderProps {
  getIconComponent: (icon?: string | React.FC<any>) => React.ReactNode;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  getIconComponent,
}) => {
  const [active, setActive] = useState(false);
  const handleClose = () => {
    setActive(false);
  };
  const handleOpen = () => {
    setActive(true);
  };
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box>
        <Box
          onClick={!active ? handleOpen : handleClose}
          role="button"
          aria-label="Toggle navigation menu"
          style={{
            width: 24,
            height: 24,
            borderRadius: 10,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            transition: "all 0.5s ease",
          }}
        >
          <Box
            style={{
              transition: "all 0.5s ease",
            }}
          >
            <Box
              style={{
                height: 3,
                borderRadius: 2,
                background: theme?.palette?.secondary?.main,
                margin: 5,
                transition: "all 0.55s cubic-bezier(0.075, 0.82, 0.165, 1)",
                width: 24,
                transform: active ? "translateY(3px) rotate(45deg)" : "none",
              }}
            />
            <Box
              style={{
                height: 3,
                borderRadius: 2,
                background: theme?.palette?.secondary?.main,
                margin: 5,
                transition: "all 0.55s cubic-bezier(0.075, 0.82, 0.165, 1)",
                width: 24,
                opacity: active ? 0 : 1,
              }}
            />
            <Box
              style={{
                height: 3,
                borderRadius: 2,
                background: theme?.palette?.secondary?.main,
                margin: 5,
                transition: "all 0.55s cubic-bezier(0.075, 0.82, 0.165, 1)",
                width: 24,
                transform: active ? "translateY(-13px) rotate(-45deg)" : "none",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            position: "fixed",
            top: active ? "90px" : "-600px",
            left: 0,
            right: 0,
            opacity: active ? 1 : 0,
            zIndex: 200,
            transition: "0.7s",
            backgroundColor: theme?.palette?.background.paper,
            width: "100vw",
            height: "calc(100vh - 90px)",
            overflowY: "auto",
            p: 2,
            boxShadow: theme.shadows[4],
          }}
        >
          <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
            {navLinksData.map((item) => (
              <React.Fragment key={item.title}>
                {item.children ? (
                  <MobileMenuItemWithChildren
                    item={item}
                    pathname={pathname}
                    theme={theme}
                    handleCloseAll={handleClose}
                    getIconComponent={getIconComponent}
                  />
                ) : item.path ? (
                  <MenuItem
                    component={Link}
                    href={item.path}
                    onClick={handleClose}
                    sx={{
                      color:
                        pathname === item.path
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      fontWeight:
                        pathname === item.path
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
                    <Stack direction="row" alignItems="center" gap={1}>
                      {getIconComponent(item.icon)}
                      <Typography variant="body2">{item.title}</Typography>
                    </Stack>
                  </MenuItem>
                ) : (
                  <ListItemButton
                    onClick={handleClose}
                    sx={{
                      borderRadius: 1,
                      px: 2,
                      py: 1,
                      justifyContent: "flex-start",
                      color:
                        pathname === item.path
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      fontWeight:
                        pathname === item.path
                          ? theme.typography.fontWeightBold
                          : theme.typography.fontWeightRegular,
                      "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" gap={1}>
                      {getIconComponent(item.icon)}
                      <Typography variant="body2">{item.title}</Typography>
                    </Stack>
                  </ListItemButton>
                )}
              </React.Fragment>
            ))}
            <Stack
              direction="column"
              spacing={2}
              alignItems="center"
              mt={2}
              sx={{
                "& > button": {
                  width: { xs: "100%", sm: "fit-content" },
                },
                display: { xs: "block", sm: "none" },
              }}
            >
              <CustomLinkButton
                link={APP_ROUTES?.PARTNER_WITH_US}
                customStyles={{
                  borderRadius: "999px",
                  border: "1px solid #F2F2F2",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "fit-content",
                  backgroundColor: theme?.palette?.common?.white,
                  color: theme?.palette?.text?.primary,
                }}
                onClick={handleClose}
              >
                Login
              </CustomLinkButton>
              <CustomLinkButton
                link={APP_ROUTES?.Get_STARTED}
                customStyles={{
                  borderRadius: "999px",
                  border: `1.5px solid ${theme?.palette?.primary?.main}`,
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  backgroundColor: theme?.palette?.primary?.main,
                  color: theme?.palette?.common?.white,
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "fit-content",
                }}
                onClick={handleClose}
              >
                Get Started
              </CustomLinkButton>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};
