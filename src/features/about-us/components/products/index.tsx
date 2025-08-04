import { Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import { p1, p2, p3, p4 } from "../../assets";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const features = [
  {
    title: "Accountant Help Squad",
    description: "AHS helps users connect and manage their accounts",
    image: p2,
    link: "accountant-help-squad",
  },
  {
    title: "Centspay",
    description:
      "Enable users to pay directly from their bank accounts — securely and without cards.",
    image: p3,
    link: "centspay",
  },
  {
    title: "Compliance & Monitoring",
    description:
      "Tools for consent management and regulatory reporting, aligned with PSD2, FCA, and open banking.",
    image: p4,
    link: "compliance-access",
  },
];

const Products = () => {
  return (
    <Box
      sx={{
        px: { xs: "10px", md: "50px" },
        mx: { xs: "20px", md: "50px", lg: "100px" },
        py: { md: 5 },
        bgcolor: "#272835",
      }}
    >
      <Box my={5}>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            mb: 2,
            color: "#9747FF",
          }}
        >
          products
        </Typography>
        <Typography
          sx={{
            maxWidth: "800px",
            fontWeight: 600,
            mb: 3,
            color: "#F6F7FF",
            fontSize: { xs: "18px", md: "40px" },
          }}
        >
          Check out our powerful tools to unlock the potential of open banking.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              borderRadius: "32.647px",
              border: "2.04px solid",
              borderColor: "var(--border-1, #3A3A47)",
              height: "100%",
            }}
          >
            <Box
              p={0}
              m={0}
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "200px", sm: "298px" },
              }}
            >
              <Image
                alt="product"
                src={p1.src}
                fill
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Box p={3}>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#F6F7FF" }}
              >
                Instant Identity & KYC via Secure Bank
              </Typography>

              <Typography variant="body2" sx={{ mb: 1.5, color: "#F6F7FF" }}>
                Verify users instantly through their bank accounts—no documents,
                no delays.
              </Typography>
              <Link href={"identity-kyc"} passHref>
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    alignContent: "center",
                    alignItems: "center",

                    color: "#F6F7FF",
                  }}
                >
                  <Typography
                    component="a"
                    target="_blank"
                    sx={{
                      color: "#9747FF",
                      textDecoration: "underline",
                      fontSize: { xs: "18px", md: "24px" },
                    }}
                    rel="noopener noreferrer"
                  >
                    Explore more about Verifications
                  </Typography>

                  <Box
                    width={36}
                    height={29}
                    sx={{
                      background: "#9747FF",
                      borderRadius: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ArrowRightAltIcon />
                  </Box>
                </Box>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            {features.map((member, index) => (
              <Grid size={{ xs: 12 }} key={index}>
                <Box
                  sx={{
                    borderRadius: 5,
                    border: "2.04px solid",
                    borderColor: "var(--border-1, #3A3A47)",

                    display: "flex",

                    minHeight: "198px",
                  }}
                >
                  <Image
                    alt="product"
                    src={member.image.src}
                    width={196}
                    height={196}
                    style={{ borderRadius: "10px" }}
                  />
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-around"}
                  >
                    <Box py={1} pl={2}>
                      <Typography
                        fontSize={"18px"}
                        fontWeight={600}
                        sx={{ color: "#F6F7FF" }}
                      >
                        {member.title}
                      </Typography>
                      <Typography
                        fontSize={"16px"}
                        color="text.secondary"
                        sx={{ color: "#F6F7FF" }}
                      >
                        {member.description}
                      </Typography>
                    </Box>
                    <Link href={member.link} passHref>
                      <Typography
                        py={1}
                        pl={2}
                        component="a"
                        target="_blank"
                        sx={{ color: "#9747FF", textDecoration: "underline" }}
                        rel="noopener noreferrer"
                      >
                        {member.link}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
