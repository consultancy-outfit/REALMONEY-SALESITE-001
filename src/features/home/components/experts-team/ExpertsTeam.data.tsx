import { Theme } from "@mui/material";
import {
  Expert1,
  Expert2,
  Expert3,
  Expert4,
  Expert5,
  Expert6,
  Expert7,
  Expert8,
} from "../../assets";

export const expertsTeamsData = (theme: Theme) => [
  {
    id: 1,
    name: "Micheal Moore",
    position: "Customer Representative",
    image: Expert1,
    bgcolor: theme?.palette?.common?.lightest_purple,
  },
  {
    id: 2,
    name: "Jack Bateman",
    position: "Customer Service",
    image: Expert2,
    bgcolor: theme?.palette?.common?.light_pink,
  },
  {
    id: 3,
    name: "Jordan Brown",
    position: "Technical Support",
    image: Expert3,
    bgcolor: theme?.palette?.common?.periwinkle_tint,
  },
  {
    id: 4,
    name: "Earnie Johnson",
    position: "Customer Support",
    image: Expert4,
    bgcolor: theme?.palette?.common?.light_green,
  },
  {
    id: 5,
    name: "Lucky Garcia",
    position: "Success Manager",
    image: Expert5,
    bgcolor: theme?.palette?.common?.light_blue,
  },
  {
    id: 6,
    name: "Aaron Smith",
    position: "Customer Service",
    image: Expert6,
    bgcolor: theme?.palette?.common?.light_yellow,
  },
  {
    id: 7,
    name: "Jason Lee",
    position: "Billing Support Specialist",
    image: Expert7,
    bgcolor: theme?.palette?.common?.lightest_pink,
  },
  {
    id: 8,
    name: "Michael Patel",
    position: "Quality Assurance",
    image: Expert8,
    bgcolor: theme?.palette?.common?.rose_gold,
  },
];
