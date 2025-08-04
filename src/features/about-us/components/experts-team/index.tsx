"use client";

import { CommonCard } from "@/components/cards/common-card";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { HeadingText } from "@/components/text/heading-text";
import { Avatar, Box, Container, useTheme } from "@mui/material";
import { expertsTeamsData } from "./ExpertsTeam.data";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";

const ExpertsTeam = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box display="flex" justifyContent="center" my={10} maxWidth={900}>
        <GradientHeadingBlock
          headingStart="An expert team of professionals"
          highlightText="for you"
        />
      </Box>
      <ContainerGridLayout>
        {expertsTeamsData(theme)?.map((item) => (
          <ItemGridLayout key={item.id} lg={3} sm={6} xs={12}>
            <CommonCard height="100%" borderRadius={4}>
              <ScaleInView>
                <Avatar
                  src={item?.image?.src}
                  alt={item?.name}
                  sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: item?.bgcolor,
                    borderRadius: 6,
                  }}
                  variant="rounded"
                />
              </ScaleInView>
              <SlideUpInView>
                <Box sx={{ marginY: 2 }}>
                  <HeadingText variant="h6" fontWeight="fontWeightMedium">
                    {item?.name}
                  </HeadingText>
                </Box>
                <SubHeadingText
                  variant="subtitle2"
                  fontWeight="fontWeightNormal"
                >
                  {item?.position}
                </SubHeadingText>
              </SlideUpInView>
            </CommonCard>
          </ItemGridLayout>
        ))}
      </ContainerGridLayout>
    </Container>
  );
};

export default ExpertsTeam;
