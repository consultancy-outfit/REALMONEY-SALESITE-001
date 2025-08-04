import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomLabel = (props) => {
  const { label, required = false, marginBottom = 0.4 } = props;
  const { palette } = useTheme();
  return (
    <Typography
      sx={{
        color: "#505050",
        marginBottom: marginBottom,
        fontSize: 14,
        fontWeight: 700,
      }}
      className="chat-bot-font-family"
    >
      {label}
      {required && (
        <Typography
          color={palette?.error?.main}
          component="span"
          sx={{ lineHeight: "1" }}
        >
          {" "}
          *{" "}
        </Typography>
      )}
    </Typography>
  );
};

export default CustomLabel;
