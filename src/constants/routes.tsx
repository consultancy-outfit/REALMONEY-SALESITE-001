import { FRONTEND_BASE_URL } from "@/configs/env";

export const AUTH_ROUTES = {
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
};

export const APP_ROUTES = {
  HOME: "/",
  ABOUT_US: "/about-us",
  SERVICES: "/products",
  SERVICES_DETAIL: "/services/detail",
  PRICING: "/use-cases",
  CAREERS: "/careers",
  PARTNER_WITH_US: "/login",
  CONTACT_US: "/contact-us",
  COOKIE_POLICY: "/cookies-policy",
  DATA_PROTECTION_POLICY: "/data-protection-policy",
  SECURITY_AND_COMPLIANCE_POLICY: "/security-and-compliance-policy",
  PRIVACY_POLICY: "/privacy-policy",
  TERM_AND_CONDITION: "/terms-and-conditions",
  PRODUCT_1: "/smart-back-data-layer",
  PRODUCT_2: "/identity-and-compliance",
  PRODUCT_3: "/centspay",
  PRODUCT_4: "/accountant-help-squad",
  PRODUCT_5: "/view-all",
  Get_STARTED: "/get-started",
  Comming_Soon: "/coming-soon",
};

export const SOCIAL_ROUTES = {
  INSTAGRAM: "https://www.instagram.com/identitygram_/",
  LINKEDIN: "https://www.linkedin.com/company/identitygram",
  FACEBOOK: "https://www.facebook.com/Identitygram",
  TWITTER: "https://twitter.com/Identitygram_",
  YOUTUBE: "https://www.youtube.com/@Identitygram_",
  TIKTOK: "https://www.tiktok.com/@identitygram_",
};

export const PROJECT_WEB_APP_ROUTES = {
  SIGNUP: `${FRONTEND_BASE_URL}/auth/signup`,
  SIGNIN: `${FRONTEND_BASE_URL}/auth/login`,
};

export const USE_CASE_DETAIL_ROUTES = {
  REAL_TIME_BANK_INSIGHTS: "/use-cases/use-case-detail/real-time-bank-insights",
  FINTECH_APPS: "/use-cases/use-case-detail/fintech-apps",
  PAYMENTS_WITH_AHS: "/use-cases/use-case-detail/payments-with-ahs",
  REMOTE_TEAMS: "/use-cases/use-case-detail/remote-teams",
  PRECISION_CONSENT: "/use-cases/use-case-detail/precision-consent",
};
