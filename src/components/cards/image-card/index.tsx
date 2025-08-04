import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { HeadingText } from "@/components/text/heading-text";
import { pxToRem } from "@/utils/styles";
import { Avatar, Box } from "@mui/material";

export const ImageCard = (props: any) => {
  const {
    isEven = true,
    flexDirection = isEven ? "row" : "row-reverse",
    heading = "",
    description = ``,
    mainImage = null,
    imageWidth = 569,
    imageHeight = 509,
  } = props;

  return (
    <ContainerGridLayout customStyles={{ flexDirection, alignItems: "center" }}>
      <ItemGridLayout md={6}>
        <Box sx={{ height: "100%" }}>
          <ScaleInView>
            <Avatar
              src={mainImage?.src}
              alt={heading}
              variant="square"
              sx={{
                width: { xs: "100%", md: pxToRem(imageWidth) },
                height: { xs: "auto", md: pxToRem(imageHeight) },
                maxWidth: "100%",
                objectFit: "cover",
                backgroundColor: "transparent",
                margin: "auto",
                verticalAlign: "middle",
              }}
            />
          </ScaleInView>
        </Box>
      </ItemGridLayout>
      <ItemGridLayout md={6}>
        <SlideUpInView>
          <HeadingText
            variant="h2"
            color="text.secondary"
            fontWeight="fontWeightSemiBold"
            component="span"
          >
            {heading}
            <HeadingText
              variant="h2"
              color="primary.main"
              fontWeight="fontWeightSemiBold"
            >
              {description}
            </HeadingText>
          </HeadingText>
        </SlideUpInView>
      </ItemGridLayout>
    </ContainerGridLayout>
  );
};
