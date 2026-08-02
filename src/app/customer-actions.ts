"use server";

import { redirect } from "next/navigation";

import {
  clearCustomerSession,
  createPasswordHash,
  getCustomerAccount,
  getCustomerSession,
  setCustomerAccount,
  setCustomerSession,
  validatePassword,
  verifyPassword,
} from "@/lib/customer-auth";

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function redirectWithError(path: string, error: string): never {
  redirect(`${path}?error=${encodeURIComponent(error)}`);
}

export async function registerCustomer(formData: FormData) {
  const name = readString(formData, "name");
  const email = readString(formData, "email").toLowerCase();
  const password = readString(formData, "password");
  const confirmPassword = readString(formData, "confirmPassword");
  const preferredPlanSlug = readString(formData, "preferredPlanSlug");

  if (!name || !email.includes("@")) {
    redirectWithError("/register", "Vul een geldige naam en e-mailadres in.");
  }

  const passwordValidation = validatePassword(password);

  if (!passwordValidation.isValid) {
    redirectWithError("/register", passwordValidation.message || "Ongeldig wachtwoord.");
  }

  if (password !== confirmPassword) {
    redirectWithError("/register", "De wachtwoorden komen niet overeen.");
  }

  const account = {
    name,
    email,
    passwordHash: createPasswordHash(email, password),
    createdAt: new Date().toISOString(),
    preferredPlanSlug: preferredPlanSlug || undefined,
  };

  await setCustomerAccount(account);
  await setCustomerSession({
    name,
    email,
    signedInAt: new Date().toISOString(),
  });

  redirect("/dashboard?welcome=1");
}

export async function loginCustomer(formData: FormData) {
  const email = readString(formData, "email").toLowerCase();
  const password = readString(formData, "password");
  const account = await getCustomerAccount();

  if (!account) {
    redirectWithError("/sign-in", "Er is nog geen account op dit apparaat. Registreer eerst.");
  }

  if (account.email !== email) {
    redirectWithError("/sign-in", "Gebruik hetzelfde e-mailadres waarmee je op dit apparaat hebt geregistreerd.");
  }

  if (!verifyPassword(email, password, account.passwordHash)) {
    redirectWithError("/sign-in", "Onjuist wachtwoord. Probeer opnieuw.");
  }

  await setCustomerSession({
    name: account.name,
    email: account.email,
    signedInAt: new Date().toISOString(),
  });

  redirect("/dashboard");
}

export async function logoutCustomer() {
  await clearCustomerSession();
  redirect("/");
}

export async function changeCustomerPassword(formData: FormData) {
  const currentPassword = readString(formData, "currentPassword");
  const newPassword = readString(formData, "newPassword");
  const confirmPassword = readString(formData, "confirmPassword");
  const account = await getCustomerAccount();
  const session = await getCustomerSession();

  if (!account || !session) {
    redirect("/sign-in?error=Log opnieuw in om je wachtwoord te wijzigen.");
  }

  if (!verifyPassword(account.email, currentPassword, account.passwordHash)) {
    redirect("/dashboard?error=Huidig%20wachtwoord%20is%20onjuist.");
  }

  const passwordValidation = validatePassword(newPassword);

  if (!passwordValidation.isValid) {
    redirect(`/dashboard?error=${encodeURIComponent(passwordValidation.message || "Ongeldig wachtwoord.")}`);
  }

  if (newPassword !== confirmPassword) {
    redirect("/dashboard?error=Nieuwe%20wachtwoorden%20komen%20niet%20overeen.");
  }

  await setCustomerAccount({
    ...account,
    passwordHash: createPasswordHash(account.email, newPassword),
  });

  redirect("/dashboard?success=password");
}