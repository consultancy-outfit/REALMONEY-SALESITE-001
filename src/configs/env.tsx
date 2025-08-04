export const DOMAIN =
  typeof window !== "undefined" ? window.location.origin : "";
export const BACKEND_BASE_URL =
  process?.env?.NEXT_PUBLIC_BACKEND_BASE_URL ?? "";
export const IMAGE_BASE_URL = process?.env?.NEXT_PUBLIC_IMAGE_BASE_URL ?? "";
export const FRONTEND_BASE_URL =
  process?.env?.NEXT_PUBLIC_FRONTEND_BASE_URL ?? "/";
export const FRONTEND_SALE_SITE_BASE_URL =
  process?.env?.NEXT_PUBLIC_FRONTEND_SALE_SITE_BASE_URL ?? DOMAIN;
export const PROJECT_NAME =
  process?.env?.NEXT_PUBLIC_PROJECT_NAME ??
  "FA Global | Smarter Open Banking & Financial Data Solutions";
export const PROJECT_DESCRIPTION =
  process?.env?.NEXT_PUBLIC_PROJECT_DESCRIPTION;
export const BASE_URL =
  process.env.NEXT_PUBLIC_ENQUIRIES_BASE_URL ??
  "https://gateway.agenticcreed.ai/";
export const API_KEY =
  process.env.NEXT_PUBLIC_ENQUIRIES_API_KEY ??
  "3e64fbf9cec9dbf0691da2ece58c4d32:7422218882c502dd29d01add8de933feb315cef89e07c82256be9809ee924d260731231f8c11a2cd1eef9a505dc0da2c24cb1c8c1749cbc8f9a74a3f6441ef7166ff77aa3bb665e94737045e28f7f827d183ea54443e7d7fdd55161d079e14f6";
export const COMPANY_EMAIL_ADDRESS =
  process.env.NEXT_PUBLIC_COMPANY_EMAIL_ADDRESS ?? `info@identitygram.co.uk`;
export const COMPANY_LOCATION_ADDRESS =
  process.env.NEXT_PUBLIC_COMPANY_LOCATION_ADDRESS ??
  `International House, 36-38 Cornhill, London, England, EC3V 3NG`;
export const COMPANY_CRN = process.env.NEXT_PUBLIC_COMPANY_CRN ?? `15439659`;
export const CAREER_PORTAL_BASE_URL =
  process?.env?.NEXT_PUBLIC_CAREER_PORTAL_BASE_URL ??
  `https://recruiting.peoplescreed.ai//job-boards?boardName=PersonalBoard-1746179395943`;
