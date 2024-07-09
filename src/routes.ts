export const publicRoutes = [
  "/",
  "/contact",
  "/about",
  "/breed",
  "/breed/:breedId",
  "/breed/*",
  "/my-dogs",
  "/chat",
  "/auth/new-verification",
  "/api/*",
  "/profile/*",
];

export const authRoutes = [
  "/auth/signin",
  "/auth/signup",
  "/auth/error",
  "/auth/forget-password",
  "/auth/reset-password",
];

export const apiAuthPrefix = ["/api/auth"];

export const DEFAULT_LOGIN_REDIRECT = "/";
