import { Grid } from "@mui/material";

export const ItemGrid = (props) => {
  const {
    xs = 12,
    sm = xs,
    md = sm,
    lg = md,
    xl = lg,
    customStyles,
    children,
  } = props;

  return (
    <Grid size={{ xs, sm, md, lg, xl }} sx={{ ...customStyles }}>
      {children}
    </Grid>
  );
};
