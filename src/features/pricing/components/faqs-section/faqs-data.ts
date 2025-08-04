import { PROJECT_NAME } from "@/configs/env";

export const faqs = [
  {
    _id: "1",
    question: `What is ${PROJECT_NAME} and what does it do?`,
    answer: `${PROJECT_NAME} is an intelligent identity verification platform that helps businesses securely onboard customers and remain compliant. It combines AI, biometrics, and document verification to streamline KYC processes.`,
  },
  {
    _id: "2",
    question: "How does the verification process work?",
    answer:
      "Users upload their documents through a secure portal. Our system instantly checks authenticity, cross-references data, and verifies user identity in real time.",
  },
  {
    _id: "3",
    question: "Can I request custom features or integrations?",
    answer:
      "Yes! We offer custom workflows, API access, and integration support to tailor the experience to your specific industry and compliance requirements.",
  },
  {
    _id: "4",
    question: `Is my data secure with ${PROJECT_NAME}?`,
    answer:
      "Cloud-based KYC offers flexibility, rapid deployment, low maintenance, and seamless updates to keep you compliant with evolving regulations.",
  },
];
