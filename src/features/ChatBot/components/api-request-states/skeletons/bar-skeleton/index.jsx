import { Skeleton } from "@mui/material";

const BarSkeleton = (props) => {
  const { length } = props;
  return Array?.from({ length })?.map((item, index) => (
    <Skeleton
      key={` skeleton ${index}`}
      animation="wave"
      width="100%"
      height={"2rem"}
      variant="rectangular"
      sx={{ my: 2 }}
    />
  ));
};

export default BarSkeleton;
