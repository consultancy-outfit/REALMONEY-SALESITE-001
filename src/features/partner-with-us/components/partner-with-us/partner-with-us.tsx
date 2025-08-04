import { ListGrid } from "@/components/grids/list-grid";
import { Box, Card, CardContent } from "@mui/material";
import React from "react";
import { partnerOptions } from "./partner-with-us-data";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import Image from "next/image";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";

const PartnerWithUs = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Box mb={8}>
        <GradientHeadingBlock
          headingStart="Who Can"
          highlightText="Partner"
          headingEnd="With Us"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "90%", md: "80%", lg: "73%" },
          margin: "0 auto",
        }}
      >
        <ListGrid
          list={partnerOptions}
          sm={6}
          lg={4}
          render={(option: any) => (
            <HoverScaleUpDown>
              <Card
                sx={{
                  backgroundColor: option.bgColor,
                  borderRadius: "24px",
                  height: { xs: "100%", sm: "560px", lg: "550px", xl: "466px" },
                  border: option.border || "none",
                  maxWidth: 416,
                  margin: "0 auto",
                }}
                key={option?._id}
              >
                <CardContent
                  sx={{ padding: { xs: "20px", sm: "30px", xl: "40px" } }}
                >
                  <ScaleInView>
                    <Image
                      src={option?.icon}
                      alt={option?.alt || "Partner option icon"}
                      style={{ marginBottom: "60px" }}
                    />
                  </ScaleInView>
                  <HeadingText variant="h5" fontWeight="fontWeightMedium">
                    {option.title}
                  </HeadingText>
                  <SubHeadingText
                    variant="subtitle2"
                    fontWeight="fontWeightNormal"
                    marginBottom={2}
                    marginTop={3}
                  >
                    {option.description}
                  </SubHeadingText>
                </CardContent>
              </Card>
            </HoverScaleUpDown>
          )}
        />
      </Box>
    </Box>
  );
};

export default PartnerWithUs;
