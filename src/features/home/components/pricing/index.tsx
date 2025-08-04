"use client";

import { ListGrid } from "@/components/grids/list-grid";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { CommonCard } from "@/components/cards/common-card";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { CommonButton } from "@/components/buttons/common-button";
import { HoverScaleUpDown } from "@/components/animations/hover-scale-up-down";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { pricingPlans } from "./Pricing.data";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";

const Pricing = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 10,
        }}
      >
        <GradientHeadingBlock
          headingStart="Choose a pricing plan best"
          highlightText="suited for you"
          containerSx={{
            minHeight: "400PX",
            paddingTop: "50px",
            width: { xs: "90%", md: "837px" },
            textAlign: "center",
            margin: "0 auto",
          }}
        />
      </Box>
      <ListGrid
        list={pricingPlans}
        sm={12}
        md={6}
        lg={4}
        render={(plan: any) => (
          <ScaleInView>
            <HoverScaleUpDown>
              <CommonCard
                backgroundColor={plan.color}
                borderRadius="30px"
                height="100%"
                width="100%"
                customStyles={{
                  maxWidth: { xs: "100%", md: "416px" },
                  margin: "0 auto",
                }}
                key={plan?._id}
              >
                <Box>
                  <Box minHeight="150px">
                    <SubHeadingText
                      fontWeight="fontWeightSemiBold"
                      variant="subtitle1"
                      marginBottom={3}
                    >
                      {plan.title}
                    </SubHeadingText>
                    <SubHeadingText
                      fontWeight="fontWeightNormal"
                      variant="subtitle2"
                      marginBottom={2}
                    >
                      {plan.description}
                    </SubHeadingText>
                  </Box>

                  <Divider
                    sx={{
                      my: 2,
                      borderColor: "text.primary",
                    }}
                  />

                  <List sx={{ minHeight: "600px" }}>
                    {plan.features.map((feature: string, i: number) => (
                      <ListItem key={i} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircleIcon fontSize="medium" color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          sx={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "text.primary",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Box mb={3}>
                    <CommonButton
                      variant="contained"
                      color="primary"
                      customStyles={{
                        borderRadius: "40px",
                        background: "#2F2F2F",
                      }}
                    >
                      {plan.buttonTitle}
                    </CommonButton>
                  </Box>
                </Box>
              </CommonCard>
            </HoverScaleUpDown>
          </ScaleInView>
        )}
      />
    </Container>
  );
};

export default Pricing;
