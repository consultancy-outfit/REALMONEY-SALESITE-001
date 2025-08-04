import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import { pxToRem } from "@/utils/styles";
import { Box } from "@mui/material";
import { Fragment } from "react";
import { points } from "./OurValues.data";
import { LinkButton } from "@/components/buttons/link-button";
import { APP_ROUTES } from "@/constants/routes";

const OurValues = () => {
  return (
    <Box sx={{ marginY: 6, textAlign: "center" }}>
      <SlideUpInView>
        <Box sx={{ marginY: 2 }}>
          <GradientHeadingBlock
            headingStart=""
            highlightText="Our"
            headingEnd="Values"
          />
        </Box>
        <ul
          style={{
            marginTop: "0px",
            marginBottom: "0px",
            listStyle: "none",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {points?.map((point: any) => (
            <Fragment key={point?.heading ?? point?.title ?? point}>
              <li
                style={{
                  marginTop: pxToRem(16),
                  marginBottom: pxToRem(16),
                  fontSize: "18px",
                  fontWeight: 400,
                }}
              >
                <b>{point?.heading}</b> {point?.title ?? point}
              </li>
            </Fragment>
          ))}
        </ul>
      </SlideUpInView>
      <LinkButton
        customStyles={{ bgcolor: "text.primary", borderRadius: "10px", mt: 5 }}
        link={APP_ROUTES?.CONTACT_US}
      >
        Join Our Team
      </LinkButton>
    </Box>
  );
};

export default OurValues;
