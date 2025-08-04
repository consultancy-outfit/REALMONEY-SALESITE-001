import { Button, Grid, Stack, Typography } from "@mui/material";
import { FrictionlessOnboardingImage, SmarterlendingImage } from "../../assets";
import Image from "next/image";

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
    <Stack sx={{ color: "#03020C" }} alignItems="center">
      <Stack sx={{ width: { lg: "70%", xs: "100%" } }}>
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
        <Grid container spacing={2}>
          {data?.map((items) => (
            <Grid size={{ md: 6, xs: 12 }} key={items?.id}>
              <Stack spacing={2}>
                <Stack>
                  <Image src={items?.image} alt={items?.heading} />
                </Stack>
                <Typography
                  color="#fff"
                  fontFamily="Red Hat Display"
                  fontSize="1.25rem"
                  fontWeight={500}
                  textAlign="left"
                >
                  {items?.heading}
                </Typography>
                <Typography
                  color="#fff"
                  fontFamily="Red Hat Display"
                  fontSize="1rem"
                  sx={{ opacity: "70%" }}
                  textAlign="left"
                >
                  {items?.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default UseCasesHome;
