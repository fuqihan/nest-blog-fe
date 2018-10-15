export interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: string|Date;
  secure?: boolean;
  httpOnly?: boolean;
  storeUnencoded?: boolean;
}
