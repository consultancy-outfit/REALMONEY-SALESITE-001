import { ListGrid } from "@/components/grids/list-grid";
import { Box, Typography } from "@mui/material";
import React from "react";
import { featureList } from "./feature-list-data";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import { HeadingText } from "@/components/text/heading-text";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";

const FeatureList = () => {
  return (
    <Box pb={8}>
      <Box mb={8} pt={8}>
        <GradientHeadingBlock
          headingStart="All"
          highlightText="-in-one identity verification"
          headingEnd="solution to connect, comply, and grow securely"
        />
      </Box>

      <ListGrid
        list={featureList}
        sm={12}
        md={6}
        lg={4}
        render={(item: any) => (
          <Box
            textAlign="center"
            sx={{ width: { xs: "100%", md: "370px" } }}
            key={item?._id}
          >
            <HeadingText fontWeight="fontWeightBold" color="#7A5AF8">
              {item.title}
            </HeadingText>
            <SlideSidewayInView>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 1 }}>
                {item.subtitle}{" "}
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: 400 }}
                >
                  {item.description}
                </Typography>
              </Typography>
            </SlideSidewayInView>
          </Box>
        )}
      />
    </Box>
  );
};

export default FeatureList;
