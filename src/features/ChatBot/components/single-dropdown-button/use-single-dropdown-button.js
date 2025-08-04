import { useState } from "react";

export const useSingleDropdownButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event?.stopPropagation();
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = (event) => {
    event?.stopPropagation();
    setAnchorEl(null);
  };

  return {
    anchorEl,
    open,
    handleClick,
    handleClose,
  };
};
