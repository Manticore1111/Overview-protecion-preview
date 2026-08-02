import { AuthCard } from "@/components/auth-card";
import { registerCustomer } from "@/app/customer-actions";

type RegisterPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const resolvedParams = (await searchParams) ?? {};
  const errorMessage = typeof resolvedParams.error === "string" ? resolvedParams.error : undefined;
  const defaultPlanSlug = typeof resolvedParams.plan === "string" ? resolvedParams.plan : "growth-club";

  return <AuthCard mode="register" errorMessage={errorMessage} defaultPlanSlug={defaultPlanSlug} action={registerCustomer} />;
}