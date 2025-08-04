import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FrictionlessOnboardingImage, SmarterlendingImage } from "../../assets";

const UseCasesHome = () => {
  const data = [
    {
      id: 1,
      image: SmarterlendingImage,
      heading: "Smarter Lending with Real-Time Bank Insights",
      description:
        "A digital lending platform wants to enhance its underwriting model to serve customers with limited credit histories.",
    },
    {
      id: 2,
      image: FrictionlessOnboardingImage,
      heading: "Frictionless Onboarding for Fintech Apps",
      description:
        "A growing fintech app seeks to streamline its onboarding and KYC process while meeting UK regulatory standards.",
    },
  ];
  return (
    <Stack sx={{ color: "#03020C" }} alignItems="center" px={{ lg: 0, xs: 3 }}>
      <Stack sx={{ width: { lg: "70%", xs: "100%" } }} spacing={4}>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            color="#fff"
            fontWeight={"bold"}
            fontSize={"3rem"}
            fontFamily="Red Hat Display"
          >
            Use Cases
          </Typography>
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#272727",
              p: 2,
              borderRadius: "2.5rem",
            }}
          >
            View More
          </Button>
        </Stack>
        <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
          {data?.map((items) => (
            <Stack key={items?.id}>
              <Stack spacing={{ md: 2, xs: 1 }}>
                <Stack>
                  <Image
                    src={items?.image}
                    alt={items?.heading}
                    style={{ width: "100%" }}
                  />
                </Stack>
                <Typography
                  color="#fff"
                  fontFamily="Red Hat Display"
                  fontSize="1.25rem"
                  fontWeight={500}
                  textAlign={{ md: "left", xs: "center" }}
                >
                  {items?.heading}
                </Typography>
                <Typography
                  color="#fff"
                  fontFamily="Red Hat Display"
                  fontSize="1rem"
                  sx={{ opacity: "70%" }}
                  textAlign={{ md: "left", xs: "center" }}
                >
                  {items?.description}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UseCasesHome;
