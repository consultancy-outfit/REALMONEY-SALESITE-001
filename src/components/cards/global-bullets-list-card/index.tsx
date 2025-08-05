import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { Avatar, Box } from "@mui/material";
import { pxToRem } from "@/utils/styles";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { HeadingText } from "@/components/text/heading-text";

export const GlobalBulletsListCard = (props: any) => {
  const {
    isEven = true,
    flexDirection = isEven ? "row" : "row-reverse",
    mainImage = null,
    itemsList = [],
    imageWidth = 569,
    imageHeight = "100%",
    Icon = null,
    iconText,
    description,
    heading,
  } = props;

  return (
    <Box
    // sx={{
    //   background: "linear-gradient(146.64deg, #F3F4FF 2.74%, #FFFFFF 82.33%)",
    //   borderRadius: 5,
    //   padding: { xs: 2, md: 5 },
    // }}
    >
      <ContainerGridLayout
        spacing={4}
        customStyles={{ flexDirection, alignItems: "center" }}
      >
        <ItemGridLayout md={6}>
          <Box sx={{ height: "100%" }}>
            <ScaleInView>
              <Avatar
                src={mainImage?.src}
                alt={heading}
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
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Avatar
                    sx={{
                      width: 44,
                      height: 44,
                      backgroundColor: "#00C2FF",
                    }}
                    variant="rounded"
                  >
                    {Icon}
                  </Avatar>
                  <SubHeadingText
                    color="#00C2FF"
                    fontWeight="fontWeightNormal"
                    component="span"
                    lineHeight={pxToRem(25)}
                    letterSpacing={-pxToRem(0.18)}
                    customStyles={{ fontSize: pxToRem(18) }}
                  >
                    {iconText}
                  </SubHeadingText>
                </Box>
              )}
              <Box sx={{ marginY: 2 }}>
                <HeadingText
                  color="common.white"
                  fontWeight="fontWeightSemiBold"
                  lineHeight={pxToRem(60)}
                  letterSpacing={pxToRem(1)}
                  customStyles={{ fontSize: pxToRem(48) }}
                >
                  {heading}
                </HeadingText>
              </Box>
              {description && (
                <Box>
                  <SubHeadingText
                    fontWeight="fontWeightNormal"
                    lineHeight={pxToRem(28)}
                    letterSpacing={"2%"}
                    color="#C0C0C0"
                    customStyles={{ fontSize: pxToRem(18) }}
                  >
                    {description}
                  </SubHeadingText>
                </Box>
              )}
              <Box sx={{ padding: 2 }}>
                <ul>
                  {itemsList?.map((list: any, index: number) => (
                    <li key={list?.description + index}>
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
                        lineHeight={pxToRem(28)}
                        letterSpacing={"2%"}
                        color="#C0C0C0"
                        customStyles={{ fontSize: pxToRem(18) }}
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
    </Box>
  );
};
