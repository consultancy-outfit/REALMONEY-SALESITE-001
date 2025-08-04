// SectionPanel.tsx (or similar file)
"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";
import ContactSection from "../contect-section/contect-section";

interface SectionData {
  id: string;
  title: string;
  subtitle: string; // Add this new subtitle property
  description: string;
  features: string[];
  imageUrl?: string;
  featuresHeading?: string;
}

interface SectionPanelProps {
  sections: SectionData[];
}

const SectionPanel: React.FC<SectionPanelProps> = ({ sections }) => {
  return (
    <Box
      sx={{
        padding: { xs: 2, md: 8 },
        backgroundColor: "#ffffff",
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
        minHeight: "100vh",
      }}
    >
      {sections.map((section: SectionData) => (
        <Card
          key={section.id}
          sx={{
            marginBottom: { xs: 4, md: 8 },
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            zIndex: 1,
            overflow: "hidden",
            width: "100%",
            boxSizing: "border-box",
            borderRadius: 0,
            boxShadow: "none",
          }}
        >
          <Box sx={{ border: "1px solid #E6E6E6", borderRadius: "28px" }}>
            {section.imageUrl && (
              <SlideUpInView>
                <CardMedia
                  component="img"
                  image={section.imageUrl}
                  alt={section.title}
                  sx={{
                    width: "100%",
                    height: { xs: 200, sm: 250, md: 350 },
                    objectFit: "cover",
                  }}
                />
              </SlideUpInView>
            )}

            <CardContent
              sx={{
                padding: { xs: 2, sm: 4, md: 6 },
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <SlideSidewayInView>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                    fontWeight: "bold",
                    color: "#100F11",
                    lineHeight: 1.1,
                    marginBottom: { xs: 1, sm: 2 },
                    textAlign: "left",
                  }}
                >
                  {section.title}
                </Typography>

                {/* New Subtitle Typography */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.15rem", md: "1.125rem" },
                    fontWeight: 500, // This seems to be the style for the subtitle in the image
                    color: "#100F11",
                    marginBottom: { xs: 1, sm: 2 }, // Adjust margin as needed
                    textAlign: "left",
                  }}
                >
                  {section.subtitle}
                </Typography>

                {/* Main Description */}
                <Typography
                  variant="body2" // Changed to body2 as it's a longer text block
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                    lineHeight: 1.6,
                    color: "#100F11",
                    marginBottom: { xs: 3, sm: 4 },
                    textAlign: "justify",
                  }}
                >
                  {section.description}
                </Typography>

                {/* Features Heading - now dynamic */}
                {section.features.length > 0 && ( // Only show heading if there are features
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "1rem", sm: "0.95rem", md: "1rem" },
                      fontWeight: "bold",
                      color: "#9747FF",
                      marginTop: { xs: "18px", sm: "20px" },
                      marginBottom: { xs: 1, sm: 2 },
                      textAlign: "left",
                      textTransform: "capitalize",
                    }}
                  >
                    {section.featuresHeading || "Key Features:"}{" "}
                    {/* Dynamic heading or default */}
                  </Typography>
                )}
              </SlideSidewayInView>
              <SlideUpInView>
                <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
                  {section.features.map((feature, idx) => (
                    <Grid size={{ xs: 12, lg: 2.4 }} key={idx}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            minWidth: 6,
                            minHeight: 6,
                            borderRadius: "50%",
                            backgroundColor: "#616161",
                            marginRight: 1.5,
                            marginTop: 0.8,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: { xs: "0.8rem", sm: "0.9rem" },
                            color: "#100F11",
                            lineHeight: 1.4,
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </SlideUpInView>
            </CardContent>
          </Box>
        </Card>
      ))}
      <ContactSection
        title="Empowering Financial Innovation Through Open Banking"
        description={
          "Have a question, need a demo, or want to partner with us? We’d love to hear from you."
        }
        buttonText={"Contact us"}
        height={500}
        borderRadius={8}
      />
    </Box>
  );
};

export default SectionPanel;
