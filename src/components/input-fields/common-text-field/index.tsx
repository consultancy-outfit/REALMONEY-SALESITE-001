"use client";
import { InputAdornment, TextField } from "@mui/material";
import FieldLabel from "../field-label";

export const CommonTextField = (props: any) => {
  const {
    label = "",
    variant = "outlined",
    size = "small",
    error = false,
    helperText = "",
    onBlur,
    onChange,
    value,
    fullWidth = true,
    startIcon = undefined,
    endIcon = undefined,
    placeholder,
    backgroundColor = "transparent",
    borderRadius = 3,
    border = "1px solid",
    color = "common.white",
    borderColor = "grey.600",
    name,
    ref,
    id = name,
    required = false,
    labelColor = "grey.600",
    ...other
  } = props;

  return (
    <>
      {label && (
        <label htmlFor={name}>
          <FieldLabel label={label} required={required} color={labelColor} />
        </label>
      )}
      <TextField
        label={""}
        variant={variant}
        size={size}
        error={error}
        value={value || ""}
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        fullWidth={fullWidth}
        placeholder={placeholder}
        helperText={helperText}
        slotProps={{
          input: {
            startAdornment: startIcon ? (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ) : undefined,
            endAdornment: endIcon ? (
              <InputAdornment position="end">{endIcon}</InputAdornment>
            ) : undefined,
          },
        }}
        {...other}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor,
            borderRadius,
            color,
          },
          "& fieldset": {
            border,
            borderColor,
            borderRadius,
          },
        }}
      />
    </>
  );
};

export default CommonTextField;
