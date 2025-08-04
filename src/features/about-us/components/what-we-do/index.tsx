import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const WhatWeDo = () => {
  const features = [
    {
      title: "Unified Bank Integration",
      items: [
        "Access bank account data with user content",
        "Aggregate balances, transactions, and account details",
        "Simplify outsourcing with instant account verification",
        "Support for FS52 and Open Banking APIs",
      ],
    },
    {
      title: "Embedded Payments",
      items: [
        "Move money faster with secure, direct bank payments",
        "Enable payout flows, refunds, and bulk transactions",
        "Built-in Strong Customer Authentication (SCA)",
        "Enable real-time payments directly from bank accounts",
      ],
    },
    {
      title: "Data Intelligence & Insights",
      items: [
        "Turn raw financial data into actionable insights",
        "Categorize transactions automatically",
        "Analyze spending patterns and behaviours",
        "Integrate financial insights into your product UI",
      ],
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: "10px", md: "50px" },
        mx: { xs: "20px", md: "50px", lg: "100px" },
        py: 8,
        bgcolor: "#272835",
        borderRadius: "30px",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "#F6F7FF",
            fontSize: { md: "40px" },
          }}
        >
          What We Do
        </Typography>

        <Typography
          sx={{
            mb: 8,
            color: "#F6F7FF",
            fontSize: { md: "24px" },
          }}
        >
          From account aggregation and transaction categorisation to identity
          verification and instant payments, our open banking toolkit is
          designed to help fintechs, lenders, accounting firms, eCommerce
          platforms, and financial service providers offer smarter, faster, and
          safer digital experiences.
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "#2E2E3E",
                  boxShadow: 3,
                  "&:hover": {
                    boxShadow: 6,
                    transition: "box-shadow 0.3s ease-in-out",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: "#A97FFF",
                      fontSize: { md: "24px" },
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <List dense>
                    {feature.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CircleIcon
                            sx={{ color: "#F6F7FF", width: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          sx={{ color: "#F6F7FF" }}
                          primary={item}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
