import { SxProps } from "@mui/material";
import { ReactNode } from "react";

export type FontWeightTypes =
  | "fontWeightThin"
  | "fontWeightNormal"
  | "fontWeightMedium"
  | "fontWeightSemiBold"
  | "fontWeightBold"
  | "fontWeightExtraBold"
  | "fontWeightBlack";

export type HeadingTextVariantTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "extraHeading2";

export type SubHeadingTextVariantTypes = "subtitle1" | "subtitle2";

export type BodyTextVariantTypes = "body1" | "body2" | "caption" | "overline";

export type CustomTextVariantTypes =
  | "pageTitled"
  | "extraHeading"
  | "extraHeading2";

export type TextComponentTypes = "div" | "p" | "span";

export interface HeadingTextPropsI {
  variant?: HeadingTextVariantTypes;
  color?: string;
  fontWeight?: FontWeightTypes;
  component?: TextComponentTypes;
  children: ReactNode;
  isCapital?: boolean;
  customStyles?: any;
  letterSpacing?: string;
}

export interface SubHeadingTextPropsI {
  variant?: SubHeadingTextVariantTypes;
  color?: string;
  fontWeight?: FontWeightTypes;
  component?: TextComponentTypes;
  children: ReactNode;
  isCapital?: boolean;
  marginTop?: number;
  marginBottom?: number;
  fontStyle?: string;
  lineHeight?: number | string;
  customStyles?: SxProps;
  letterSpacing?: string;
}

export interface BodyTextPropsI {
  variant?: BodyTextVariantTypes;
  color?: string;
  fontWeight?: FontWeightTypes;
  component?: TextComponentTypes;
  children: ReactNode;
  isCapital?: boolean;
  marginTop?: number;
  marginBottom?: number;
  fontStyle?: string;
  customStyles?: SxProps;
  letterSpacing?: string;
}

export interface CustomTextPropsI {
  variant?:
    | CustomTextVariantTypes
    | HeadingTextVariantTypes
    | SubHeadingTextVariantTypes
    | BodyTextVariantTypes;
  color?: string;
  fontWeight?: FontWeightTypes;
  component?: TextComponentTypes;
  children: ReactNode;
  isCapital?: boolean;
  customStyles?: any;
  letterSpacing?: string;
}
