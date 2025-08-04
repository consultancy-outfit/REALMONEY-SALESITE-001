import { pxToRem } from "@/utils/styles";

const FONT_FAMILY = "inherit";

export const typography = {
  fontFamily: FONT_FAMILY,
  fontWeightExtraLight: 200,
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  fontWeightBlack: 900,
  h1: {
    fontSize: pxToRem(84),
  },
  h2: {
    fontSize: pxToRem(72),
  },
  h3: {
    fontSize: pxToRem(52),
  },
  h4: {
    fontSize: pxToRem(40),
  },
  h5: {
    fontSize: pxToRem(28),
  },
  h6: {
    fontSize: pxToRem(24),
  },
  subtitle1: {
    fontSize: pxToRem(20),
  },
  subtitle2: {
    fontSize: pxToRem(18),
  },
  body1: {
    fontSize: pxToRem(16),
  },
  body2: {
    fontSize: pxToRem(14),
  },
  caption: {
    fontSize: pxToRem(12),
  },
  pageTitled: {
    fontSize: pxToRem(23),
  },
  extraHeading: {
    fontSize: pxToRem(64),
    lineHeight: 1,
  },
  extraHeading2: {
    fontSize: pxToRem(30),
    lineHeight: 1,
  },
  button: {
    fontSize: pxToRem(16),
    fontWeight: 500,
    lineHeight: pxToRem(22),
    textTransform: "capitalize",
  },
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    pageTitled: React.CSSProperties;
    extraHeading: React.CSSProperties;
    extraHeading2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    pageTitled?: React.CSSProperties;
    extraHeading?: React.CSSProperties;
    extraHeading2?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    pageTitled: true;
    extraHeading: true;
    extraHeading2: true;
  }
}
