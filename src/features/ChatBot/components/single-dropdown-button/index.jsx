import { useSingleDropdownButton } from "./use-single-dropdown-button";
import { Box, Menu, MenuItem, Typography } from "@mui/material";

export const SingleDropdownButton = (props) => {
  const {
    dropdownOptions = [],
    dropdownName = "Actions",
    menuSxProps,
    buttonLabel = `action`,
    handleSingleClick,
    data = {},
  } = props;

  const { anchorEl, open, handleClick, handleClose } =
    useSingleDropdownButton();

  return (
    <>
      <Box
        className="small"
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="secondary"
        aria-label={buttonLabel}
        sx={{ textTransform: "capitalize", cursor: "pointer" }}
      >
        {dropdownName}
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          mt: 1,
          "& .MuiList-root": {
            py: 0,
            bgcolor: "#F9F9F9",
          },
          "& .MuiPaper-root": {
            borderRadius: 4,
          },
          ...menuSxProps,
        }}
      >
        {!!dropdownOptions?.length &&
          dropdownOptions?.map((singleOption) => (
            <MenuItem
              key={singleOption?.id}
              disabled={singleOption?.disabled}
              onClick={(event) => {
                event?.stopPropagation();
                handleSingleClick?.(handleClose, singleOption?.title, data);
              }}
              sx={{
                cursor: "pointer",
                "&.MuiMenuItem-root": {
                  px: 2,
                  py: 1,
                },
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                sx={singleOption?.titleSx}
                className="chat-bot-font-family"
              >
                {singleOption?.title}
              </Typography>
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};
