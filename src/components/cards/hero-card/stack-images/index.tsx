import { Box, Avatar } from "@mui/material";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

export const StackImages = (props: any) => {
  const { mainImage, stackImageTop = null, stackImageBottom = null } = props;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        minHeight: "100%",
      }}
    >
      <ScaleInView>
        <Avatar
          src={mainImage?.src}
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "transparent",
            maxWidth: "100%",
            margin: { xs: "inherit", md: "auto" },
            verticalAlign: "middle",
          }}
          alt="100"
          variant="rounded"
        />
      </ScaleInView>
      {stackImageTop === null ? null : (
        <Box
          sx={{
            position: "absolute",
            zIndex: 111,
            top: -20,
            right: 0,
          }}
        >
          <SlideUpInView>
            <Avatar
              src={stackImageTop?.src}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                objectPosition: "center",
                imageRendering: "auto",
              }}
              alt="100"
              variant="rounded"
            />
          </SlideUpInView>
        </Box>
      )}
      {stackImageTop === null ? null : (
        <Box
          sx={{
            position: "absolute",
            zIndex: 111,
            bottom: 20,
            left: -70,
          }}
        >
          <SlideUpInView>
            <Avatar
              src={stackImageBottom?.src}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                objectPosition: "center",
                imageRendering: "auto",
              }}
              alt="100"
              variant="rounded"
            />
          </SlideUpInView>
        </Box>
      )}
    </Box>
  );
};
