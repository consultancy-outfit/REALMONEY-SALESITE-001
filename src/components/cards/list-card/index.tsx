import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { HeadingText } from "@/components/text/heading-text";
import { FiberManualRecord } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { CommonCard } from "../common-card";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

export const ListCard = (props: any) => {
  const {
    isEven = true,
    flexDirection = isEven ? "row" : "row-reverse",
    heading = "",
    description = ``,
    itemsLists = [],
    mainImage = null,
  } = props;

  return (
    <CommonCard boxShadow={0} borderRadius={8}>
      <ContainerGridLayout
        customStyles={{ flexDirection, alignItems: "center" }}
      >
        <ItemGridLayout md={6}>
          <ScaleInView>
            <Avatar
              src={mainImage?.src}
              alt={heading}
              variant="square"
              sx={{
                padding: { xs: 2, md: 3 },
                // width: { xs: "100%", md: pxToRem(600) },
                // height: { xs: "auto", md: pxToRem(500) },
                width: "100%",
                height: "auto",
                margin: "auto",
                maxWidth: "100%",
                objectFit: "cover",
                backgroundColor: "transparent",
                verticalAlign: "middle",
                display: "block",
                fontStyle: "italic",
              }}
            />
          </ScaleInView>
        </ItemGridLayout>
        <ItemGridLayout md={6}>
          <Box sx={{ padding: 2 }}>
            <SlideUpInView>
              <HeadingText
                variant="h2"
                color="text.secondary"
                fontWeight="fontWeightSemiBold"
              >
                {heading}
              </HeadingText>
              <Box sx={{ marginY: 2 }}>
                <SubHeadingText fontWeight="fontWeightNormal">
                  {description}
                </SubHeadingText>
              </Box>
              {itemsLists?.map((list: any) => (
                <Box
                  key={list?.text}
                  sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 20,
                        height: 20,
                        backgroundColor: "primary.light",
                      }}
                    >
                      <FiberManualRecord
                        sx={{ fontSize: ".6rem", color: "text.primary" }}
                      />
                    </Avatar>
                  </Box>
                  <SubHeadingText fontWeight="fontWeightNormal">
                    {list?.text}
                  </SubHeadingText>
                </Box>
              ))}
            </SlideUpInView>
          </Box>
        </ItemGridLayout>
      </ContainerGridLayout>
    </CommonCard>
  );
};
