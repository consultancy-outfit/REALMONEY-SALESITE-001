import { TermsImage } from "@/assets/images/features/home";
import { Stack } from "@mui/material";
import Image from "next/image";

export default function TermsAndConditionsPolicy() {
  return (
    <Stack alignItems="center">
      <Image
        src={TermsImage}
        alt="Home"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Stack>
  );
}
