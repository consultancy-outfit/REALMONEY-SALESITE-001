import { Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  CreditIcon,
  CryptoIcon,
  FinancialIcon,
  GoldIcon,
  InvestmentIcon,
  SavingIcon,
} from "../../assets";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";

const WhyChooseRealMoney = () => {
  const data = [
    {
      id: 1,
      image: FinancialIcon,
      heading: "Financial",
      description:
        "Get access to reliable tools for seamless financial planning and real-time transaction monitoring.",
    },
    {
      id: 2,
      image: InvestmentIcon,
      heading: "Investment",
      description:
        "Make confident decisions with portfolio tracking, forecasting tools, and advisory integrations.",
    },
    {
      id: 3,
      image: SavingIcon,
      heading: "Saving",
      description:
        "Encourage smart savings habits with personalised goals, recurring plans, and performance insights.",
    },
    {
      id: 4,
      image: CryptoIcon,
      heading: "Crypto",
      description:
        "Manage digital assets securely with integrated wallet tracking and crypto analytics.",
    },
    {
      id: 5,
      image: CreditIcon,
      heading: "Credit",
      description:
        "Credit Streamline lending workflows with automated checks, eligibility insights, and smart approvals.",
    },
    {
      id: 6,
      image: GoldIcon,
      heading: "Gold",
      description:
        "Gold Digitally invest in gold with live pricing, instant transactions, and secure storage options.",
    },
  ];
  return (
    <SlideSidewayInView initialX={50}>
      <Stack
        sx={{ color: "#03020C" }}
        alignItems="center"
        px={{ lg: 0, xs: 3 }}
      >
        <Stack sx={{ width: { lg: "70%", xs: "100%" } }} spacing={2}>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontWeight={700}
            fontSize={{ md: "3rem", xs: "2.5rem" }}
          >
            Why Choose RealMoney Services?
            <Typography
              color="#fff"
              fontFamily="Red Hat Display"
              fontWeight={700}
              fontSize="1.5rem"
              sx={{ opacity: "70%" }}
              component={"p"}
            >
              Built for smarter money movement and management
            </Typography>
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Red Hat Display"
            fontSize="1.125rem"
            sx={{ opacity: "70%" }}
          >
            {`Empowering fintech innovators, enterprises, and startups with reliable
          financial solutions that deliver performance, build trust, and drive
          growth. Whether you're looking to launch, scale, or optimise, our
          tailored offerings have you covered.`}
          </Typography>
          <Grid container spacing={2}>
            {data?.map((items) => (
              <Grid size={{ xl: 4, md: 6, xs: 12 }} key={items?.id}>
                <HoverScaleUpDown scale={1.01}>
                  <Card
                    sx={{
                      backgroundColor: "#151515",
                      p: 2,
                      borderRadius: 5,
                      height: "8rem",
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Image src={items?.image} alt={items?.heading} />
                      <Typography
                        color="#fff"
                        fontSize="1.125rem"
                        fontWeight="bold"
                        textAlign="left"
                      >
                        {items?.heading}
                        <Typography
                          component={"p"}
                          color="#8D8D8D"
                          fontSize="1rem"
                          textAlign="left"
                        >
                          {items?.description}
                        </Typography>
                      </Typography>
                    </Stack>
                  </Card>
                </HoverScaleUpDown>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </SlideSidewayInView>
  );
};

export default WhyChooseRealMoney;
