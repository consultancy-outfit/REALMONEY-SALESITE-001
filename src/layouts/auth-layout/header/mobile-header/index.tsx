import { Box, ClickAwayListener, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { navLinksData } from "../header.data";
import { LinkButton } from "@/components/buttons/link-button";
import { APP_ROUTES } from "@/constants/routes";

export const MobileHeader = () => {
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
            position: "absolute",
            top: active ? "90px" : "-600px",
            left: "-5px",
            opacity: active ? 1 : 0,
            zIndex: 200,
            transition: "0.7s",
            backgroundColor: theme?.palette?.common?.white,
            width: "100%",
            boxShadow:
              "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
            borderRadius: 10,
            padding: "20px 0",
          }}
        >
          <Typography
            component={"ul"}
            style={{
              listStyle: "none",
              paddingLeft: 20,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {navLinksData?.map((item) => (
              <React.Fragment key={item?.title}>
                <Link
                  onClick={handleClose}
                  href={item?.path}
                  style={{
                    textDecoration: "none",
                    color:
                      pathname?.startsWith(item?.path) && item?.path !== "/"
                        ? theme?.palette?.primary?.main
                        : pathname === "/" && item?.path === "/"
                          ? theme?.palette?.primary?.main
                          : theme?.palette?.common?.text_gray,
                    fontSize: item?.path === pathname ? 18 : 16,
                    fontWeight: theme?.typography?.fontWeightMedium,
                    lineHeight: "32px",
                  }}
                >
                  {item?.title}
                </Link>
              </React.Fragment>
            ))}
          </Typography>

          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "center",
              padding: 1,
              gap: 1,
            }}
          >
            <LinkButton
              link={APP_ROUTES?.PARTNER_WITH_US}
              variant="outlined"
              color="secondary"
              customStyles={{
                borderRadius: 2,
                px: 2,
                py: 1,
                color: theme?.palette?.text?.primary,
              }}
            >
              Login
            </LinkButton>
            <LinkButton
              link={APP_ROUTES?.Get_STARTED}
              customStyles={{
                borderRadius: 2,
                px: 2,
                py: 1,
                bgcolor: theme?.palette?.text?.primary,
              }}
            >
              Get Started
            </LinkButton>
          </Box>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};
