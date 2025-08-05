import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { pxToRem } from "@/utils/styles";
import { Avatar, Box, Typography } from "@mui/material";
import { realMoneyTeam } from "./real-money-meet-team.data";

export const RealMoneyMeetTeam = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          marginY: { xs: 2, md: 4 },
          px: { xs: 2, md: 4 },
          maxWidth: pxToRem(700),
          marginInline: "auto",
        }}
      >
        <HeadingText
          variant="h3"
          color="common.white"
          fontWeight="fontWeightSemiBold"
          lineHeight={pxToRem(60)}
          letterSpacing={pxToRem(1)}
        >
          Meet the Team Behind Real Money
        </HeadingText>
        <Box>
          <SubHeadingText
            variant="subtitle2"
            fontWeight="fontWeightNormal"
            lineHeight={pxToRem(28)}
            letterSpacing={"2%"}
            color="#C0C0C0"
          >
            Visionaries, builders, and problem-solvers—dedicated to reshaping
            finance for a real-time, intelligent future.
          </SubHeadingText>
        </Box>
      </Box>
      <Box
        sx={{
          px: { xs: 3, md: 7 },
        }}
      >
        <ContainerGridLayout spacing={3}>
          {realMoneyTeam.map((item, index) => (
            <ItemGridLayout key={index} sm={6} md={4}>
              <Box
                sx={{
                  position: "relative",
                  height: pxToRem(480),
                  width: "100%",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "#ffffff",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  backdropFilter: "blur(16px)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pt: 3,
                    boxSizing: "border-box",
                    zIndex: 0,
                  }}
                >
                  <Avatar
                    src={item?.profileImage?.src}
                    alt={item?.name}
                    variant="square"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 3,
                      ...(item?.hasGrayScale
                        ? {
                            filter: "grayscale(1)",
                          }
                        : {}),
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 3,
                    zIndex: 1,
                    background: `
                  linear-gradient(180deg, rgba(181,181,181,0.2) 0%, rgba(106,106,106,0.2) 100%),
                  radial-gradient(112.61% 76.77% at 50.08% 0%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 80.49%),
                  linear-gradient(180deg, rgba(0,194,255,0) 0%, rgba(0,194,255,0.1) 100%)
                `,
                  }}
                />

                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    padding: 2,
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      ...(!item?.hasGrayScale
                        ? {
                            border: `1px solid `,
                            borderColor: "#ffffff",
                            p: 1,
                            borderRadius: 2,
                          }
                        : {}),
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontWeight: 500,
                        fontSize: { xs: 20, sm: 22, md: 24 },
                        lineHeight: 1.2,
                      }}
                    >
                      {item?.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#F5F5F5",
                        fontWeight: 400,
                        fontSize: { xs: 16, sm: 17, md: 18 },
                        lineHeight: 1.3,
                      }}
                    >
                      {item?.designation}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </ItemGridLayout>
          ))}
        </ContainerGridLayout>
      </Box>
    </Box>
  );
};
