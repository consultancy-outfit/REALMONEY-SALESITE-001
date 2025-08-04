import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Binance } from "../../assets";
import { Coingecko } from "../../assets";
import { FaGlobalConsulting } from "../../assets";
import { GeckoTerminal } from "../../assets";
import { Pancake } from "../../assets";

const TRUSTED_BY = [
  Coingecko,
  Pancake,
  FaGlobalConsulting,
  GeckoTerminal,
  Binance,
];

const TrustedBy = () => {
  return (
    <Box
      sx={{
        px: { xs: "10px", md: "50px" },
        mx: { xs: "20px", md: "50px", lg: "100px" },
        py: { md: 8 },
      }}
    >
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 4 }}>
          Trusted by
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ maxWidth: 1500, mx: "auto" }}
        >
          {TRUSTED_BY.map((src, index) => (
            <Grid
              key={index}
              size={{ xs: 6, sm: 4, md: 2 }}
              sx={{
                bgcolor: "#f6f4ff",
                p: 2,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 100,
                minWidth: "400px",
              }}
            >
              <Box>
                <Image
                  src={src}
                  alt={`logo-${index}`}
                  width={300}
                  height={60}
                  style={{ objectFit: "contain", marginBottom: 8 }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TrustedBy;
