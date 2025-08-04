import { Theme } from "@mui/material";
import { SolarBill, UserAvatar, UserDesktop } from "../../assets";
import { APP_ROUTES } from "@/constants/routes";

export const servicesData = (theme: Theme) => [
  {
    id: 1,
    title: "Check My DBS",
    description: "Securing Trust, One Background Check at a Time.",
    icon: UserAvatar,
    color: theme?.palette?.info?.dark,
    route: `${APP_ROUTES?.SERVICES}/detail?id=check-my-dbs`,
  },
  {
    id: 2,
    title: "Digital ID Verification",
    description: "Unlock Trust with Seamless Digital ID Verification",
    icon: UserDesktop,
    color: theme?.palette?.common?.light_orange,
    route: `${APP_ROUTES?.SERVICES}/detail?id=digital-id-verification`,
  },
  {
    id: 3,
    title: "Reference Checks",
    description: "Unlock Trust, One Reference at a Time",
    icon: SolarBill,
    color: theme?.palette?.common?.light_green,
    route: `${APP_ROUTES?.SERVICES}/detail?id=reference-checks`,
  },
];
