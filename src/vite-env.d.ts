/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COMPANY_NAME: string;
  readonly VITE_CONTACT_ENDPOINT: string;
  readonly VITE_ANALYTICS_PROVIDER: string;
  readonly VITE_ANALYTICS_DOMAIN: string;
  readonly VITE_GA_ID: string;
  readonly VITE_CALENDLY_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
