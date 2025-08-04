"use client";
import { Box, Typography } from "@mui/material";
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
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      gap={8}
      p={2}
      my={5}
    >
      {cardData.map((item: any) => (
        <Card sx={{ maxWidth: 420, bgcolor:'black' }} key={item.id}>
          <SlideUpInView>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography fontSize={"22px"} fontWeight={600} color="white">
                  {item.heading}
                </Typography>
                <Typography fontSize={"16px"} fontWeight={400} color="white">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </SlideUpInView>
          <CardActions>
            <ScaleInView>
              <LinkButton
                link={item.readMoreUrl}
                customStyles={{
                  borderRadius: "5px",
                  border: `1.5px solid ${'rgba(108, 1, 255, 1)'}`,
                  color:'rgba(108, 1, 255, 1)',
                  px: "24px",
                  py: "8px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "fit-content",
                }}
                endIcon={<ArrowForwardIcon />}
                variant="outlined"
              >
                Read more
              </LinkButton>
            </ScaleInView>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
