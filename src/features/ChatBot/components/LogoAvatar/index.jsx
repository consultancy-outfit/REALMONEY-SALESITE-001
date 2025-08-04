import { Avatar, Box, Typography } from "@mui/material";
import { ChatBotAgenticLogoImage } from "../../assets";

export const LogoAvatar = (props) => {
  const {
    productName,
    isWhite = false,
    width = "100%",
    height = 70,
    variant = "square",
  } = props;

  const Logo = isWhite
    ? ChatBotAgenticLogoImage.src
    : ChatBotAgenticLogoImage.src;

  return (
    <Box>
      <Avatar
        src={Logo}
        alt={"logo"}
        sx={{
          width,
          height,
          objectFit: "cover",
          backgroundColor: "transparent",
        }}
        variant={variant}
      />
      {!!productName && (
        <Typography
          component={"p"}
          sx={{
            color: "#505050",
            textAlign: "center",
            fontWeight: 500,
            marginTop: 0.8,
          }}
          className="chat-bot-font-family"
        >
          By {productName}
        </Typography>
      )}
    </Box>
  );
};
