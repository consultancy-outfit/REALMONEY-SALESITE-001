import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { Box } from "@mui/material";

export const TextCard = (props: any) => {
  const {
    isEven = true,
    flexDirection = isEven ? "row" : "row-reverse",
    heading = "",
    description = ``,
  } = props;

  return (
    <ContainerGridLayout customStyles={{ flexDirection, alignItems: "center" }}>
      <ItemGridLayout md={6}>
        <Box sx={{ height: "100%", maxWidth: "lg", margin: "auto" }}>
          <SlideUpInView>
            <HeadingText
              variant="h1"
              color="text.secondary"
              fontWeight="fontWeightMedium"
            >
              {heading}
            </HeadingText>
          </SlideUpInView>
        </Box>
      </ItemGridLayout>
      <ItemGridLayout md={6}>
        <SlideUpInView>
          <SubHeadingText fontWeight="fontWeightNormal">
            {description}
          </SubHeadingText>
        </SlideUpInView>
      </ItemGridLayout>
    </ContainerGridLayout>
  );
};
