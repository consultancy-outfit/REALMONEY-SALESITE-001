"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { cardData } from "./UseCaseCards.data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LinkButton } from "@/components/buttons/link-button";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

export const UseCaseCards = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      gap={8}
      p={2}
      m={2}
    >
      {cardData.map((item: any) => (
        <Card sx={{ maxWidth: 420, borderRadius: 3 }} key={item.id}>
          <SlideUpInView>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography fontSize={"22px"} fontWeight={600} color="black">
                  {item.heading}
                </Typography>
                <Typography fontSize={"16px"} fontWeight={400} color="grey">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </SlideUpInView>
          <CardActions>
            <ScaleInView>
              <LinkButton
                link={item.exploreUrl}
                customStyles={{
                  borderRadius: "999px",
                  border: `1.5px solid ${theme?.palette?.primary?.main}`,
                  px: "24px",
                  py: "8px",
                  bgcolor: theme?.palette?.primary?.main,
                  color: theme?.palette?.common?.white,
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "fit-content",
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Explore
              </LinkButton>
            </ScaleInView>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
