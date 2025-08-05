import { Box, Container } from "@mui/material";
import { GlobalBulletsListCard } from "@/components/cards/global-bullets-list-card";
import { aboutUsListData } from "./about-us-list.data";

const AboutUsList = () => {
  return (
    <Container maxWidth="xl">
      {aboutUsListData?.map((item: any, index: any) => (
        <Box key={item?.id} sx={{ my: 6 }}>
          <GlobalBulletsListCard
            key={item?.id}
            heading={item?.heading}
            description={item?.description}
            itemsList={item?.itemsList}
            subDescription={item?.subDescription}
            points={item?.points}
            mainImage={item?.image}
            Icon={item?.Icon}
            iconText={item?.iconText}
            isEven={index % 2 === 0}
          />
        </Box>
      ))}
    </Container>
  );
};

export default AboutUsList;
