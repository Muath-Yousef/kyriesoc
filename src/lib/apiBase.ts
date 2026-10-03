// Canonical endpoint for the SOCRoot API base URL.
// LOCAL dev:  VITE_SOCROOT_API=http://localhost:8000  (see .env.development)
// PRODUCTION: falls back to the public API domain when the var is unset.

const RAW = (import.meta as unknown as { env?: Record<string, string> }).env
  ?.VITE_SOCROOT_API;

export const SOCROOT_API: string = RAW?.replace(/\/+$/, "") || "https://api.socroot.com";
