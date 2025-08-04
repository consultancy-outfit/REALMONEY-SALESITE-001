import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { Avatar, Box } from "@mui/material";
import { CommonCard } from "../common-card";
import { pxToRem } from "@/utils/styles";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

export const BulletsListCard = (props: any) => {
  const {
    isEven = true,
    flexDirection = isEven ? "row" : "row-reverse",
    mainImage = null,
    itemsList = [],
    imageWidth = 569,
    imageHeight = "100%",
    Icon = null,
  } = props;

  return (
    <Box
      sx={{
        background: "linear-gradient(146.64deg, #F3F4FF 2.74%, #FFFFFF 82.33%)",
        borderRadius: 5,
        padding: { xs: 2, md: 5 },
      }}
    >
      <CommonCard boxShadow={0} borderRadius={5}>
        <ContainerGridLayout spacing={4} customStyles={{ flexDirection }}>
          <ItemGridLayout md={6}>
            <Box sx={{ height: "100%" }}>
              <ScaleInView>
                <Avatar
                  src={mainImage?.src}
                  alt={itemsList?.[0]?.heading}
                  variant="rounded"
                  sx={{
                    width: { xs: "100%", md: pxToRem(imageWidth) },
                    height: { xs: "auto", md: pxToRem(imageHeight) },
                    maxWidth: "100%",
                    objectFit: "cover",
                    backgroundColor: "transparent",
                    margin: "auto",
                    verticalAlign: "middle",
                    display: "block",
                    fontStyle: "italic",
                  }}
                />
              </ScaleInView>
            </Box>
          </ItemGridLayout>
          <ItemGridLayout md={6}>
            <Box sx={{ height: "100%" }}>
              <SlideUpInView>
                {Icon === null ? null : (
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: "primary.main",
                      mb: 2,
                      mt: 0.5,
                    }}
                  >
                    {Icon}
                  </Avatar>
                )}
                <Box sx={{ padding: 2 }}>
                  <ul>
                    {itemsList?.map((list: any, index: number) => (
                      <li key={list?.heading + index}>
                        <SubHeadingText
                          fontWeight="fontWeightBold"
                          component="span"
                          color="text.secondary"
                        >
                          {list?.heading ? `${list?.heading} :` : ""}
                        </SubHeadingText>{" "}
                        <SubHeadingText
                          fontWeight="fontWeightNormal"
                          component="span"
                        >
                          {list?.description}
                        </SubHeadingText>
                      </li>
                    ))}
                  </ul>
                </Box>
              </SlideUpInView>
            </Box>
          </ItemGridLayout>
        </ContainerGridLayout>
      </CommonCard>
    </Box>
  );
};
