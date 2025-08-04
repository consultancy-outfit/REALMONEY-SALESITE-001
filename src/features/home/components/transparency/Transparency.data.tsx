import { Theme } from "@mui/material";
import {
  AnalyseIcon,
  FlagIcon,
  FlagUser,
  StopIcon,
  UserAnalysis,
  UserTransparency,
} from "../../assets";

export const transparencyData = (theme: Theme) => [
  {
    id: 1,
    title: "Stop known bad actors",
    description:
      "Act on collected behavioral information to flag or block individuals with device and network fingerprinting.",
    icon: FlagIcon,
    color: theme?.palette?.info?.dark,
    image: UserTransparency,
  },
  {
    id: 2,
    title: "Analyse fraud patterns",
    description:
      "Velocity abuse technology identifies recurring attempts to verify identity and create new accounts, whether it's different people with the same device and network or the same person with fake IDs.",
    icon: AnalyseIcon,
    color: theme?.palette?.common?.light_orange,
    image: UserAnalysis,
  },
  {
    id: 3,
    title: "Flag repeat attempts",
    description:
      "Velocity abuse technology identifies recurring attempts to verify identity and create new accounts, whether it's different people with the same device and network or the same person with fake IDs.",
    icon: StopIcon,
    color: theme?.palette?.common?.light_green,
    image: FlagUser,
  },
];
