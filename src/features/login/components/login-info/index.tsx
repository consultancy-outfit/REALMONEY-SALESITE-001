import { Box } from "@mui/material";
import { LoginInfoImg } from "../../assets";
import { CustomText } from "@/components/text/custom-text";

const LoginInfo = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${LoginInfoImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { md: "100%", xs: "30vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <CustomText
        fontWeight="fontWeightMedium"
        customStyles={{
          fontSize: { md: 32, sm: 24, xs: 20 },
          color: "common.white",
        }}
      >
        Log in to manage your financial world.
        <br />
        Simple, secure, and always in control.
      </CustomText>
    </Box>
  );
};

export default LoginInfo;
