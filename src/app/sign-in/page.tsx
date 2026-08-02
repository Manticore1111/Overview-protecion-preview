import { AuthCard } from "@/components/auth-card";
import { loginCustomer } from "@/app/customer-actions";

type SignInPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const resolvedParams = (await searchParams) ?? {};
  const errorMessage = typeof resolvedParams.error === "string" ? resolvedParams.error : undefined;

  return <AuthCard mode="sign-in" errorMessage={errorMessage} action={loginCustomer} />;
}