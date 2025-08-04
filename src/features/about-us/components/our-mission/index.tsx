import Image from "next/image";
import { OurMissionImage } from "../../assets";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { BodyText } from "@/components/text/body-text";
import { GradientHeadingBlock } from "@/components/gradient-heading-block/gradient-heading-block";
import { LinkButton } from "@/components/buttons/link-button";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";
import { APP_ROUTES } from "@/constants/routes";

const OurMission = () => {
  return (
    <ContainerGridLayout customStyles={{ mx: "100px" }}>
      <ItemGridLayout md={6} xs={12}>
        <ScaleInView>
          <Image
            src={OurMissionImage}
            alt="OurMission"
            style={{ width: "100%", height: "auto" }}
          />
        </ScaleInView>
      </ItemGridLayout>
      <ItemGridLayout
        xs={12}
        md={4}
        lg={4}
        customStyles={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          mt: "50px",
        }}
      >
        <GradientHeadingBlock
          headingStart="Our"
          highlightText="Mission & Vision"
        />
        <BodyText
          variant="body1"
          marginBottom={2}
          customStyles={{ maxWidth: "500px" }}
        >
          To simplify and secure the identity verification process for
          businesses worldwide, helping them build trust, meet compliance
          requirements, and create frictionless user experiences.
        </BodyText>
        <BodyText variant="body1" customStyles={{ maxWidth: "500px" }}>
          To become the most reliable and intelligent global verification
          platform that empowers every digital interaction with trust and
          transparency.
        </BodyText>
        <LinkButton
          customStyles={{ bgcolor: "text.primary", borderRadius: "10px" }}
          link={APP_ROUTES?.CONTACT_US}
        >
          Join Our Team
        </LinkButton>
      </ItemGridLayout>
    </ContainerGridLayout>
  );
};

export default OurMission;
