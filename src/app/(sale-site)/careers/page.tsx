import { CareersImage } from "@/assets/images/features/home";
import { Stack } from "@mui/material";
import Image from "next/image";

export default function Careers() {
  return (
    <Stack alignItems="center">
      <Image
        src={CareersImage}
        alt="Home"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Stack>
  );
}
