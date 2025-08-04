import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { team, team2, team3, team4, team5, team6 } from "../../assets";
import Image from "next/image";

const teamMembers = [
  {
    name: "Allison Couse",
    title: "Compliance & Risk Manager",
    image: team,
  },
  {
    name: "Terry Calzoni",
    title: "Lead Software Engineer",
    image: team2,
  },
  {
    name: "Cristofer Vetrovs",
    title: "Head of Product",
    image: team3,
  },
  {
    name: "Maria Stanton",
    title: "Customer Success Manager",
    image: team4,
  },
  {
    name: "Adison Vetrovs",
    title: "Partnerships & Business Development Manager",
    image: team5,
  },
  {
    name: "Corey Lubin",
    title: "Marketing & Growth Lead",
    image: team6,
  },
];

const OurLeadership = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography
          fontSize={isMobile ? "24px" : isTablet ? "32px" : "40px"}
          fontWeight={700}
          gutterBottom
        >
          Our Leadership
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="md"
          mx="auto"
        >
          Our success is built on a team of passionate experts committed to
          transforming the future of financial connectivity. From engineering to
          compliance, each member plays a vital role in delivering secure,
          reliable, and user-focused open banking solutions.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <Box
              sx={{
                borderRadius: 3,
                backgroundColor: "#f9f9f9",
                display: "flex",
                minHeight: "198px",
              }}
            >
              <Image
                alt={member.name}
                src={member.image.src}
                width={196}
                height={196}
                style={{
                  borderRadius: "10px",
                }}
              />

              <Box py={1} pl={2}>
                <Typography fontSize={"18px"} fontWeight={600}>
                  {member.name}
                </Typography>
                <Typography fontSize={"16px"} color="text.secondary">
                  {member.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurLeadership;
