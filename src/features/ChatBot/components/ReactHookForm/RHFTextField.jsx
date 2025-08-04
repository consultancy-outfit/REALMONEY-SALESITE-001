"use client";

import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import CustomLabel from "../CustomLabel";

export default function RHFTextField({
  name,
  label,
  required = false,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={other?.defaultValue || ""}
      render={({ field, fieldState: { error } }) => (
        <>
          {label && <CustomLabel label={label} required={required} />}
          <TextField
            {...field}
            value={field?.value || ""}
            onChange={field?.onChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px !important",
                bgcolor: "#fff",
                minHeight: 35,
              },
              "& .MuiInputBase-input": {
                p: "0px 8px",
                fontSize: 14,
              },
            }}
            fullWidth
            error={Boolean(error)}
            helperText={error?.message}
            {...other}
            label={""}
          />
        </>
      )}
    />
  );
}
