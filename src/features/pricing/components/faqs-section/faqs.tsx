import { Box } from "@mui/material";
import React from "react";
import { faqs } from "./faqs-data";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import { HeadingText } from "@/components/text/heading-text";
import { BodyText } from "@/components/text/body-text";
import SlideSidewayInView from "@/components/animations/animation-scroll/slide-sideway-in-view";

const Faqs = () => {
  return (
    <Box sx={{ background: "white", marginBottom: "40px" }}>
      <Box sx={{ p: 4, textAlign: "center" }}>
        <GradientHeadingBlock
          headingStart="Frequently Asked"
          highlightText="Questions"
        />
      </Box>

      {/* FAQ List */}
      {faqs.map((faq) => (
        <Box
          key={faq._id}
          sx={{
            px: 3,
            py: 2,
            bgcolor: "#F4F4F4",
            marginBottom: "20px",
            borderRadius: "12px",
          }}
        >
          <SlideSidewayInView>
            <HeadingText variant="h5" fontWeight="fontWeightSemiBold">
              {faq.question}
            </HeadingText>
          </SlideSidewayInView>
          <SlideSidewayInView>
            <BodyText
              variant="body1"
              fontWeight="fontWeightNormal"
              marginTop={1}
            >
              {faq.answer}
            </BodyText>
          </SlideSidewayInView>
        </Box>
      ))}
    </Box>
  );
};

export default Faqs;
