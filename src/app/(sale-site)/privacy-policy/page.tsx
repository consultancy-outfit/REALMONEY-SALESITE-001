import { PrivacyPolicyImage } from "@/assets/images/features/home";
import { Stack } from "@mui/material";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <Stack alignItems="center">
      <Image
        src={PrivacyPolicyImage}
        alt="Home"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Stack>
  );
}
