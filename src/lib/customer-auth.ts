import { createHmac, timingSafeEqual } from "node:crypto";

import { cookies } from "next/headers";

export const CUSTOMER_ACCOUNT_COOKIE = "cv-customer-account";
export const CUSTOMER_SESSION_COOKIE = "cv-customer-session";

export type CustomerAccount = {
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  preferredPlanSlug?: string;
};

export type CustomerSession = {
  name: string;
  email: string;
  signedInAt: string;
};

function getAuthSecret() {
  return process.env.AUTH_SECRET || "contentvault-auth-secret";
}

function signPayload(payload: string) {
  return createHmac("sha256", getAuthSecret()).update(payload).digest("hex");
}

function signaturesMatch(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);

  if (left.length !== right.length) {
    return false;
  }

  return timingSafeEqual(left, right);
}

function encodeSignedValue<T>(value: T) {
  const payload = Buffer.from(JSON.stringify(value)).toString("base64url");
  return `${payload}.${signPayload(payload)}`;
}

function decodeSignedValue<T>(token?: string | null) {
  if (!token) {
    return null;
  }

  const [payload, signature] = token.split(".");

  if (!payload || !signature) {
    return null;
  }

  const expectedSignature = signPayload(payload);

  if (!signaturesMatch(signature, expectedSignature)) {
    return null;
  }

  try {
    const decoded = Buffer.from(payload, "base64url").toString("utf8");
    return JSON.parse(decoded) as T;
  } catch {
    return null;
  }
}

function hashPassword(email: string, password: string) {
  return createHmac("sha256", getAuthSecret()).update(`${email}::${password}`).digest("hex");
}

export function validatePassword(password: string) {
  const checks = {
    minLength: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /\d/.test(password),
  };

  const isValid = Object.values(checks).every(Boolean);

  return {
    isValid,
    checks,
    message: isValid ? null : "Gebruik minimaal 8 tekens, 1 hoofdletter, 1 kleine letter en 1 cijfer.",
  };
}

export function createPasswordHash(email: string, password: string) {
  return hashPassword(email.trim().toLowerCase(), password);
}

export function verifyPassword(email: string, password: string, passwordHash: string) {
  return hashPassword(email.trim().toLowerCase(), password) === passwordHash;
}

function getCookieOptions(maxAgeSeconds: number) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: maxAgeSeconds,
  };
}

export async function getCustomerAccount() {
  const cookieStore = await cookies();
  return decodeSignedValue<CustomerAccount>(cookieStore.get(CUSTOMER_ACCOUNT_COOKIE)?.value);
}

export async function setCustomerAccount(account: CustomerAccount) {
  const cookieStore = await cookies();

  cookieStore.set(CUSTOMER_ACCOUNT_COOKIE, encodeSignedValue(account), getCookieOptions(60 * 60 * 24 * 120));
}

export async function clearCustomerAccount() {
  const cookieStore = await cookies();
  cookieStore.delete(CUSTOMER_ACCOUNT_COOKIE);
}

export async function getCustomerSession() {
  const cookieStore = await cookies();
  return decodeSignedValue<CustomerSession>(cookieStore.get(CUSTOMER_SESSION_COOKIE)?.value);
}

export async function setCustomerSession(session: CustomerSession) {
  const cookieStore = await cookies();

  cookieStore.set(CUSTOMER_SESSION_COOKIE, encodeSignedValue(session), getCookieOptions(60 * 60 * 24 * 30));
}

export async function clearCustomerSession() {
  const cookieStore = await cookies();
  cookieStore.delete(CUSTOMER_SESSION_COOKIE);
}