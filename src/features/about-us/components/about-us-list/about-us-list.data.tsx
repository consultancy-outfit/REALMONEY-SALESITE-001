import {
  RealMoneyChooseUsIcon,
  RealMoneyMissionIcon,
  RealMoneyServeIcon,
  RealMoneyVisionIcon,
} from "../../assets/icons";
import { RealMoneyMainChooseUsImage, RealMoneyMainMissionImage, RealMoneyMainServeImage, RealMoneyMainVisionImage } from "../../assets/images";

export const aboutUsListData = [
  {
    id: 1,
    Icon: <RealMoneyVisionIcon />,
    heading: "To Power the Future of Finance—Globally and Transparently",
    iconText: "Our Vision",
    description:
      "We envision a world where financial systems are open, connected, and human-centred. Real Money seeks to become the most trusted open finance platform, enabling seamless access to banking, payments, and identity services across borders and ecosystems.",

    image: RealMoneyMainVisionImage,
  },
  {
    id: 2,
    Icon: <RealMoneyMissionIcon />,
    iconText: "Our Mission",
    heading: "Financial Innovation with Intelligence, Security, and Simplicity",
    description:
      "We aim to unlock the full potential of financial data and money movement by providing businesses with real-time, intelligent, and secure open finance infrastructure. Our mission is to help fintechs, banks, and enterprises build bold financial products—faster, smarter, and fully compliant.",

    image: RealMoneyMainMissionImage,
  },
  {
    id: 3,
    Icon: <RealMoneyServeIcon />,
    iconText: "Who We Serve",
    heading: "We power innovation for :",
    itemsList: [
      {
        description: "Fintech Startups looking to build banking features fast ",
      },
      {
        description: "SMEs automating financial operations",
      },
      {
        description: "Banks & Credit Unions embracing open banking ",
      },
      {
        description:
          "Accounting Platforms streamlining payables and receivables",
      },
      {
        description:
          "Ecommerce & Marketplaces needing real-time payments and identity checks ",
      },
    ],
    image: RealMoneyMainServeImage
  },
  {
    id: 4,
    iconText: "Why Choose Us?",
    Icon: <RealMoneyChooseUsIcon />,
    heading: "Real Money got you all in one suite :",
    itemsList: [
      {
        description:
          "End-to-End Platform: From data access to payments and compliance—we handle it all. ",
      },
      {
        description:
          "Developer-First: Modern APIs, sandbox environments, and robust documentation.",
      },
      {
        description:
          "Security by Design: Data encryption, user consent, and regulatory alignment are at our core. ",
      },
      {
        description:
          "Modular & Scalable: Use only what you need, and scale when you grow.",
      },
      {
        description:
          "Built for Innovation: Trusted by startups, scale-ups, and enterprises to power next-generation financial products. ",
      },
    ],

    image: RealMoneyMainChooseUsImage
  },
];
