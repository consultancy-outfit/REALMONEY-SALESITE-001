import { useState, Fragment, useCallback } from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Checkbox, Chip, Paper, Typography, useTheme } from "@mui/material";
import { Search } from "@mui/icons-material";
import CustomLabel from "../CustomLabel";
import axios from "axios";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function RHFAutocompleteAsync(props) {
  const {
    name,
    apiUrl,
    queryKey = "search",
    debounceTime = 500,
    getOptionLabel = (option) => option?.name,
    multiple = false,
    variant = "outlined",
    EndIcon,
    endIconClick,
    placeholder,
    noOptionsCase = "Nothing in the List",
    externalParams = {},
    isOptionEqualToValue = (option, newValue) => option?._id === newValue?._id,
    renderOption,
    required,
    endIconSx,
    onBlurHandler,
    onChangeHandler,
    ...other
  } = props;
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchOptions = useCallback(
    async (query) => {
      setIsLoading(true);
      setIsFetching(true);
      try {
        const response = await axios.get(apiUrl, {
          params: {
            [queryKey]: query?.length ? query : undefined,
            ...externalParams,
          },
        });
        setOptions(response.data ?? []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
        setIsFetching(false);
      }
    },
    [apiUrl, queryKey, externalParams],
  );

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  const triggerDebounce = debounce((newInputValue) => {
    fetchOptions(newInputValue);
  }, debounceTime);

  const onChanged = (e, newValue, onChange) => {
    onChange(newValue);
    onChangeHandler?.(e, newValue);
  };

  const theme = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={(form) => {
        return (
          <Autocomplete
            {...form?.field}
            onBlur={() => {
              onBlurHandler?.();
              form?.field?.onBlur?.();
            }}
            multiple={multiple}
            limitTags={2}
            id={name}
            open={open}
            autoComplete
            includeInputInList
            noOptionsText={noOptionsCase}
            options={isLoading || isFetching ? [] : options}
            disableCloseOnSelect
            {...other}
            onOpen={() => {
              setOpen(true);
              fetchOptions();
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={isOptionEqualToValue}
            getOptionLabel={getOptionLabel}
            loading={isLoading || isFetching}
            onChange={(e, newValue) => {
              onChanged(e, newValue, form?.field?.onChange);
              if (!multiple) setOpen(false);
            }}
            slot={{
              Paper: (props) => (
                <Paper
                  {...props}
                  sx={{
                    backgroundColor: theme?.palette?.common?.white,
                    border: `1px solid ${theme?.palette?.custom?.off_white_three}`,
                    borderRadius: 1,
                    boxShadow: 1,
                    color: "grey.600",
                  }}
                >
                  {props?.children}
                </Paper>
              ),
            }}
            onInputChange={(event, newInputValue) => {
              triggerDebounce?.cancel();
              triggerDebounce(newInputValue);
            }}
            filterOptions={(x) => x}
            renderOption={(props, option, { selected }) => {
              return (
                <li {...props} key={option?._id ?? option?.id}>
                  {multiple && (
                    <Checkbox
                      key={option?._id ?? option?.id}
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                  )}
                  {renderOption ? renderOption(option) : getOptionLabel(option)}
                </li>
              );
            }}
            renderTags={(tagValue, getTagProps) => {
              return tagValue?.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={index ?? option?.id}
                  label={getOptionLabel(option)}
                />
              ));
            }}
            renderInput={(params) => (
              <Fragment>
                {other?.label && (
                  <label htmlFor={name}>
                    <CustomLabel label={other?.label} required={required} />
                  </label>
                )}
                <TextField
                  {...params}
                  id={name}
                  label={""}
                  placeholder={placeholder}
                  error={Boolean(form?.fieldState?.error)}
                  helperText={
                    <Typography
                      component={"span"}
                      sx={{ display: "block", mt: -1, ml: -1 }}
                    >
                      {form?.fieldState?.error?.message}
                    </Typography>
                  }
                  variant={variant}
                  slotProps={{
                    input: {
                      ...params?.InputProps,
                      endAdornment: (
                        <Fragment>
                          {isLoading || isFetching ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : (
                            <Search sx={{ color: "inherit" }} />
                          )}
                          {EndIcon && (
                            <EndIcon
                              onClick={() => endIconClick?.()}
                              sx={{ cursor: "pointer", ...endIconSx }}
                            />
                          )}
                          {params?.InputProps?.endAdornment}
                        </Fragment>
                      ),
                    },
                  }}
                />
              </Fragment>
            )}
          />
        );
      }}
    />
  );
}
