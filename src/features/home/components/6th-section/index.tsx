import { IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import {
  CEOImage,
  leftArrowIcon,
  RightArrowIcon,
  VectorIcon,
} from "../../assets";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";

const TestimonialSectionHome = () => {
  const [index, setIndex] = useState(0);
  const data = [
    {
      id: 1,
      image: CEOImage,
      comments:
        "“Integrating their Open Banking API was a game-changer for us.Seamless, compliant, and incredibly reliable.”",
      name: "James W.",
      role: "CTO",
    },
    {
      id: 2,
      image: CEOImage,
      comments:
        "“Integrating their Open Banking API was a game-changer for us.Seamless, compliant, and incredibly reliable.”",
      name: "Usman Saeed",
      role: "CEO",
    },
  ];
  return (
    <ScaleInView initialY={50}>
      <Stack
        sx={{ color: "#03020C" }}
        alignItems="center"
        px={{ lg: 0, xs: 3 }}
      >
        <Stack sx={{ width: { lg: "70%", xs: "100%" } }} spacing={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              color="#fff"
              fontFamily="Red Hat Display"
              fontWeight={700}
              fontSize={{ md: "3rem", xs: "2.5rem" }}
            >
              Testimonial
            </Typography>
            <Stack direction="row" alignItems="center">
              <HoverScaleUpDown scale={1.09}>
                <IconButton
                  onClick={() => {
                    setIndex(index - 1);
                  }}
                  disabled={index === 0}
                >
                  <Image src={leftArrowIcon} alt="" />
                </IconButton>
              </HoverScaleUpDown>
              <HoverScaleUpDown scale={1.09}>

              <IconButton
                onClick={() => {
                  setIndex(index + 1);
                }}
                disabled={index === data?.length - 1}
              >
                <Image src={RightArrowIcon} alt="" />
              </IconButton>
              </HoverScaleUpDown>
            </Stack>
          </Stack>
          <Stack direction={{ lg: "row", xs: "column" }} spacing={3}>
            <Stack m="auto">
              <Image src={data[index].image} alt="CEO Image" />
            </Stack>
            <Stack>
              <Typography
                color="#fff"
                fontFamily="Red Hat Display"
                fontWeight={500}
                fontSize="2.25rem"
                textAlign="left"
              >
                {data[index].comments}
              </Typography>
              <Stack
                mt="auto"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  color="#fff"
                  fontFamily="Red Hat Display"
                  fontWeight={700}
                  fontSize="1.25rem"
                  textAlign="left"
                >
                  {data[index].name}
                  <Typography
                    color="#fff"
                    fontFamily="Red Hat Display"
                    fontSize="1rem"
                    sx={{ opacity: "70%" }}
                    textAlign="left"
                  >
                    {data[index].role}
                  </Typography>
                </Typography>
                <Stack>
                  <Image
                    src={VectorIcon}
                    alt="Vector Icon"
                    style={{ opacity: "20%", width: "4rem" }}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ScaleInView>
  );
};

export default TestimonialSectionHome;
