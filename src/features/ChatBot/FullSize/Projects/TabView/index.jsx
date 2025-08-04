import { Box, Typography } from "@mui/material";
import { ContainerGrid } from "../../../components/Grids/ContainerGrid";
import { ItemGrid } from "../../../components/Grids/ItemGrid";
import { projectListData } from "../Projects.data";

export const TabView = (props) => {
  const { setValue } = props;

  return (
    <>
      <ContainerGrid rowSpacing={5} columnSpacing={2}>
        {projectListData?.map((item) => (
          <ItemGrid md={4} key={item?._id}>
            <Box
              sx={{
                border: "2px solid #EAEAEA",
                borderRadius: 4,
                cursor: "pointer",
                height: "100%",
                paddingY: 1.3,
                paddingX: 0.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setValue("message", item?.name)}
            >
              <Typography
                className="chat-bot-font-family"
                sx={{ color: "#505050", fontWeight: 700, fontSize: "1rem" }}
              >
                {item?.name}
              </Typography>
            </Box>
          </ItemGrid>
        ))}
      </ContainerGrid>
      <br />
      <br />
      <br />
    </>
  );
};
