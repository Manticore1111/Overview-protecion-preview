import Link from "next/link";
import { redirect } from "next/navigation";

import { changeCustomerPassword, logoutCustomer } from "@/app/customer-actions";
import { getCustomerAccount, getCustomerSession } from "@/lib/customer-auth";
import { getPlanBySlug } from "@/lib/site-config";

type DashboardPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const resolvedParams = (await searchParams) ?? {};
  const session = await getCustomerSession();
  const account = await getCustomerAccount();

  if (!session || !account) {
    redirect("/sign-in?error=Log eerst in om je dashboard te openen.");
  }

  const plan = getPlanBySlug(account.preferredPlanSlug);
  const errorMessage = typeof resolvedParams.error === "string" ? resolvedParams.error : undefined;
  const successMessage = resolvedParams.success === "password" ? "Je wachtwoord is bijgewerkt." : undefined;

  return (
    <main className="grain page-shell min-h-screen overflow-hidden px-6 py-8 sm:px-8 lg:px-12">
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="panel-strong relative flex flex-col justify-between gap-4 rounded-[2.2rem] px-6 py-5 sm:flex-row sm:items-center">
          <div className="ambient-grid" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">klantdashboard</p>
            <h1 className="display-font mt-2 text-3xl font-bold tracking-tight text-[#102033] sm:text-4xl">
              Welkom terug, {session.name}
            </h1>
          </div>
          <div className="relative flex items-center gap-3">
            <Link className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[#102033]" href="/">
              Homepage
            </Link>
            <form action={logoutCustomer}>
              <button className="rounded-full bg-[#102033] px-4 py-2 text-sm font-medium text-white" type="submit">
                Uitloggen
              </button>
            </form>
          </div>
        </header>

        {errorMessage ? (
          <div className="rounded-[1.6rem] border border-[#f4b49f] bg-[#fff1e9] px-5 py-4 text-sm leading-7 text-[#91442f]">
            {errorMessage}
          </div>
        ) : null}
        {successMessage ? (
          <div className="rounded-[1.6rem] border border-[#9ed9cf] bg-[#e9fbf6] px-5 py-4 text-sm leading-7 text-[#0f6b6d]">
            {successMessage}
          </div>
        ) : null}

        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-[2.2rem] bg-[#102033] p-7 text-white shadow-[0_32px_90px_rgba(16,32,51,0.24)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-white/55">Account overzicht</p>
            <h2 className="display-font mt-3 text-4xl font-bold">{plan.name}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/76">
              Je klantaccount is actief op dit apparaat. Gebruik het dashboard om je voorkeursplan, levering en beveiligingsinstellingen te beheren.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [account.email, "ingelogd e-mailadres"],
                ["Actief", "toegangstatus"],
                ["Sterk", "wachtwoordstatus"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                  <p className="display-font break-all text-2xl font-bold">{value}</p>
                  <p className="mt-2 text-sm text-white/66">{label}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel rounded-[2.2rem] p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">Snelle acties</p>
            <h2 className="display-font mt-3 text-3xl font-bold tracking-tight text-[#102033]">
              Alles voor klanten op één plek.
            </h2>
            <div className="mt-6 grid gap-4">
              <Link className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]" href={`/checkout?plan=${plan.slug}`}>
                Bestel of upgrade plan
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[#102033] transition hover:bg-[#f8f2e8]" href="/preview">
                Bekijk sample content
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[#102033] transition hover:bg-[#f8f2e8]" href="/privacy">
                Privacy en voorwaarden
              </Link>
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel rounded-[2.2rem] p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">Levering</p>
            <h2 className="display-font mt-3 text-3xl font-bold tracking-tight text-[#102033]">
              Wat je als klant kunt verwachten.
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#556374]">
              <li>• Wekelijkse content- en promptdrops voor jouw niche.</li>
              <li>• CTA's, scripts en contenthoeken die richting gesprekken en calls sturen.</li>
              <li>• Eenvoudige levering via mail, Drive of een private link zonder account-chaos.</li>
            </ul>
          </article>

          <article className="panel rounded-[2.2rem] p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">Wachtwoord wijzigen</p>
            <h2 className="display-font mt-3 text-3xl font-bold tracking-tight text-[#102033]">
              Beveilig je klantaccount.
            </h2>
            <form action={changeCustomerPassword} className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#425163]" htmlFor="currentPassword">
                  Huidig wachtwoord
                </label>
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  required
                  className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[#102033] outline-none transition focus:border-[#102033]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#425163]" htmlFor="newPassword">
                  Nieuw wachtwoord
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  minLength={8}
                  required
                  className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[#102033] outline-none transition focus:border-[#102033]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#425163]" htmlFor="confirmPassword">
                  Bevestig nieuw wachtwoord
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  minLength={8}
                  required
                  className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[#102033] outline-none transition focus:border-[#102033]"
                />
              </div>
              <button className="w-full rounded-full bg-[#102033] px-5 py-3 text-sm font-semibold text-white" type="submit">
                Wachtwoord opslaan
              </button>
            </form>
          </article>
        </section>
      </div>
    </main>
  );
}