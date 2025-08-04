import { APP_ROUTES } from "@/constants/routes";

export const navLinksData = [
  {
    title: "Home",
    path: APP_ROUTES.HOME,
  },
  {
    title: "About Us",
    path: APP_ROUTES.ABOUT_US,
  },
  {
    title: "Products",
    path: APP_ROUTES.SERVICES,
    children: [
      {
        title: "Core Services",
        path: APP_ROUTES.PRODUCT_1,
      },
      {
        title: "Data Intelligence & Enrichment",
        path: APP_ROUTES.PRODUCT_2,
      },
      {
        title: " Identity & KYC",
        path: APP_ROUTES.PRODUCT_3,
      },
      {
        title: "Compliance & Access",
        path: APP_ROUTES.PRODUCT_4,
      },
      {
        title: "Centspay",
        path: APP_ROUTES.PRODUCT_5,
      },
      {
        title: "Accountant Help Squad",
        path: APP_ROUTES.PRODUCT_6,
      },
    ],
  },
  {
    title: "Use Cases",
    path: APP_ROUTES.PRICING,
  },
  {
    title: "Contact Us",
    path: APP_ROUTES.CONTACT_US,
  },
];
